import { StyleSheet, ScrollView } from 'react-native';
import {useEffect, useState} from 'react'
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import {getDogs} from '../utils/apiService';

export default function ViewDogs({ navigation }: RootTabScreenProps<'ViewDogs'>) {
    const [dogs, setDogs] = useState<any>(undefined)

    useEffect(() => {
      getDogs(1).then((res) => {
        if (res.dogs) {
          setDogs(res.dogs)
        } else {
          console.log("no dogs found")
        }
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
