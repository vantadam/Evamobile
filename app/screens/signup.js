import React from "react";
import {
  ImageBackground,
  StyleSheet,
  TextInput,
  Text,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import { useState } from "react";
import { authentication, db } from "../../firebase/firebase-config";
import {
  collection,
  getDocs,
  setDoc,
  doc,
  Firestore,
} from "firebase/firestore/lite";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

export default function Signup({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [passconfirm, setPassconfirm] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loading, setLoading] = useState("S'inscrire");

  const Register = () => {
    setLoading("Loading...");
    if (password == passconfirm) {
      try {
        createUserWithEmailAndPassword(
          authentication,
          email,
          password,
          username
        )
          .then((userCredential) => {
            const user = userCredential.user;
            updateProfile(user, { displayName: username });
            console.log(userCredential);
            setPasswordError("");
            setLoading("S'inscrire");
            navigation.navigate("Login");
          })
          .catch((error) => {
            switch (error.code) {
              case "auth/email-already-in-use":
                setPasswordError("e-mail déjà utilisé !");
                break;
              case "auth/invalid-email":
                setPasswordError("merci d'utiliser un vrai email");
                break;
              case "auth/weak-password":
                setPasswordError(
                  "Le mot de passe doit être de 6 caractères minimum"
                );
                break;
            }
            console.log(error);
          });

        setLoading("S'inscrire");
      } catch (err) {
        setPasswordError(err);
      }
    } else {
      setLoading("S'inscrire");
      setPasswordError("mot de passe incorrect");
    }
  };

  return (
    <ImageBackground
      resizeMode="stretch"
      source={require("../assets/loginbg.png")}
      style={styles.container}
    >
      <View>
        <Image source={require("../assets/eva.png")} style={styles.logo} />
      </View>
      <View>
        <Text style={styles.title}>Créer un compte</Text>
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="pseudonyme"
          placeholderTextColor="#D3D3D3"
          onChangeText={(username) => setUsername(username)}
          autoCapitalize="none"
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          keyboardType="email-address"
          placeholder="e-mail"
          placeholderTextColor="#D3D3D3"
          onChangeText={(email) => setEmail(email)}
          autoCapitalize="none"
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Mot de passe"
          placeholderTextColor="#D3D3D3"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
          autoCapitalize="none"
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Confirmer"
          placeholderTextColor="#D3D3D3"
          secureTextEntry={true}
          onChangeText={(passconfirm) => setPassconfirm(passconfirm)}
          autoCapitalize="none"
        />
      </View>

      <Text style={styles.error}>{passwordError}</Text>

      <View style={styles.fixToText}>
        <TouchableOpacity style={styles.button} onPress={Register}>
          <Text style={styles.buttonText}> {loading} </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  logo: {
    bottom: 500,
    height: "15%",
    marginBottom: 10,
  },

  inputView: {
    backgroundColor: "#fff",
    borderRadius: 20,
    width: "80%",
    height: 55,
    marginBottom: 20,
    alignItems: "center",
    bottom: 40,
  },

  TextInput: {
    fontSize: 15,
    height: 50,
    flex: 2,
    padding: 10,
    width: "100%",

    textAlign: "center",
  },

  container: {
    flex: 3,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    marginTop: 30,
    marginHorizontal: 10,
    elevation: 8,
    backgroundColor: "#f58f5a",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    bottom: 30,
  },
  buttonText: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },
  title: {
    color: "#36446d",
    margin: 1,
    fontSize: 35,
    bottom: 100,

    fontWeight: "bold",
    alignContent: "center",
  },
  error: {
    bottom: 30,
    color: "red",
  },
  text: {
    bottom: 100,
  },
  fixToText: {
    bottom: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
