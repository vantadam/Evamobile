import React from "react";
import DatePicker from "react-native-datepicker";
import { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import {
  Text,
  StyleSheet,
  View,
  ImageBackground,
  TouchableOpacity,
  TextInput,
} from "react-native";

function Volhotel({ navigation }) {
  const [from, setFrom] = useState("");
  const [date, setDate] = useState("09-10-2021");

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
          color="#D3D3D3"
          style={styles.icon}
        />
        <TextInput
          style={styles.textinput}
          placeholder=" recherche"
          placeholderTextColor="#D3D3D3"
          onChangeText={(from) => setFrom(from)}
          autoCapitalize="none"
        />
      </View>
      <Text style={styles.ou}>Ou allez vous ?</Text>
      <View style={styles.secondsearch}>
        <FontAwesome
          name="search"
          size={15}
          color="#D3D3D3"
          style={styles.icon}
        />
        <TextInput
          style={styles.textinput}
          placeholder=" recherche"
          placeholderTextColor="#D3D3D3"
          onChangeText={(from) => setFrom(from)}
          autoCapitalize="none"
        />
      </View>

      <View style={styles.dat}>
        <Text style={styles.text}>Du :</Text>
        <DatePicker
          style={styles.datePickerStyle}
          date={date}
          mode="date"
          placeholder="select date"
          format="DD/MM/YYYY"
          minDate="01-01-2022"
          maxDate="01-01-2024"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          iconComponent={<AntDesign name="calendar" size={0} color="#f58f5a" />}
          customStyles={{
            dateIcon: {
              position: "absolute",
              right: -5,
              top: 4,
              marginLeft: 0,
            },
            dateInput: {
              borderColor: "white",
              alignItems: "flex-start",
              borderWidth: 0,
              borderBottomWidth: 1,
            },
            placeholderText: {
              fontSize: 17,
              color: "white",
            },
            dateText: {
              fontSize: 17,
              color: "white",
            },
          }}
          onDateChange={(date) => {
            setDate(date);
          }}
        />

        <Text style={styles.text}>Au :</Text>
        <DatePicker
          style={styles.datePickerStyle}
          date={date}
          mode="date"
          placeholder="select date"
          format="DD/MM/YYYY"
          minDate="01-01-2022"
          maxDate="01-01-2024"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          iconComponent={<AntDesign name="calendar" size={0} color="#f58f5a" />}
          customStyles={{
            dateIcon: {
              position: "absolute",
              right: -5,
              top: 4,
              marginLeft: 0,
            },
            dateInput: {
              borderColor: "white",
              alignItems: "flex-start",
              borderWidth: 0,
              borderBottomWidth: 1,
            },
            placeholderText: {
              fontSize: 17,
              color: "white",
            },
            dateText: {
              fontSize: 17,
              color: "white",
            },
          }}
          onDateChange={(date) => {
            setDate(date);
          }}
        />
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Volhotelde")}
      >
        <Text style={styles.buttonText}> Confirmer </Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  ou: {
    alignSelf: "center",
    top: "1%",
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  dat: {
    top: "1%",
    flexDirection: "row",
  },
  icon: {
    alignSelf: "center",
    left: 10,
  },

  search: {
    width: "80%",
    top: "5%",
    height: 70,
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 15,
    marginBottom: "20%",
    flexDirection: "row",
  },

  secondsearch: {
    width: "80%",
    top: "10%",
    height: 70,
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 15,
    marginBottom: "30%",
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
    marginHorizontal: 10,
    elevation: 8,
    backgroundColor: "#f58f5a",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    top: "15%",
  },
  text: {
    color: "white",
    bottom: 15,
    left: 23,
  },
  datePickerStyle: {
    marginHorizontal: 5,
  },
  title: {
    bottom: "3%",
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },

  number: {
    bottom: 150,
    flexDirection: "row",
  },
  agetext: {
    color: "white",
    left: 20,
    marginBottom: 10,
    fontSize: 20,
  },
  num: {
    marginHorizontal: 20,
  },
  textinput: {
    width: "95%",
    color: "white",
    paddingLeft: 20,
  },
});

export default Volhotel;
