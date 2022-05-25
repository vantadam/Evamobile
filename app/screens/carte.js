import React from "react";
import DatePicker from "react-native-datepicker";
import { useState } from "react";
import { AntDesign } from "@expo/vector-icons";

import {
  Text,
  StyleSheet,
  View,
  ImageBackground,
  TouchableOpacity,
  TextInput,
} from "react-native";

function Carte() {
  const [date, setDate] = useState("01-22");
  const [name, setName] = useState("");
  const [num, setNum] = useState("");

  return (
    <ImageBackground
      source={require("../assets/cartebg.png")}
      style={styles.container}
    >
      <View>
        <Text style={styles.title}>Introduisez les données suivantes</Text>
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Nom du titulaire"
          placeholderTextColor="#D3D3D3"
          onChangeText={(name) => setName(name)}
        />
      </View>
      <View style={styles.second}>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextNum}
            placeholder="Numero de carte"
            placeholderTextColor="#D3D3D3"
            onChangeText={(num) => setNum(num)}
            keyboardType="numeric"
          />
        </View>

        <View style={styles.dat}>
          <Text style={styles.text}></Text>
          <DatePicker
            style={styles.datePickerStyle}
            date={date}
            mode="date"
            placeholder="select date"
            format="MM/YY"
            minDate="07-22"
            maxDate="01-25"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            iconComponent={
              <AntDesign name="calendar" size={0} color="#f58f5a" />
            }
            customStyles={{
              dateIcon: {
                position: "absolute",
                right: -5,
                top: 4,
                marginLeft: 0,
              },
              dateInput: {
                borderColor: "grey",
                alignItems: "flex-start",
                borderWidth: 0,
                borderBottomWidth: 0,
              },
              placeholderText: {
                fontSize: 17,
                color: "grey",
              },
              dateText: {
                fontSize: 17,
                color: "#36446d",
                fontWeight: "bold",
              },
            }}
            onDateChange={(date) => {
              setDate(date);
            }}
          />
        </View>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}> Enregistrer </Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  dat: {
    bottom: 30,
    left: 20,
  },

  second: {
    flexDirection: "row",
    left: 40,
    marginHorizontal: 45,
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
    marginTop: 30,
    marginHorizontal: 10,
    elevation: 8,
    backgroundColor: "#f58f5a",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    top: 1,
  },
  text: {
    color: "white",
    bottom: 15,
    left: 23,
  },
  datePickerStyle: {
    marginHorizontal: 5,
  },

  inputView: {
    backgroundColor: "#fff",
    borderRadius: 20,
    width: "80%",
    height: 55,
    marginBottom: 20,
    alignItems: "center",
    bottom: 25,
    borderColor: "#36446d",
    borderWidth: 1,
  },

  TextInput: {
    fontSize: 15,
    height: 50,
    flex: 2,
    padding: 10,
    marginLeft: 15,
  },
  TextNum: {
    fontSize: 15,
    height: 50,
    padding: 10,
  },
  title: {
    color: "#36446d",
    margin: 1,
    fontSize: 20,
    bottom: 80,

    fontWeight: "bold",
    alignContent: "center",
  },
});

export default Carte;
