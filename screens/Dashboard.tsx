import { StyleSheet, ScrollView } from 'react-native';
import {useState, useEffect} from 'react';
import { View } from '../components/Themed';
import {LogOutButton} from '../components/LogOutButton';
import { RootTabScreenProps } from '../types';
import { getVisits } from '../utils/apiService'
import {VisitDisplay} from '../components/VisitDisplay';
import { Button, Text } from 'react-native-paper';

export default function Dashboard({ navigation, route: {params} }: RootTabScreenProps<'Dashboard'>) {
    const [visits, setVisits] = useState<any>([])

    // useEffect(() => {
    //     getVisits().then((res) => {
    //         console.log("res ----- ", res)
    //         if (res.visits) {
    //             setVisits(res.visits)
    //         } else {
    //             console.log(res)
    //         }
    //     })
    // }, [])

    console.log(params)

    return (
    <View style={styles.container}>
      <Text style={{color: "white"}}>Welcome back, {params && params.username}!</Text>
      <Text style={{color: "white"}}>Dashboard</Text>
      <Button onPress={() => navigation.push('AddParks')}>Add parks</Button>
      <Button onPress={() => navigation.push('ViewParks')}>View my parks</Button>
      <Button onPress={() => navigation.push('ViewDogs')}>View my dogs</Button>
      <Button onPress={() => navigation.push('CreateParkVisit', params)}>Create park visit</Button>
      {visits.length > 0 && (
        <ScrollView>
            {visits.map((visit, key) => {
                return (
                    <VisitDisplay key={key} visit={visit[0]} />
                )
            })}
        </ScrollView>
      )}

      <LogOutButton navigation={navigation} />
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
