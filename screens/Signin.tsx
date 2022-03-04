// SignUp.js
import React from 'react'
import {
  View,
  Button,
  TextInput,
  StyleSheet
} from 'react-native'
import {LOCAL_API_ADDRESS} from '../constants/server'
import {logIn} from '../utils/apiService';

export default class Signin extends React.Component<any> {
  state = {
    username: '', password: '', email: ''
  }
  onChangeText = (key: any, val: any) => {
    this.setState({ [key]: val })
  }
  signIn = async () => {
    const { username, password } = this.state
    const creds = {
      user: {
        username, password
      }
    }
    try {
      logIn(creds).then(res => {
        if (res.user) {
          // this.props.navigation.push('Dashboard', res.user)
          this.props.navigation.push('SetupWizard', res.user)
        } else {
          console.log("log in failed ", res)

        }
      })
    } catch (err) {
      console.log("Unrecoverable error occured ", err)
    }
  }
 
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder='Username'
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('username', val)}
        />
        <TextInput
          style={styles.input}
          placeholder='Password'
          secureTextEntry={true}
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('password', val)}
        />
        <Button
          title='Sign In'
          onPress={this.signIn}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  input: {
    width: 350,
    height: 55,
    backgroundColor: '#42A5F5',
    margin: 10,
    padding: 8,
    color: 'white',
    borderRadius: 14,
    fontSize: 18,
    fontWeight: '500',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})