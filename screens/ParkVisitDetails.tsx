import { StyleSheet, ScrollView } from 'react-native';
import {useEffect, useState} from 'react'
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import { getLocalTime } from '../utils/DateUtils';

export default function ParkVisitDetails({ navigation, route: {params} }: RootTabScreenProps<'ParkVisitDetails'>) {
    const visit = params.parkVisitDetails

    console.log(params)
    return (
        <View style={styles.container}>
            <Text>Visit Details</Text>
            <Text>{visit && visit.time}</Text>
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
