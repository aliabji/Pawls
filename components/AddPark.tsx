import { StyleSheet, Button, ScrollView } from 'react-native';
import {useState, useEffect} from 'react';
import { Text, View } from '../components/Themed';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import * as Location from 'expo-location';
import {ParkDisplay} from '../components/ParkDisplay';
import {listParksApiUrl} from '../constants/google';
import {createPark} from '../utils/apiService';

export default function AddPark(){
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
            createPark({name: park.name, place_id: park.place_id, vicinity: park.vicinity}).then((res) => {
                console.log(res)
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
      <Text>testS</Text>
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
