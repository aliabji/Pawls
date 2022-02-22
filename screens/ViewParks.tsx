import { StyleSheet, ScrollView } from 'react-native';
import {useEffect, useState} from 'react'
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function ViewParks({ navigation }: RootTabScreenProps<'ViewParks'>) {
    const [parks, setParks] = useState<any>(undefined)
  useEffect(() => {
    fetch('http://192.168.68.127:3001/users/1/parks', {
      headers: { 'Content-Type': 'application/json' },
      method: 'GET'
      }).then((data) => data.json()).then((res) =>{
          console.log(res)
        if (res.parks) {
            // console.log("logged in ", res)
        //   navigation.replace('Dashboard', res.user)
        setParks(res.parks)
        } else {
            console.log("no parks found")
        }
      })
      .catch((err) => {
        console.log('error checking login: ', err)
      })
  
  }, [])
  return (
    <View style={styles.container}>
              <ScrollView>
        {parks && parks.map((park: any, key: any) => {
            return (
                <View key={key}>
                    <Text>{park.name} {park.vicinity}</Text>
                </View>
            )
        })
        }
      </ScrollView>
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
