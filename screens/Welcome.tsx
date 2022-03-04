import { StyleSheet, ActivityIndicator } from 'react-native';
import {useEffect} from 'react'
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import {isLoggedIn} from '../utils/apiService';

export default function Welcome({ navigation }: RootTabScreenProps<'Welcome'>) {
  useEffect(() => {
    isLoggedIn().then(res => {
      if (res.user) {
        // navigation.push('SetupWizard', res.user)
          navigation.push('Dashboard', res.user)
      } else {
          navigation.push('UserAuthStart')
      }
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
