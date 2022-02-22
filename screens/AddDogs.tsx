// SignUp.js
import React from 'react'
import {
  View,
  Button,
  TextInput,
  StyleSheet
} from 'react-native'
import {LOCAL_API_ADDRESS} from '../constants/server'
import { Text } from '../components/Themed';

export default class AddDogs extends React.Component {
  state = {
    name: '', age: '', breed: ''
  }
  onChangeText = (key: any, val: any) => {
    this.setState({ [key]: val })
  }
  submit = async () => {
    const { name, age, breed } = this.state
    const creds = {
      dog: {
          username: 'testing',
        name, breed, age
      }
    }
    try {
      const res = fetch('http://192.168.68.127:3001/dogs/create', {
        headers: { 'Content-Type': 'application/json' },
        method: 'POST',
        body: JSON.stringify(creds)
        }).then((data) => data.json()).then((res) =>{
          if (res.dog) {
            console.log(`${name} was successfully added to your profile `, res.dog)
          } else {
            console.log("dog submission failed ", res.errors)
          }
        })
        .catch((err) => {
          console.log(err)
          console.log('error adding dog: ', err)
        })
    } catch (err) {
      console.log("Unrecoverable error occured ", err)
    }
  }
 
  render() {
    return (
      <View style={styles.container}>
        <Text>Tell us about your dog</Text>
        <TextInput
          style={styles.input}
          placeholder='Name'
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('name', val)}
        />
        <TextInput
          style={styles.input}
          placeholder='Age'
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('age', val)}
        />
        <TextInput
          style={styles.input}
          placeholder='Breed'
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('breed', val)}
        />
        <Button
          title='Sign In'
          onPress={this.submit}
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