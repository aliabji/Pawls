import { StyleSheet } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';
import {useState} from 'react'
import EditScreenInfo from '../components/EditScreenInfo';
// import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import {View, Text, Card, Button, PageControl} from 'react-native-ui-lib';
import AddDog from '../components/AddDog';
import AddPark from '../components/AddPark';

export default function SetupWizard({ navigation, route: {params} }: RootTabScreenProps<'SetupWizard'>) {
    const [currentPage, setCurrentPage] = useState(0)

    const intro = () => {
        return (
            <View>
                <Text heading>Welcome to Pawls!</Text>
                <Text>You'll be taking your dog out to play in no time!</Text>
                <Text>Please take a moment to tell us about your dog and the parks you'll want to visit.</Text>
            </View>
        )
    }

    const complete = () => (
        <View>
            <Text>All done!</Text>
            <Button label="Go to my dashboard" onPress={() => navigation.replace('Dashboard', params)} />
            <Text>Feel free to add additional dogs or parks to your account by navigating with the buttons below.</Text>
        </View>
    )
  
    return (
            <View flex padding-page backgroundColor="white">
                {currentPage === 0 && intro()}
                {currentPage === 1 && (
                    <AddDog />
                )}
                {currentPage === 2 && (
                    <AddPark />
                )}
                {currentPage === 3 && complete()}
                <PageControl numOfPages={4} currentPage={currentPage} />
                <Button label="Next" onPress={() => setCurrentPage(currentPage + 1)} disabled={currentPage === 3} />
                <Button label="Back" onPress={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 0} />
            </View>
    );
}
