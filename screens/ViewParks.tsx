import { StyleSheet, ScrollView } from 'react-native';
import {useEffect, useState} from 'react'
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import {getParks} from '../utils/apiService'
import {ParkDisplay} from '../components/ParkDisplay'

export default function ViewParks({ navigation }: RootTabScreenProps<'ViewParks'>) {
    const [parks, setParks] = useState<any>(undefined)
  useEffect(() => {
    getParks().then((res) => {
      if (res.parks) {
        setParks(res.parks)
    } else {
        console.log("no parks found")
    }
    })
  
  }, [])
  return (
    <View style={styles.container}>
      <ScrollView>
        {parks && parks.map((park: any, key: any) => {
            return (
              <ParkDisplay key={key} park={park} />
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
    flexDirection:'column',
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
