import { StyleSheet, ActivityIndicator } from 'react-native';
import {useState, useEffect} from 'react';
import { Text, View } from '../components/Themed';
import {LogOutButton} from '../components/LogOutButton';
import { RootTabScreenProps } from '../types';
import CreateVisit from '../components/CreateVisit';
import { getFriends, getParks, createVisit } from '../utils/apiService';

export default function CreateParkVisit({ navigation, route: {params} }: RootTabScreenProps<'CreateParkVisit'>) {
    const [loading, setLoading] = useState<boolean>(true)
    const [friends, setFriends] = useState<any>()
    const [parks, setParks] = useState<any>()
    
    useEffect(() => {
        try {
            getFriends(params.id).then((res) => {
                if (res.friends) {
                    console.log("friends", res)
                    setFriends(res.friends)
                    // setLoading(false)
                } else {
                    console.log("error", res)
                }
            })
    
            getParks().then((res) => {
                console.log("parks", res)
                if (res.parks) {
                    setParks(res.parks)
                } else {
                    console.log("error", res)
                }
            })

        } catch {
            console.log("failed")
        }
    }, [])

    const createVisitHandler = (visit: AnalyserNode) => {
        createVisit(visit).then((res) => {
            if (res.visit) {
                navigation.push('ParkVisitDetails', {user: params, parkVisitDetails: res.visit})
            } else {
                console.log("didnt work")
            }
        })
    }

    return (
    <View style={styles.container}>
        {!friends || !parks ? (
            <ActivityIndicator size="large" color="white" />
        ) : (
            <CreateVisit friends={friends} parks={parks} createVisit={createVisitHandler} />
        )}
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
