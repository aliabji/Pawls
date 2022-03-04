import { Button, Card, Title, Text, Paragraph, Avatar } from 'react-native-paper';

export interface UserCardProps {
    user: any;
    onButtonPress?: any;
    buttonLabel?: string
}

export function UserCard(props: UserCardProps) {
    return (
        <Card style={{justifyContent:'space-between',margin:10, minWidth:"80%"}}>
            <Card.Cover source={require('../assets/images/Friend-PNG-File.png')} />
            <Card.Content style={{justifyContent: 'center'}}>
                <Title>{props.user.name}</Title>
                <Paragraph>{props.user.username}</Paragraph>
            </Card.Content>
            {props.onButtonPress && (
                <Card.Actions style={{flexDirection: "column"}}>
                    <Button onPress={props.onButtonPress}>{props.buttonLabel || "Select user"}</Button>
                </Card.Actions>
            )}
        </Card>
    )
}
