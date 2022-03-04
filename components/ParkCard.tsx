import { Image, Linking } from 'react-native';
import { Button, Card, Title, Text, Paragraph, Avatar } from 'react-native-paper';
import {googleMapsLinkWithPlaceId} from '../constants/google'
// import parkImage from '../assets/images/park-svgrepo-com.svg';

// const parkImage2 = Image.resolveAssetSource(parkImage).uri

export interface ParkCardProps {
    park: any;
    buttonLabel?: string;
    onButtonPress?: any;
    style?: any;
}

export function ParkCard(props: ParkCardProps) {
    return (
        <Card style={{justifyContent:'space-between',margin:10}}>
            <Card.Cover source={require('../assets/images/city-park.png')} />
            <Card.Content>
                <Title>{props.park.name}</Title>
                <Paragraph>{props.park.vicinity}</Paragraph>
            </Card.Content>
            <Card.Actions style={{flexDirection: "column"}}>
                <Button onPress={() => Linking.openURL(googleMapsLinkWithPlaceId(props.park.place_id))}>View in Google Maps</Button>
                {props.onButtonPress && (
                    <Button onPress={props.onButtonPress}>{props.buttonLabel || "View park"}</Button>
                )}
            </Card.Actions>
        </Card>
    )
}
