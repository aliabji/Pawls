import { StyleSheet, Button } from 'react-native';
import {useEffect} from 'react'
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function UserAuthStart({ navigation }: RootTabScreenProps<'UserAuthStart'>) {
  useEffect(() => {
    fetch('http://192.168.68.127:3001/logged_in', {
      headers: { 'Content-Type': 'application/json' },
      method: 'GET'
      }).then((data) => data.json()).then((res) =>{
        if (res.logged_in) {
          navigation.replace('Dashboard')
        }
      })
      .catch((err) => {
        console.log('error checking login: ', err)
      })
  
  }, [])
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Pawls!</Text>
      <Text style={styles.subHeading}>Please click below to register or sign in</Text>
      {/* <Div> */}
        <Button title="Register" onPress={() => navigation.replace('Signup')}></Button>
        <Button title="Login" onPress={() => navigation.replace('Signin')}></Button>      
      {/* </Div> */}
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
