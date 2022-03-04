import { StyleSheet } from 'react-native';
import {useEffect} from 'react'
import EditScreenInfo from '../components/EditScreenInfo';
// import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import {View, Text, Card, Button} from 'react-native-ui-lib';

export default function UserAuthStart({ navigation }: RootTabScreenProps<'UserAuthStart'>) {
  return (
    <View flex padding-page backgroundColor="white">
      <Text heading>Welcome to Pawls!</Text>
      <Text>Please click below to register or sign in</Text>
      {/* <Div> */}
        <Button label="Register" onPress={() => navigation.push('Signup')}></Button>
        <Button label="Login" onPress={() => navigation.push('Signin')}></Button>      
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
