import { Image, Linking } from 'react-native';
import { Button, Card, Title, Text, Paragraph, Avatar } from 'react-native-paper';
import {googleMapsLinkWithPlaceId} from '../constants/google'
// import parkImage from '../assets/images/park-svgrepo-com.svg';

// const parkImage2 = Image.resolveAssetSource(parkImage).uri

export interface ParkDisplayProps {
    park: any;
    onButtonPress?: any;
    style?: any;
}

export function ParkDisplay(props: ParkDisplayProps) {
    return (
        <Card style={{justifyContent:'space-between',margin:10}}>
            <Card.Cover source={require('../assets/images/park.png')} />
            <Card.Content>
                <Title>{props.park.name}</Title>
                <Paragraph>{props.park.vicinity}</Paragraph>
            </Card.Content>
            {/* <Card.Title
                // title={props.park.name}
                // titleStyle={{color: "white"}}
                subtitle={props.park.vicinity}
                left={(props) => <Avatar.Icon {...props} icon="map" onTouchStart={() => console.log("touched")} />}
                // right={(props) => <IconButton {...props} icon="more-vert" onPress={() => {}} />}
            /> */}
            <Card.Actions style={{flexDirection: "column"}}>
                <Button onPress={() => Linking.openURL(googleMapsLinkWithPlaceId(props.park.place_id))}>View in Google Maps</Button>
                <Button>View Park Details</Button>
            </Card.Actions>
            {/* <Text>{props.park.vicinity}</Text>
            {props.onButtonPress && (
                <Button label="Select park" onPress={props.onButtonPress} />
            )} */}
        </Card>

    )
}
