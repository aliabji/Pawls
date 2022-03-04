import { Button, Card, Title, Text, Paragraph, Avatar } from 'react-native-paper';
import {useEffect, useState} from 'react'

export interface DogCardProps {
    dog: any;
    onButtonPress?: any;
    style?: any;
}

export function DogCard(props: DogCardProps) {
    const [dogImage, setDogImage] = useState<string>()

    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random').then((res) => res.json()).then((res) => {
            if (res.status === "success") {
                setDogImage(res.message)
            }
            console.log(res)
        }).catch((err) => console.log(err))
    }, [])
    return (
        <Card style={{justifyContent:'space-between',margin:10, minWidth:"80%"}}>
            <Card.Cover source={{uri: dogImage}} />
            <Card.Content style={{justifyContent: 'center'}}>
                <Title>{props.dog.name}</Title>
                <Paragraph>{props.dog.breed}</Paragraph>
                <Paragraph>{props.dog.age}</Paragraph>
            </Card.Content>
        </Card>

    )
}
