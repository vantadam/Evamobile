import { updateCurrentUser, updateProfile } from "firebase/auth";
import React, { Component, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";
import "react-native-gesture-handler";
import { authentication, db } from "../../firebase/firebase-config";
import * as ImagePicker from "expo-image-picker";

export default function Options({ navigation }) {
  const [username, setUsername] = useState("");
  const [image, setImage] = useState(authentication.currentUser.photoURL);
  const [display, setImageDisplay] = useState(
    "https://www.transparenttextures.com/patterns/concrete-wall.png"
  );
  const [imagemsg, setImagemsg] = useState("Modifier l'image");

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
      setImageDisplay(result.uri);
      setImagemsg("");
    }
  };

  function Update() {
    if (!username == "") {
      updateProfile(authentication.currentUser, {
        displayName: username,
        photoURL: image,
      });
    } else {
      updateProfile(authentication.currentUser, {
        photoURL: image,
      });
    }

    alert("profile updated");
  }

  return (
    <View style={styles.bg}>
      <TouchableOpacity style={styles.avatar} onPress={pickImage}>
        <Image
          source={{
            uri: authentication.currentUser.photoURL,
          }}
          style={styles.image}
        />
        <Text style={styles.imagemsg}>{imagemsg}</Text>
        <Image
          source={{
            uri: display,
          }}
          style={styles.image2}
        />
      </TouchableOpacity>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Modifier le pseudo "
          placeholderTextColor="grey"
          onChangeText={(username) => setUsername(username)}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={Update}>
        <Text style={styles.buttonText}>Mise à jour</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  bg: {
    backgroundColor: "#36446d",
    flex: 1,
  },

  avatar: {
    backgroundColor: "white",
    borderRadius: 300,
    top: "10%",
    width: 152,
    height: 152,
    alignSelf: "center",
  },
  image: {
    alignSelf: "center",
    width: 148,
    height: 148,
    top: 2,
    borderRadius: 200,
  },
  image2: {
    alignSelf: "center",
    width: 148,
    height: 148,
    bottom: 146,
    borderRadius: 200,
  },
  imagemsg: {
    alignSelf: "center",
    top: "30%",
    position: "absolute",
    textAlign: "center",
    fontSize: 22,
    fontWeight: "bold",
    color: "white",
  },
  inputView: {
    backgroundColor: "#fff",
    borderRadius: 20,
    width: "80%",
    height: 55,
    marginBottom: 20,
    alignItems: "center",
    alignSelf: "center",
    top: "20%",
  },

  TextInput: {
    fontSize: 15,
    height: 50,
    flex: 2,
    padding: 10,
    marginLeft: 15,
  },
  button: {
    marginTop: 30,
    marginHorizontal: 80,
    elevation: 8,
    backgroundColor: "#f58f5a",
    borderRadius: 15,
    paddingVertical: 15,
    paddingHorizontal: 12,
    top: "50%",
    width: "45%",
    alignSelf: "center",
  },
  buttonText: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },
});
