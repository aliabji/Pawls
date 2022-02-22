import { Button, Text } from 'react-native';
import { GooglePlaceDetail } from 'react-native-google-places-autocomplete';
import { View } from './Themed';

export interface ParkDisplayProps {
    park: any
}

export function ParkDisplay(props: ParkDisplayProps) {
    console.log("=========================")
    return (
        <View>
            <Text>{props.park.name}</Text>
            <Text>{props.park.rating}</Text>
            <Text>{props.park.vicinity}</Text>
        </View>
    )
}
