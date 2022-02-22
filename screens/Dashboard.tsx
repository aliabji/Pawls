import { StyleSheet, Button } from 'react-native';
import {useState, useEffect} from 'react';
import { Text, View } from '../components/Themed';
import {LogOutButton} from '../components/LogOutButton';
import { RootTabScreenProps } from '../types';

export default function Dashboard({ navigation, route: {params} }: RootTabScreenProps<'Dashboard'>) {

    return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome back, {params.username}!</Text>
      <Text style={styles.subHeading}>Dashboard</Text>
      <Button title="Add parks" onPress={() => navigation.navigate('AddParks')} />
      <Button title="View my parks" onPress={() => navigation.navigate('ViewParks')} />
      <Button title="View my dogs" onPress={() => navigation.navigate('ViewDogs')} />

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
