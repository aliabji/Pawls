import React, {useState} from 'react'
import {
  View,
  ScrollView,
  TextInput,
  StyleSheet
} from 'react-native'
import { Text } from './Themed';
import {createDog} from '../utils/apiService';
import {ActionResponseBlock} from './ActionResponseBlock';
import DateTimePicker from '@react-native-community/datetimepicker';
import {Button} from 'react-native-ui-lib'
import {ParkDisplay} from './ParkDisplay';
import {UserDisplay} from './UserDisplay';
import { getLocalLongTime } from '../utils/DateUtils';

export interface CreateVisitProps {
    friends: any[];
    parks: any;
    createVisit: (visit: any) => void;
}

export default function CreateVisit(props: CreateVisitProps) {
    const now = new Date();
    const [showPicker, setShowPicker] = useState<boolean>(false);
    const [datetime, setDatetime] = useState<Date>()
    const [friendsToInvite, setFriendsToInvite] = useState<string[]>([])
    const [park, setPark] = useState<any>()
    const [responseMessage, setResponseMessage] = useState<string>("")
    const [showResponseBlock, setShowResponseBlock] = useState<boolean>(false)
    
    const formattedTime = () => (
        console.log(datetime && datetime.toLocaleTimeString('default', {timeStyle: 'short'}))
    )

    const submit = async () => {
        try {
            console.log("vist scheduled", datetime, friendsToInvite, park)
            const visit = {
                park_id: park.id,
                time: datetime,
                invitees: friendsToInvite
            }
            props.createVisit(visit)

        } catch (err) {
        console.log("Unrecoverable error occured ", err)
        }
    }

    const datePickerChangeHandler = (event: any) => {
        setDatetime(event.nativeEvent.timestamp)
        setShowPicker(false)
    }

    console.log(datetime && getLocalLongTime(datetime))
 
    return (
        <ScrollView>
            <View style={styles.container}>
                <Text>Let's go to the park</Text>
                <Text>You must pick a time and select a park to create a visit.</Text>
                <Button label="Pick a time" onPress={() => setShowPicker(true)} />
                {showPicker && (
                    <DateTimePicker
                    testID="dateTimePicker"
                    value={now}
                    minimumDate={now}
                    mode={'time'}
                    is24Hour={false}
                    display="default"
                    onChange={(event: any) => datePickerChangeHandler(event)}
                    />
                )}
                {datetime && (
                    <Text>{getLocalLongTime(datetime)}</Text>
                )}
                <Text>Pick friends to invite</Text>
                {props.friends.map((friend, key) => {
                    return (
                        <UserDisplay key={key} user={friend} onButtonPress={() => setFriendsToInvite([...friendsToInvite, friend.id])} buttonLabel="Select friend" />
                    )
                })}
                <Text>Which park do you want to go to?</Text>
                {props.parks.map((park, key) => {
                    return (
                        <ParkDisplay key={key} park={park} onButtonPress={() => setPark(park)} />
                    )
                })}
                <Button
                    label='Schedule Visit'
                    disabled={!datetime && !park}
                    onPress={() => submit()}
                />
                {showResponseBlock && (
                    <ActionResponseBlock success={true} message={responseMessage} />
                )}
            </View>
        </ScrollView>
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