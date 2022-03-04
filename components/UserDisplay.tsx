import { View, Text, Button } from 'react-native-ui-lib';

export interface UserDisplayProps {
    user: any;
    onButtonPress?: any;
    buttonLabel?: string
}

export function UserDisplay(props: UserDisplayProps) {
    return (
        <View backgroundColor="white">
            <Text>{props.user.username}</Text>
            <Text>{props.user.name}</Text>
            {props.onButtonPress && (
                <Button label={props.buttonLabel || "Select user"} onPress={props.onButtonPress} />
            )}
        </View>
    )
}
