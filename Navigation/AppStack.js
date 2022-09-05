import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../Screens/HomeScreen';
import CustomDrawer from '../Components/CustomDrawer';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
//Using A Drawer Navigation
const AppStack = () => {
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />}>
        <Drawer.Screen name="Real Time Chat" component={HomeScreen}/>
    </Drawer.Navigator>
  )
}

export default AppStack

const styles = StyleSheet.create({})