import React, { useState } from "react";
import { ImageBackground, StyleSheet, Text } from "react-native";

import "react-native-gesture-handler";

export default function Reservations() {
  const [msg, setMsg] = useState(
    "vous n'avez effectué aucune réservation  ʕ•́ᴥ•̀ʔっ"
  );
  return (
    <ImageBackground
      source={require("../assets/notifbg.png")}
      style={styles.container}
    >
      <Text style={styles.msg}>{msg}</Text>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  msg: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 30,
    color: "#f58f5a",
  },
});
