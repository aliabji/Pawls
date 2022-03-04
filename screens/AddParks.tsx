import { StyleSheet, Button, ScrollView } from 'react-native';
import {useState, useEffect} from 'react';
import { Text, View } from '../components/Themed';
import {LogOutButton} from '../components/LogOutButton';
import { RootTabScreenProps } from '../types';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import * as Location from 'expo-location';
import {ParkCard} from '../components/ParkCard';
// import {po} from '../utils/apiService'

export default function AddParks({ navigation, route: {params} }: RootTabScreenProps<'AddParks'>) {
    const [location, setLocation] = useState<any>(undefined)
    const [errorMsg, setErrorMsg] = useState<string>();
    const [nearbyParks, setNearbyParks] = useState<any>(undefined);

    useEffect(() => {
        (async () => {
          let { status } = await Location.requestForegroundPermissionsAsync();
          if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            return;
          }
    
          let location = await Location.getCurrentPositionAsync({});
          setLocation(location);

          fetch(listParksApiUrl(location.coords.latitude, location.coords.longitude)).then(res => res.json()).then(data => setNearbyParks(data)).catch(err => console.log('error', err))
        })();
      }, []);

    const postPark = async (park: any) => {
        try {
          fetch('http://192.168.68.127:3001/parks/create', {
            headers: { 'Content-Type': 'application/json' },
            method: 'POST',
            body: JSON.stringify({name: park.name, place_id: park.place_id, vicinity: park.vicinity})
            }).then((data) => data.json()).then((res) =>{
              if (res.park) {
                  console.log(res.park)
                console.log(`${res.park.name} was successfully added to your profile `)
              } else {
                console.log("dog submission failed ", res.errors)
              }
            })
            .catch((err) => {
              console.log(err)
              console.log('error adding park: ', err)
            })
        } catch (err) {
          console.log("Unrecoverable error occured ", err)
        }
    }

    return (
    <View style={styles.container}>
      <Text style={styles.title}>Select a park to take your dog too</Text>
      <ScrollView>
        {nearbyParks && nearbyParks.results && nearbyParks.results.map((park: any, key: any) => {
            return (
                <View key={key}>
                    <Text>{park.name} {park.rating} {park.vicinity}</Text>
                    <Button title="Add Park" onPress={() => postPark(park)} />
                </View>
            )
        })
        }
      </ScrollView>
      <GooglePlacesAutocomplete
        placeholder="parks"
        GooglePlacesSearchQuery={
            { rankby: 'distance', type: 'park' }
        }
        query={
            {
                key: process.env.GOOGLE_PLACES_API_KEY,
            }
        }
        onPress={(data, details) => console.log(data, details)}
        
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  subHeading: {
    fontSize: 15,
    // fontWeight: 'bold',
  },
});
