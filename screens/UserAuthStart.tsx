import { View, StyleSheet } from 'react-native';
import { RootTabScreenProps } from '../types';
import { Button, Text} from 'react-native-paper';

export default function UserAuthStart({ navigation }: RootTabScreenProps<'UserAuthStart'>) {
  return (
    <View>
      <Text style={{color: "white"}}>Welcome to Pawls!</Text>
      <Text style={{color: "white"}}>Please click below to register or sign in</Text>
      <Button mode="contained" style={{marginVertical: 10}} onPress={() => navigation.push('Signup')}>Register</Button>
      <Button mode="contained" style={{marginVertical: 10}} onPress={() => navigation.push('Signin')}>Login</Button>      
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
