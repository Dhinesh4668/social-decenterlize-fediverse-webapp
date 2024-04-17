import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Navigation from './app/navigation/Navigation'

const App = (): React.JSX.Element => {
  return (
    <NavigationContainer independent={true}>
      <Navigation />
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})