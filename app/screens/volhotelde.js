import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ImageBackground,
} from "react-native";
import Counter from "react-native-counters";
import AntDesign from "react-native-vector-icons/AntDesign";
import DropDownPicker from "react-native-dropdown-picker";
import { TouchableOpacity } from "react-native";

const minusIcon = (isDisabled) => {
  return <AntDesign name="minuscircle" size={26} color="#f58f5a" />;
};

const plusIcon = (isPlusDisabled) => {
  return <AntDesign name="pluscircle" size={26} color="#f58f5a" />;
};

const Volhotelde = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "eco", value: "eco" },
    { label: "couch", value: "couch" },
  ]);
  return (
    <ImageBackground
      source={require("../assets/voldebg.png")}
      style={styles.container}
    >
      <View style={styles.number}>
        <View style={styles.num}>
          <Text style={styles.agetext}>Adultes</Text>
          <Counter
            start={0}
            minusIcon={minusIcon}
            plusIcon={plusIcon}
            countTextStyle={{ color: "white", fontSize: "20" }}
            buttonStyle={{ borderColor: "#36446d" }}
          />
        </View>
        <View style={styles.num}>
          <Text style={styles.agetext}>Enfants</Text>
          <Counter
            start={0}
            minusIcon={minusIcon}
            plusIcon={plusIcon}
            countTextStyle={{ color: "white", fontSize: "20" }}
            buttonStyle={{ borderColor: "#36446d" }}
          />
        </View>
      </View>
      <View style={styles.numbert}>
        <View style={styles.num}>
          <Text style={styles.agetext}>Jeunes</Text>
          <Counter
            start={0}
            minusIcon={minusIcon}
            plusIcon={plusIcon}
            countTextStyle={{ color: "white", fontSize: "20" }}
            buttonStyle={{ borderColor: "#36446d" }}
          />
        </View>
        <View style={styles.num}>
          <Text style={styles.agetext}>Bebes</Text>
          <Counter
            start={0}
            minusIcon={minusIcon}
            plusIcon={plusIcon}
            countTextStyle={{ color: "white", fontSize: "20" }}
            buttonStyle={{ borderColor: "#36446d" }}
          />
        </View>
      </View>
      <View style={styles.drop}>
        <Text style={styles.classe}>Classe</Text>
        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
        />
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}> Confirmer </Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

export default Volhotelde;

const styles = StyleSheet.create({
  classe: {
    fontSize: 20,
    color: "white",
    left: 5,
  },

  num: {
    padding: 20,
  },

  number: {
    flexDirection: "row",
  },
  numbert: {
    flexDirection: "row",
  },
  agetext: {
    fontSize: 25,
    color: "white",
    alignSelf: "center",
  },

  container: {
    flex: 1,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  calendar: {
    borderRadius: 10,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f4f4f4",
    bottom: 80,
  },
  picker: {},
  title: {
    textAlign: "left",
    fontSize: 20,
    fontWeight: "bold",
  },
  datePickerStyle: {
    width: 230,
  },
  text: {
    textAlign: "left",
    width: 230,
    fontSize: 16,
    color: "#000",
  },

  drop: {
    top: 60,
    marginHorizontal: 10,
  },
  button: {
    elevation: 8,
    backgroundColor: "#f58f5a",
    borderRadius: 10,
    paddingHorizontal: 12,
    top: 150,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
});
