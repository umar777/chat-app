import { StyleSheet, Text, View } from 'react-native'
import React, {useEffect, useState, useContext} from 'react'
import { auth } from '../firebase';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AuthContext } from '../Navigation/AuthProvider'
import { Avatar } from 'react-native-elements';

// This script is for defining a customized Drawer navigation
const CustomDrawer = () => {

    // // Tried to GET data from the server using RESTful web services
    // const baseURL = 'https://chatapp-ed494-default-rtdb.firebaseio.com/Users/' + auth.currentUser.uid + '/.json';
    // const [userData, setUserData] = useState({});
    // const [isLoading, setLoading] = useState(false);
    // state = {name: 'none', email: 'none' }

    // getUsers = () => {
    //     fetch(baseURL)
    //     .then((response) => response.json())
    //     .then((json) => {
    //         setUserData(json)
    //     }).catch((error) => console.log(error))
    // }

    // useEffect(() => {
    //     setLoading(true);
    //     getUsers();
    // });
    
    const { logout } = useContext(AuthContext)
  return (
    <View style={styles.container}>
        <View>
            <Avatar
            rounded
            source={{uri: auth.currentUser.photoURL}}
        />
        </View>
      <Text style={styles.name}>{auth.currentUser.displayName}</Text>
      <Text style={styles.email}>{auth.currentUser.email}</Text>
      <View style={styles.border}></View>
      <TouchableOpacity style={styles.logoutButton} onPress={() => logout()}>
          <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  )
}

export default CustomDrawer

const styles = StyleSheet.create({
    container: {
        marginLeft: 20,
        flex: 1,
        marginTop: 200,
    },
    name: {
        fontSize: 30,
        fontWeight: 'bold'
    },
    email: {
        fontSize: 15,
    },
    border: {
        marginTop: 10,
        borderBottomColor: 'black',
        borderBottomWidth: 0.8,
    },
    logoutButton: {
        width: '80%',
        elevation: 8,
        backgroundColor: "#5a80fb",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
        marginTop: 30,
    },
    logoutText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    },
})