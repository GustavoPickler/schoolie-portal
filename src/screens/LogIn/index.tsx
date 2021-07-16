import React from 'react';
import { View, Image, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import LogInForm from '../../components/LogInForm'
import styles from './styles'
import IllustrationImg from '../../assets/schoolieIcon.png'



export default function LogIn() {

    const navigation = useNavigation();

    function handleLogIn() {
        navigation.navigate('LogIn')
    }

    return (
        <>
            <View style={styles.containerFull}>
                <View style={styles.container}>
                    <Image source={IllustrationImg} style={styles.iconImage} />
                    <Text  style={styles.fonts}>
                        Schoolie
                    </Text>
                </View>
                    <LogInForm />
            </View>
        </>
    )
}
