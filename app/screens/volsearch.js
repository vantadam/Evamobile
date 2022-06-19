import {
  ImageBackground,
  StyleSheet,
  TextInput,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Keyboard,
} from "react-native";
import React from "react";
import { FontAwesome, Entypo } from "@expo/vector-icons";
import { useState, useEffect } from "react";
import "react-native-gesture-handler";
import * as Location from "expo-location";
import { closestMatch } from "closest-match";

import { cityList } from "../assets/cities";
import { cityCodes } from "../assets/citycodes";

export default function Volsearch({ navigation }) {
  const [search1focus, setsearch1focus] = useState(false);
  const [search2focus, setsearch2focus] = useState(false);
  const [from, setFrom] = useState("");

  const [to, setTo] = useState("");
  const [input, setInput] = useState("recherche");
  const [inputColor, setInputColor] = useState("#D3D3D3");

  const PressInput1 = () => {
    setInput("recherche");
    setInputColor("#D3D3D3");
    setsearch1focus(true);
  };
  const PressInput2 = () => {
    setsearch2focus(true);
  };

  async function GetCurrentLocation() {
    let { status } = await Location.requestPermissionsAsync();

    if (status !== "granted") {
      Alert.alert(
        "Permission not granted",
        "Allow the app to use location service.",
        [{ text: "OK" }],
        { cancelable: false }
      );
    }

    let { coords } = await Location.getCurrentPositionAsync();

    if (coords) {
      const { latitude, longitude } = coords;
      alert({ latitude, longitude });
    }
  }
  Keyboard.addListener("keyboardDidHide", () => {
    setsearch1focus(false);
    setsearch2focus(false);
  });
  function Hidelist1() {
    setsearch1focus(false);
  }
  function Hidelist2() {
    setsearch2focus(false);
  }
  function choice1(keys, listIndex) {
    if (listIndex == 1) {
      setFrom(closestMatch(keys, cityList, true)[0]);
    } else setTo(closestMatch(keys, cityList, true)[0]);
  }
  function choice2() {
    if (closestMatch(from, cityList, true)[1]) {
      setFrom(closestMatch(from, cityList, true)[1]);
    }
  }

  function List({
    listState,
    listStyle,
    source,
    choicestyle1,
    choicestyle2,
    listIndex,
    keys,
  }) {
    if (listState == false || keys == closestMatch(keys, cityList)) {
      return null;
    } else {
      return (
        <View style={listStyle}>
          <FlatList
            data={source}
            renderItem={({ item, index }) => {
              return (
                <View>
                  <View style={{ top: "2%", marginTop: "1%" }}>
                    <Text style={{ fontSize: 20, left: "10%", color: "white" }}>
                      {item}
                    </Text>
                  </View>
                </View>
              );
            }}
            keyExtractor={(item) => item}
          />
          <TouchableOpacity
            onPress={() => choice1(keys, listIndex)}
            style={choicestyle1}
          />
          <TouchableOpacity
            onPress={() => {
              choice2(keys);
            }}
            style={choicestyle2}
          />
        </View>
      );
    }
  }

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
          placeholder={input}
          placeholderTextColor={inputColor}
          onFocus={PressInput1}
          onBlur={Hidelist1}
          value={from}
          onChangeText={(from) => setFrom(from)}
          autoCapitalize="none"
        />
        <TouchableOpacity style={styles.geo} onPress={GetCurrentLocation}>
          <Entypo
            name="location-pin"
            size={35}
            color="#f58f5a"
            style={styles.icon2}
          />
        </TouchableOpacity>
      </View>

      <List
        listState={search1focus}
        listStyle={styles.list1}
        choicestyle1={styles.choice1}
        choicestyle2={styles.choice2}
        source={closestMatch(from, cityList, true)}
        cities={cityList}
        listIndex={1}
        keys={from}
      />

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
          placeholder="recherche"
          placeholderTextColor="#D3D3D3"
          value={to}
          onChangeText={(to) => setTo(to)}
          autoCapitalize="none"
          onFocus={PressInput2}
          onBlur={Hidelist2}
        />
      </View>
      <List
        listState={search2focus}
        listStyle={styles.list2}
        choicestyle1={styles.choice1}
        choicestyle2={styles.choice2}
        source={closestMatch(to, cityList, true)}
        cities={cityList}
        listIndex={2}
        keys={to}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Voldetails", { from, to })}
      >
        <Text style={styles.buttonText}> Confirmer </Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  title: {
    position: "absolute",
    top: "15%",
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
  },
  icon: {
    alignSelf: "center",
    left: 10,
  },
  icon2: {
    alignSelf: "center",
    top: "20%",
  },
  geo: {
    height: "100%",
    width: "13%",
    alignItems: "center",
  },

  search: {
    position: "absolute",
    width: "80%",

    top: "22%",
    height: 40,
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 15,
    marginBottom: "40%",
    flexDirection: "row",
  },
  ou: {
    position: "absolute",
    top: "48%",
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
  },
  where: {
    position: "absolute",
    width: "80%",
    top: "55%",
    height: 40,
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
    position: "absolute",
    bottom: "6%",

    elevation: 8,
    backgroundColor: "#f58f5a",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,

    alignSelf: "center",

    alignItems: "center",
  },

  TextInput: {
    fontSize: 18,
    height: "100%",
    width: "100%",
    flex: 2,
    padding: 10,
    color: "white",
    marginLeft: 15,
  },
  list2: {
    position: "absolute",
    top: "68%",
    height: "15%",
    width: "75%",

    elevation: 2,
  },
  list1: {
    position: "absolute",
    top: "35%",
    height: "12%",
    width: "75%",
  },
  choice1: {
    position: "absolute",
    width: "70%",
    height: "40%",
    top: "13%",
  },
  choice2: {
    position: "absolute",
    width: "70%",
    height: "42%",
    top: "55%",
  },
});
