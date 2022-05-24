import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
} from "react-native";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import DropDownPicker from "react-native-dropdown-picker";
import { TouchableOpacity } from "react-native";
import Counter from "react-native-counters";
const minusIcon = (isDisabled) => {
  return <AntDesign name="minuscircle" size={26} color="#f58f5a" />;
};

const plusIcon = (isPlusDisabled) => {
  return <AntDesign name="pluscircle" size={26} color="#f58f5a" />;
};

const Hotelplus = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "eco", value: "eco" },
    { label: "couch", value: "couch" },
  ]);
  return (
    <ImageBackground
      source={require("../assets/volplus.png")}
      style={styles.container}
    >
      <Text style={styles.title}>Affiner votre recherche</Text>
      <Text style={styles.text}>Par budget</Text>
      <View style={styles.options}>
        <View style={styles.left}>
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="min"
              placeholderTextColor="grey"
              onChangeText={(username) => setUsername(username)}
              autoCapitalize="none"
            />
          </View>
          <View style={styles.drop}>
            <Text style={styles.minititle}>Type chambre</Text>
            <DropDownPicker
              open={open}
              value={value}
              items={items}
              setOpen={setOpen}
              setValue={setValue}
              setItems={setItems}
              style={styles.DropDownPicker}
              textStyle={styles.droptext}
            />
          </View>
        </View>
        <View style={styles.right}>
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="max"
              placeholderTextColor="grey"
              onChangeText={(username) => setUsername(username)}
              autoCapitalize="none"
            />
          </View>
          <View style={styles.drop}>
            <Text style={styles.minititle}>arrangement</Text>
            <DropDownPicker
              open={open}
              value={value}
              items={items}
              setOpen={setOpen}
              setValue={setValue}
              setItems={setItems}
              style={styles.DropDownPicker}
              textStyle={styles.droptext}
            />
          </View>
        </View>
      </View>
      <View style={styles.counter}>
        <Text style={styles.text}>Par nombre de chambre</Text>
        <View style={styles.num}>
          <Counter
            start={0}
            max={5}
            minusIcon={minusIcon}
            plusIcon={plusIcon}
            countTextStyle={{ color: "#36446d", fontSize: "20" }}
            buttonStyle={{ borderColor: "transparent" }}
          />
        </View>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}> Confirmer </Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

export default Hotelplus;

const styles = StyleSheet.create({
  num: {
    alignSelf: "center",

    alignItems: "center",
    top: "10%",
  },
  DropDownPicker: {
    borderColor: "#36446d",
  },
  droptext: {
    color: "grey",
  },
  minititle: {
    fontSize: 20,
    color: "#f58f5a",
    left: 5,
    marginBottom: 5,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    color: "white",
    bottom: "10%",
  },
  text: {
    fontSize: 20,
    color: "#f58f5a",
    alignSelf: "center",
    bottom: "1%",
  },
  options: {
    width: "90%",
    height: "30%",

    flexDirection: "row",
  },
  left: {
    width: "50%",
  },
  right: {
    width: "50%",
  },
  container: {
    flex: 1,

    justifyContent: "center",
    alignItems: "center",
  },
  inputView: {
    backgroundColor: "#fff",
    borderRadius: 10,
    width: "90%",
    height: 55,
    borderColor: "#36446d",
    borderWidth: 1,

    alignItems: "center",
    alignSelf: "center",
  },

  TextInput: {
    fontSize: 15,
    height: 50,
    flex: 2,
    padding: 10,
    width: "100%",

    textAlign: "center",
  },

  drop: {
    marginTop: "40%",
    width: "90%",
    alignSelf: "center",
  },
  button: {
    elevation: 8,
    backgroundColor: "#f58f5a",
    borderRadius: 10,
    paddingHorizontal: 12,
    top: "15%",
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  counter: {
    width: "80%",
    height: "10%",
    top: "8%",
  },
});
