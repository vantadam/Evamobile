import React, { useState } from "react";
import {
  FlatList,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from "react-native";
import "react-native-gesture-handler";
import MapView from "react-native-maps";
import { countrycodes } from "../assets/countrycodes";
export default function Country({ route }) {
  const countryname = route.params.search.toLowerCase();

  var LOCA = {
    latitude: 46.246294,
    longitude: 1.6092334,
    latitudeDelta: 10,
    longitudeDelta: 10,
  };
  var INTR = "";
  var CLIM = "";

  for (const item of countrycodes) {
    if (item.name === countryname) {
      LOCA = item.geo;
      INTR = item.intro;
      CLIM = item.climat;
    }
  }

  return (
    <ImageBackground
      source={require("../assets/notifbg.png")}
      style={styles.container}
    >
      <View style={styles.titlepage}>
        <Text style={styles.msg}>{countryname}</Text>
      </View>
      <View style={styles.map}>
        <MapView style={styles.mapview} region={LOCA} />
      </View>
      <View style={styles.desc}>
        <ScrollView style={styles.flat}>
          <Text style={styles.title}>INFORMATION GENERALE</Text>
          <Text style={styles.text}>{INTR}</Text>
          <Text style={styles.title}>CLIMAT</Text>
          <Text style={styles.text}>{CLIM}</Text>
        </ScrollView>
      </View>
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
  titlepage: {
    position: "absolute",
    top: "7%",
    width: "70%",
    height: "6%",
  },
  map: {
    backgroundColor: "#f58f5a",
    width: "80%",
    aspectRatio: 1,
    position: "absolute",
    top: "13%",
    borderRadius: 30,
  },
  mapview: {
    alignSelf: "center",
    width: "92%",
    aspectRatio: 1,
    top: "4%",
  },
  desc: {
    width: "85%",
    height: "35%",

    position: "absolute",
    bottom: "8%",
  },
  flat: {
    width: "90%",
    height: "90%",
    shadowColor: "#36446d",
    shadowOpacity: 30,
    alignSelf: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "#36446d",
  },
  text: {
    fontSize: 15,
    textAlign: "center",
  },
});
