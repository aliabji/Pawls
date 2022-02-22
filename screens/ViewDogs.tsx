import { StyleSheet, ScrollView } from 'react-native';
import {useEffect, useState} from 'react'
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function ViewDogs({ navigation }: RootTabScreenProps<'ViewDogs'>) {
    const [dogs, setDogs] = useState<any>(undefined)
  useEffect(() => {
    fetch('http://192.168.68.127:3001/users/1/dogs', {
      headers: { 'Content-Type': 'application/json' },
      method: 'GET'
      }).then((data) => data.json()).then((res) =>{
        if (res.dogs) {
            // console.log("logged in ", res)
        //   navigation.replace('Dashboard', res.user)
        setDogs(res.dogs)
        } else {
            console.log("no dogs found")
        }
      })
      .catch((err) => {
        console.log('error checking login: ', err)
      })
  
  }, [])
  return (
    <View style={styles.container}>
              <ScrollView>
        {dogs && dogs.map((dog: any, key: any) => {
            return (
                <View key={key}>
                    <Text>{dog.name} {dog.breed} {dog.age}</Text>
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
