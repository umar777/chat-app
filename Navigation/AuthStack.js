import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from '../Screens/LoginScreen';
import SignupScreen from '../Screens/SignupScreen';
import HomeScreen from '../Screens/HomeScreen';

const Stack = createNativeStackNavigator();


// AuthStack is only displayed if the user is not logged in to the app. Only two screens are used in this stack. Login Screen and Sign up screen.
const AuthStack = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="LoginScreen" component={LoginScreen} />
        <Stack.Screen options={{ headerShown: false }} name="SignupScreen" component={SignupScreen}/>
        <Stack.Screen name="HomeScreen" component={HomeScreen}/>
      </Stack.Navigator>
  )
}

export default AuthStack

const styles = StyleSheet.create({})