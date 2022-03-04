import { View, Text, Button } from 'react-native-ui-lib';
import { getLocalLongTime } from '../utils/DateUtils';

export interface VisitDisplayProps {
    visit: any;
    onButtonPress?: any;
    buttonLabel?: string
}

export function VisitDisplay(props: VisitDisplayProps) {
    // console.log(props.visit, props.visit[0].time)
    return (
        <View backgroundColor="white">
            <Text>"visit"</Text>
            <Text>{getLocalLongTime(new Date(props.visit.time))}</Text>
            {props.onButtonPress && (
                <Button label={props.buttonLabel || "Select visit"} onPress={props.onButtonPress} />
            )}
        </View>
    )
}
