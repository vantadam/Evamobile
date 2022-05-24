import {
  ImageBackground,
  StyleSheet,
  TextInput,
  Text,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { useState } from "react";
import { BorderlessButton } from "react-native-gesture-handler";
import "react-native-gesture-handler";

export default function Volsearch({ navigation }) {
  const [from, setFrom] = useState("");

  return (
    <ImageBackground
      source={require("../assets/volbg.png")}
      style={styles.container}
    >
      <Text style={styles.title}>D'ou partez vous ?</Text>
      <View style={styles.search}>
        <FontAwesome
          name="search"
          size={15}
          color="white"
          style={styles.icon}
        />
        <TextInput
          style={styles.TextInput}
          placeholder="   recherche"
          placeholderTextColor="#D3D3D3"
          onChangeText={(from) => setFrom(from)}
          autoCapitalize="none"
        />
      </View>

      <Text style={styles.ou}>Ou allez vous ?</Text>

      <View style={styles.where}>
        <FontAwesome
          name="search"
          size={15}
          color="white"
          style={styles.icon}
        />
        <TextInput
          style={styles.TextInput}
          placeholder="   recherche"
          placeholderTextColor="#D3D3D3"
          onChangeText={(from) => setFrom(from)}
          autoCapitalize="none"
        />
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Voldetails")}
      >
        <Text style={styles.buttonText}> Confirmer </Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  title: {
    top: "8%",
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
  },
  icon: {
    alignSelf: "center",
    left: 10,
  },

  search: {
    width: "80%",
    top: "20%",
    height: 70,
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 15,
    marginBottom: "40%",
    flexDirection: "row",
  },
  ou: {
    top: "5%",
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
  },
  where: {
    width: "80%",
    top: "15%",
    height: 70,
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 15,
    marginBottom: "40%",
    flexDirection: "row",
  },
  container: {
    flex: 3,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  button: {
    marginTop: "10%",
    marginHorizontal: "15%",
    elevation: 8,
    backgroundColor: "#f58f5a",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    bottom: 60,
    alignSelf: "center",
    top: "4%",
  },

  TextInput: {
    fontSize: 18,
    height: "100%",
    width: "100%",
    flex: 2,
    padding: 10,
    color: "white",
    marginLeft: 0,
  },
});
