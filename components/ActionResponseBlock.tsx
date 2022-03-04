import {View, Text, Card, Button} from 'react-native-ui-lib';

export type ActionResponseBlockProps = {
    success: boolean;
    message: string;
}

export function ActionResponseBlock(props: ActionResponseBlockProps) {
    return (
        <View backgroundColor={props.success ? '#90ee90' : '#e5a39e'} >
            <Text>{props.message}</Text>
        </View>
    )
}
