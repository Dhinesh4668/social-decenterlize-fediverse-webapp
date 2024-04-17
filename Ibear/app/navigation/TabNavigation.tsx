import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import ServerScreen from '../screens/Server/ServerScreen';
import BlogScreen from '../screens/BlogScreen/BlogScreen';
import CreateScreen from '../screens/CreateBlog/CreateScreen';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';



const Tab = createBottomTabNavigator();
const TabNavigation = () => {
  return (
    <Tab.Navigator>
        <Tab.Screen name='HomeTab' component={HomeScreen} />
        <Tab.Screen name='server' component={ServerScreen} />
        <Tab.Screen name='Blog' component={BlogScreen} />
        <Tab.Screen name='Create' component={CreateScreen} />
        <Tab.Screen name='Profile' component={ProfileScreen} />
    </Tab.Navigator>
  )
}

export default TabNavigation