// SignUp.js
import React from 'react'
import {
  View,
  Button,
  TextInput,
  StyleSheet
} from 'react-native'
import {LOCAL_API_ADDRESS} from '../constants/server'

export default class Signin extends React.Component<any> {
  state = {
    username: '', password: '', email: '', phone_number: ''
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
      const res = fetch('http://192.168.68.127:3001/login', {
        headers: { 'Content-Type': 'application/json' },
        method: 'POST',
        body: JSON.stringify(creds)
        }).then((data) => data.json()).then((res) =>{
          if (res.logged_in === true) {
            this.props.navigation.navigate('Dashboard', res.user)
            console.log('user successfully signed up!: ')
          } else {
            console.log("log in failed ", res.errors)
          }
        })
        .catch((err) => {
          console.log(err)
          console.log('error signing up: ', err)
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