import { Button } from 'react-native';

export type LogOutButtonProps = {
    navigation: any
}

export function LogOutButton(props: LogOutButtonProps) {
    const logOut = () => {
        fetch('http://192.168.68.127:3001/logout', {
            headers: { 'Content-Type': 'application/json' },
            method: 'POST',
            }).then((data) => data.json()).then((res) =>{
              if (res.logged_out) {
                // this.props.navigation.replace('Dashboard', res.user)
                console.log('user successfully logged out!: ')
                props.navigation.replace('UserAuthStart')
              } else {
                console.log("log in failed ", res.errors)
              }
            })
            .catch((err) => {
              console.log(err)
              console.log('error signing up: ', err)
            })
    }

    return <Button title="Log Out" onPress={() => logOut()} />;
}
