import { StyleSheet, Text, View } from 'react-native'
import React, {useContext, useState, useEffect} from 'react'
import { auth } from '../firebase'
import { AuthContext } from './AuthProvider'
import { NavigationContainer } from '@react-navigation/native'

import AuthStack from './AuthStack'
import AppStack from './AppStack'

const Routes = () => {
    const {user, setUser} = useContext(AuthContext);
    const [initializing, setInitializing] = useState(true);

      // onAuthStateChanged is listener for firebase authentication. detects if a change from login to logout or from logout to login has occured in the App
  
    const onAuthStateChanged = (user) => {
      setUser(user);
      if (initializing) setInitializing(false);
    };
    
    useEffect(() => {
      const subscriber = auth.onAuthStateChanged(onAuthStateChanged);
      return subscriber; // unsubscribe on unmount
    }, []);
  
    if (initializing) return null;
    
    // Here we are checking if the user is logged in or not. If the user is logges in the AppStack will be displayed else AuthStack will be displayed
    return (
      <NavigationContainer>
        {user ? <AppStack /> : <AuthStack />}
      </NavigationContainer>
    );
}

export default Routes

const styles = StyleSheet.create({})