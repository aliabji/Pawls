import { StyleSheet, ActivityIndicator } from 'react-native';
import {useEffect} from 'react'
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function Welcome({ navigation }: RootTabScreenProps<'Welcome'>) {
  useEffect(() => {
    fetch('http://192.168.68.127:3001/logged_in', {
      headers: { 'Content-Type': 'application/json' },
      method: 'GET'
      }).then((data) => data.json()).then((res) =>{
        if (res.logged_in) {
            // console.log("logged in ", res)
          navigation.replace('Dashboard', res.user)
        } else {
            console.log("not logged in ", res)
          navigation.replace('UserAuthStart')

        }
      })
      .catch((err) => {
        console.log('error checking login: ', err)
      })
  
  }, [])
  return (
    <View style={styles.container}>
        <ActivityIndicator size="large" />
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
