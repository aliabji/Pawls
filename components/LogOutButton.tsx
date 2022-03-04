import { Button } from 'react-native';
import {logOut} from '../utils/apiService';

export type LogOutButtonProps = {
    navigation: any
}

export function LogOutButton(props: LogOutButtonProps) {
    const handleLogOut = () => {
      logOut()
      props.navigation.push('UserAuthStart')
    }

    return <Button title="Log Out" onPress={() => handleLogOut()} />;
}
