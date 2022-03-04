import React, {useState} from 'react'
import {
  View,
  Button,
  TextInput,
  StyleSheet
} from 'react-native'
import { Text } from '../components/Themed';
import {createDog} from '../utils/apiService';
import {ActionResponseBlock} from './ActionResponseBlock';

export default function AddDog() {
    const [name, setName] = useState<string>()
    const [age, setAge] = useState<string>()
    const [breed, setBreed] = useState<string>()
    const [responseMessage, setResponseMessage] = useState<string>("")
    const [showResponseBlock, setShowResponseBlock] = useState<boolean>(false)

  const submit = async () => {
    const creds = {
      dog: {
        name, breed, age
      }
    }
    try {
        createDog(creds).then((res) => {
            console.log(res)
            if (res.dog) {
                setResponseMessage("Dog added successfully")
            } else {
                setResponseMessage("Failed to add dog")
            }
            console.log("here")
            setShowResponseBlock(true)
        })
    } catch (err) {
      console.log("Unrecoverable error occured ", err)
    }
  }
 
return (
    <View style={styles.container}>
    <Text>Tell us about your dog</Text>
    <TextInput
        style={styles.input}
        placeholder='Name'
        autoCapitalize="none"
        placeholderTextColor='white'
        onChangeText={val => setName(val)}
    />
    <TextInput
        style={styles.input}
        placeholder='Age'
        autoCapitalize="none"
        placeholderTextColor='white'
        onChangeText={val => setAge(val)}
    />
    <TextInput
        style={styles.input}
        placeholder='Breed'
        autoCapitalize="none"
        placeholderTextColor='white'
        onChangeText={val => setBreed(val)}
    />
    <Button
        title='Sign In'
        onPress={() => submit()}
    />
    {showResponseBlock && (
        <ActionResponseBlock success={true} message={responseMessage} />
    )}
    </View>
)
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