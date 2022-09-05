import { StyleSheet, Text, View } from 'react-native'
import React, {createContext, useState} from 'react'
import { auth } from '../firebase'
import { updateProfile } from 'firebase/auth';

export const AuthContext = createContext();

// The base URL from firebase that we are using to implement RESTful webservices. here we are going to PUT the data into the server
const baseURL = 'https://chatapp-ed494-default-rtdb.firebaseio.com/Users/';

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);


  // Here we are defining all the functions: Login, Register and Logout.
  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login: async (email, password) => {
          try {
            await auth.signInWithEmailAndPassword(email, password);
          } catch (e) {
            console.log(e);
          }
        },
        register: async (email, password, name, photoUrl) => {
          try {
            await auth.createUserWithEmailAndPassword(email, password)
            .then(userCredentials => {
                const user = userCredentials.user;
                console.log('Registered with:', user.email);
              })
              .catch(error => alert(error.message))
              updateProfile(auth.currentUser, {
                displayName: name,
                photoURL: photoUrl ? photoUrl : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png'
              }).then(() => {
                fetch(baseURL + auth.currentUser.uid + '/.json', {
                  method: 'PUT',
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({
                    fullName: name,
                    emailId: email,
                    profile_picture : imageUrl
                  })
                })
              }).catch((error) => {
                // An error occurred
                // ...
              });
          } catch (e) {
            console.log(e);
          }
        },
        logout: async () => {
          try {
            await auth.signOut();
          } catch (e) {
            console.log(e);
          }
        },
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider

const styles = StyleSheet.create({})