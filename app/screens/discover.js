import React from "react";
import {
  ImageBackground,
  StyleSheet,
  TextInput,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import { countryList } from "./countries";

export function Discover({ navigation }) {
  const [search, setSearch] = useState("");
  const [error, setError] = useState("");

  return (
    <ImageBackground
      source={require("../assets/volbg.png")}
      style={styles.page}
    >
      <Text style={styles.title}>Trouvez votre prochaine destination...</Text>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          editable={true}
          placeholder="mot-clé    "
          placeholderTextColor="#D3D3D3"
          onChangeText={(search) => setSearch(search)}
        />
      </View>
      <Text style={styles.error}>{error}</Text>

      <View style={styles.buttoncontain}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            if (
              countryList.includes(
                search.charAt(0).toUpperCase() + search.slice(1)
              )
            ) {
              navigation.navigate("Images", search);
              setError("");
            } else {
              setError("désolé nous n`avons pas reconnu ce pays");
            }
          }}
        >
          <Text style={styles.buttonText}> recherche</Text>
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

    alignItems: "center",
    top: "35%",
    alignSelf: "center",
    borderColor: "#36446d",
    borderWidth: 1,
  },
  error: {
    top: "51%",
    textAlign: "center",

    fontSize: 15,
    color: "#f4f4f4",
  },

  TextInput: {
    fontSize: 15,
    height: 50,
    flex: 2,
    padding: 10,
    alignSelf: "center",
  },
  buttoncontain: {
    height: "77%",
  },
  button: {
    elevation: 8,
    backgroundColor: "#f58f5a",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    alignSelf: "center",
    width: "50%",
    top: "90%",
  },
  buttonText: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },

  title: {
    color: "white",
    margin: 1,
    fontSize: 25,
    alignSelf: "center",
    top: "20%",
    marginHorizontal: 5,

    fontWeight: "bold",
    alignContent: "center",
  },
  page: {
    flex: 1,
    flexDirection: "column",
  },
});
