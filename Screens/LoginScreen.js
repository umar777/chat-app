import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native'
import React, {useEffect, useState, useContext} from 'react'
import { auth } from '../firebase'
import { AuthContext } from '../Navigation/AuthProvider'

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const { login } = useContext(AuthContext)

  return (
    <View style={styles.background}>
      <Text style={styles.maintext}>Welcome To A Real Time Chat Application</Text>
      <Text style={styles.subtext}>Where you can Chat and Share Photos or Videos</Text>
      
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={text => setEmail(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={text => setPassword(text)}
          style={styles.input}
          secureTextEntry
        />
      </View>
      
      <TouchableOpacity onPress={() => navigation.navigate('SignupScreen')} style={styles.SignUpButton}>
        <Text style={styles.SignUpText}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => login(email,password)} style={styles.LoginButton}>
        <Text style={styles.LoginText}>Log In</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: '#edf1fe',
        justifyContent: 'center',
        alignItems: 'center',
      },
      inputContainer: {
        width: '80%'
      },
      input: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 10,
      },
      maintext: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 5,
      },
      subtext: {
        fontSize: 15,
        padding: 20,
        textAlign: 'center',
      },
      SignUpButton :{
        width: '80%',
        elevation: 8,
        backgroundColor: "#5a80fb",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
        marginTop: 15,
        marginRight: 30,
        marginLeft: 30,
      },
      LoginButton :{
        width: '80%',
        elevation: 8,
        backgroundColor: "#5a80fb",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
        marginTop: 15,
        marginRight: 30,
        marginLeft: 30,
      },
      SignUpText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
      },
      LoginText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
      }
})

export default LoginScreen