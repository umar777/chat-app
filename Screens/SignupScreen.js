import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native'
import React, {useEffect, useState, useContext} from 'react'
import { auth } from '../firebase';
import { getDatabase, ref, set } from "firebase/database";
import { AuthContext } from '../Navigation/AuthProvider';

const SignupScreen = ({ navigation }) => {
  // User states for storing name, email, password, photourl
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [photoURL, setPhotoUrl] = useState();

  const { register } = useContext(AuthContext)

  
  //const baseURL = 'https://chatapp-ed494-default-rtdb.firebaseio.com/Users/' + auth.currentUser.uid + '/.json';
  // const storeUserData = () => {
  //     fetch(baseURL, {
  //       method: 'PUT',
  //       headers: {
  //         'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify({
  //         fullname: name,
  //         emailid: email
  //       })
  //     })
  //     //console.log(auth.currentUser.uid)
  //   }
  
  

  // useEffect(() => {
  //   const unsubscribe = auth.onAuthStateChanged(user => {
  //     if (user) {
  //       navigation.replace("HomeScreen")
  //     }
  //   })
  //   return unsubscribe
  // }, [])
  
  // const handleSignUp = () => {
  //     auth
  //     .createUserWithEmailAndPassword(email, password)
  //     .then(userCredentials => {
  //       const user = userCredentials.user;
  //       console.log('Registered with:', user.email);
  //     })
  //     .catch(error => alert(error.message))
  //   }

  return (
    <View style={styles.background}>
      <Text style={styles.maintext}>Create An Account</Text>
      
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Full Name"
          style={styles.input}
          value={name}
          onChangeText={text => setName(text)}
        />
        <TextInput
          placeholder="Email"
          style={styles.input}
          value={email}
          onChangeText={text => setEmail(text)}
        />
        <TextInput
          placeholder="Password"
          style={styles.input}
          value={password}
          onChangeText={text => setPassword(text)}
          secureTextEntry
        />
        <TextInput
          placeholder="Profile Picture URL"
          style={styles.input}
          value={photoURL}
          onChangeText={text => setPhotoUrl(text)}
        />
    </View>
      <TouchableOpacity onPress={() => register(email,password,name,photoURL)} style={styles.SignUpButton}>
        <Text style={styles.SignUpText}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.signInTextButton} onPress={() => navigation.navigate('LoginScreen')}>
        <Text style={styles.signInText}>Already got an Account? Log In</Text>
      </TouchableOpacity>
    </View>
  )
}

export default SignupScreen

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
        marginTop: 20,
      },
      maintext: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 5,
      },
      SignUpButton :{
        width: '80%',
        elevation: 8,
        backgroundColor: "#5a80fb",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
        marginTop: 30,
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
      signInTextButton: {
        marginTop: 30
      },
      signInText: {
        fontStyle: 'italic',
        textDecorationLine: 'underline'
      }
      
})