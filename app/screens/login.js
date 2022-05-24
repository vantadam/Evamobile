import React from "react";
import {
  ImageBackground,
  StyleSheet,
  TextInput,
  Text,
  View,
  TouchableOpacity,
  Alert,
  BackHandler,
} from "react-native";
import { useState, useEffect } from "react";
import "react-native-gesture-handler";
import { authentication } from "../../firebase/firebase-config";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [logErr, setLogErr] = useState("");

  useEffect(() => {
    const backAction = () => {
      Alert.alert("alert!", "Voulez-vous vraiment quitter l'application ?", [
        {
          text: "Annuler",
          onPress: () => null,
          style: "cancel",
        },
        { text: "Oui", onPress: () => BackHandler.exitApp() },
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);

  function Login() {
    try {
      signInWithEmailAndPassword(authentication, email, password)
        .then((re) => {
          navigation.replace("Home");
        })
        .catch((error) => {
          console.log(error);
          switch (error.code) {
            case "auth/network-request-failed":
              setLogErr("Probleme network");
              break;
            case "auth/user-not-found":
              setLogErr("utilisateur introuvable");
              break;
            case "auth/invalid-email":
              setLogErr("merci d'utiliser une email valide");
              break;
            case "auth/wrong-password":
              setLogErr("mot de passe incorrect");
              break;
          }
        });
    } catch (err) {
      setLogErr(err);
    }
  }
  return (
    <ImageBackground
      resizeMode="stretch"
      source={require("../assets/loginbg.png")}
      style={styles.container}
    >
      <View>
        <Text style={styles.title}>bienvenue!</Text>
      </View>
      <View style={styles.inputView}>
        <TextInput
          keyboardType="email-address"
          style={styles.TextInput}
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
      <Text style={styles.error}>{logErr}</Text>
      <View style={styles.fixToText}>
        <TouchableOpacity style={styles.button} onPress={Login}>
          <Text style={styles.buttonText}>Se Connecter</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Signup")}
        >
          <Text style={styles.buttonText}> S'inscrire </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
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
    textAlign: "center",
    width: "100%",
    fontSize: 15,
    height: 50,
    flex: 2,
    padding: 10,
    marginLeft: 15,
  },

  container: {
    flex: 1,
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
    fontSize: 40,
    bottom: 130,

    fontWeight: "bold",
    alignContent: "center",
  },
  text: {
    bottom: 100,
  },
  fixToText: {
    bottom: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  error: {
    color: "red",
    bottom: 5,
  },
});
