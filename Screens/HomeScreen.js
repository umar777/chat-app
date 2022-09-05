import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image } from 'react-native'
import React, {useEffect, useState, useContext, useCallback, useLayoutEffect} from 'react'
import { GiftedChat } from 'react-native-gifted-chat'
import { auth, db } from '../firebase'
import { AuthContext } from '../Navigation/AuthProvider';
import * as ImagePicker from 'expo-image-picker';
import * as Location from 'expo-location';
import { getStorage, ref, uploadBytes } from "firebase/storage";
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = ({ navigation }) => {

  // Get a reference to the storage service, which is used to create references in your storage bucket
  const storage = getStorage();
  // Create a storage reference from our storage service
  const storageRef = ref(storage);

  const [image, setImage] = useState(null);
  const [messages, setMessages] = useState([]);
  const [location, setLocation] = useState(null);

  // const storeData = async (text) => {
  //   try {
  //     await AsyncStorage.setItem('message', text)
  //   } catch (e) {
  //     // saving error
  //   }
  // }

  // Tried using additional feature: geolocaton service
  // useEffect(() => {
  //   (async () => {
  //     if (Platform.OS === 'android' && !Device.isDevice) {
  //       setErrorMsg(
  //         'Oops, this will not work on Snack in an Android Emulator. Try it on your device!'
  //       );
  //       return;
  //     }
  //     let { status } = await Location.requestForegroundPermissionsAsync();
  //     if (status !== 'granted') {
  //       setErrorMsg('Permission to access location was denied');
  //       return;
  //     }

  //     let location = await Location.getCurrentPositionAsync({});
  //     setLocation(location);
  //   })();
  // }, []);
  
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    console.log(result.uri);
    if (!result.cancelled) {
      setImage(result.uri);
      const filename = result.uri.substring(result.uri.lastIndexOf('/') + 1);
      storageRef.putFile(filename);
    }
  };

  // Updating chat data on the screen at the same time from firebase
  useLayoutEffect(() => {
    const unsubscribe = db.collection('chats').
    orderBy('createdAt', 'desc').onSnapshot
    (snapshot => setMessages(
      snapshot.docs.map(doc => ({
        _id: doc.data()._id,
        createdAt: doc.data().createdAt.toDate(),
        text: doc.data().text,
        user: doc.data().user,
        //image: doc.data().image
      }))
    ))
    return unsubscribe;
  }, [])

  // onSend method is called upon hitting the send button
  // stores all the data on firebase
  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
    const {
      _id,
      createdAt,
      text,
      user,
      //image
    }=messages[0]
    db.collection('chats').add({
      _id,
      createdAt,
      text,
      user,
      //image
    })
  }, [])

  const renderActions = () => {
    return (<View style={{ flexDirection: 'row', paddingBottom: 12 }}>
      <TouchableOpacity style={styles.select} onPress={pickImage}>
        <Image source={{uri:'https://cdn.iconscout.com/icon/free/png-256/photo-size-select-actual-1782180-1512958.png'}} style={{ width: 24, height: 24 }} />
      </TouchableOpacity>
    </View>);
  };

  return (
    <GiftedChat
      messages={messages}
      showAvatarForEveryMessage={true}
      onSend={messages => onSend(messages)}
      user={{
        _id: auth.currentUser.email,
        name: auth.currentUser.displayName,
        avatar: auth.currentUser.photoURL
      }}
      renderActions={renderActions}
    />
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  select: {
    marginLeft: 10
  }
})