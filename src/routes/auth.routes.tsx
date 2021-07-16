import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'

import { OnBoarding } from '../screens/OnBoarding'
import  LogIn  from '../screens/LogIn'

const { Navigator, Screen } = createStackNavigator()

export default function AuthRoutes() {
    return (
        <Navigator
            headerMode='none'
            screenOptions={{
                cardStyle: {
                    backgroundColor:'transparent'
                }
            }}
        >
            <Screen
                name="OnBoarding"
                component={OnBoarding}
            />
            <Screen
                name="LogIn"
                component={LogIn}
            />
        </Navigator>
    )
}