import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import TabNavigation from './TabNavigation';


const Stack = createStackNavigator();
const Navigation = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="Home" component={TabNavigation} />
        </Stack.Navigator>
    )
}

export default Navigation