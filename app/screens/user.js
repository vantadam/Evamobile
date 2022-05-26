import React, { useEffect, useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  Alert,
  View,
} from "react-native";
import { useIsFocused } from "@react-navigation/native";
import "react-native-gesture-handler";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { authentication } from "../../firebase/firebase-config";

export default function User({ navigation }) {
  const [image, setImage] = useState(
    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/271deea8-e28c-41a3-aaf5-2913f5f48be6/de7834s-6515bd40-8b2c-4dc6-a843-5ac1a95a8b55.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzI3MWRlZWE4LWUyOGMtNDFhMy1hYWY1LTI5MTNmNWY0OGJlNlwvZGU3ODM0cy02NTE1YmQ0MC04YjJjLTRkYzYtYTg0My01YWMxYTk1YThiNTUuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.BopkDn1ptIwbmcKHdAOlYHyAOOACXW0Zfgbs0-6BY-E"
  );
  const isFocused = useIsFocused();

  useEffect(() => {
    setImage(authentication.currentUser.photoURL);
  }, [isFocused]);

  function SignOut() {
    navigation.navigate("Login");
  }

  const Confirm = () =>
    Alert.alert("Déconnection", "êtes-vous sûr de vouloir être déconnecter", [
      {
        text: "Annuler        ",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "déconnecter", onPress: () => SignOut() },
    ]);

  return (
    <ImageBackground
      source={require("../assets/userbg.png")}
      style={styles.container}
    >
      <View style={styles.avatar}>
        <View style={styles.stroke}>
          <Image
            source={require("../assets/avatar.png")}
            style={styles.default}
          />
          <Image
            source={{
              uri: image,
            }}
            style={styles.image}
          />
        </View>
      </View>
      <TouchableOpacity
        style={styles.set}
        onPress={() => navigation.navigate("Reservations")}
      >
        <AntDesign
          name="calendar"
          size={24}
          color="#f58f5a"
          style={styles.icon}
        />
        <Text style={styles.settext}> Gerez vos reservation </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.set}
        onPress={() => navigation.navigate("Carte")}
      >
        <MaterialIcons
          name="payment"
          size={26}
          color="#f58f5a"
          style={styles.icon}
        />
        <Text style={styles.settext}> Mode de paiement </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.set}
        onPress={() => navigation.navigate("Options")}
      >
        <Ionicons
          name="settings"
          size={24}
          color="#f58f5a"
          style={styles.icon}
        />

        <Text style={styles.settext}> Options </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.setlast} onPress={() => Confirm()}>
        <AntDesign name="user" size={24} color="#f58f5a" style={styles.icon} />
        <Text style={styles.settext}> Déconnection</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: "#fff",

    justifyContent: "center",
  },

  set: {
    flexDirection: "row",
    top: "10%",
    marginTop: "15%",
    paddingBottom: 10,
    borderBottomWidth: 2,
    borderBottomColor: "#a4a4a4",
  },

  setlast: {
    flexDirection: "row",
    top: "9%",
    marginTop: "15%",
    paddingBottom: 5,
  },
  settext: {
    fontSize: 20,
    fontWeight: "bold",
  },
  icon: { marginLeft: "20%" },

  avatar: {
    backgroundColor: "white",
    borderRadius: 300,
    top: "4%",
    width: "45%",
    aspectRatio: 1,
    alignSelf: "center",
  },
  stroke: {
    backgroundColor: "#36446d",
    borderRadius: 300,
    top: "2.5%",
    width: "95%",
    aspectRatio: 1,
    alignSelf: "center",
  },
  image: {
    alignSelf: "center",
    width: "95%",
    aspectRatio: 1,
    top: "2.5%",
    borderRadius: 200,
  },
  default: {
    alignSelf: "center",
    width: "92%",
    height: "92%",
    position: "absolute",
    top: "4%",
  },
});
