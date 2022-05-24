import React from "react";
import DatePicker from "react-native-datepicker";
import { useState } from "react";
import Counter from "react-native-counters";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import DropDownPicker from "react-native-dropdown-picker";
import {
  Text,
  StyleSheet,
  View,
  ImageBackground,
  TouchableOpacity,
  TextInput,
} from "react-native";

const minusIcon = (isDisabled) => {
  return <AntDesign name="minuscircle" size={26} color="#f58f5a" />;
};

const plusIcon = (isPlusDisabled) => {
  return <AntDesign name="pluscircle" size={26} color="#f58f5a" />;
};

function Hotelsearch({ navigation }) {
  const [date, setDate] = useState("09-10-2021");
  const [from, setFrom] = useState("");

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "★", value: "1" },
    { label: "★★", value: "2" },
    { label: "★★★", value: "3" },
    { label: "★★★★", value: "4" },
    { label: "★★★★★", value: "5" },
  ]);
  return (
    <ImageBackground
      source={require("../assets/volbg.png")}
      style={styles.container}
    >
      <View style={styles.search}>
        <FontAwesome
          name="search"
          size={15}
          color="white"
          style={styles.icon}
        />
        <TextInput
          style={styles.textinput}
          placeholder="recherche"
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
      <View style={styles.number}>
        <View style={styles.num}>
          <Text style={styles.agetext}>Adultes</Text>
          <Counter
            start={0}
            max={9}
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
            max={9}
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
            max={9}
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
            max={3}
            minusIcon={minusIcon}
            plusIcon={plusIcon}
            countTextStyle={{ color: "white", fontSize: "20" }}
            buttonStyle={{ borderColor: "#36446d" }}
          />
        </View>
      </View>
      <View style={styles.drop}>
        <Text style={styles.classe}>Nombres d'étoiles</Text>
        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
        />
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Hotelplus")}
      >
        <Text style={styles.buttonText}> Confirmer </Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  classe: {
    fontSize: 20,
    color: "white",
    left: 5,
  },

  drop: {
    width: "70%",
    bottom: "5%",
  },
  dat: {
    bottom: "20%",
    flexDirection: "row",
    alignSelf: "center",
  },

  search: {
    width: "80%",
    bottom: "1%",
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
  icon: {
    alignSelf: "center",
    left: 10,
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
    top: "5%",
  },
  text: {
    color: "white",
    bottom: 15,
    left: 35,
  },
  datePickerStyle: {
    marginHorizontal: 15,
    width: "30%",
  },

  number: {
    bottom: "10%",
    flexDirection: "row",
  },
  agetext: {
    color: "white",
    left: 9,
    marginBottom: 10,
    alignContent: "center",
    fontSize: 20,
  },
  num: {
    alignSelf: "center",
    marginHorizontal: 7,
    top: "45%",
  },
  textinput: {
    width: "95%",
    color: "white",
    paddingLeft: 20,
  },
  num: {
    padding: 20,
  },

  numbert: {
    bottom: "15%",
    flexDirection: "row",
  },
  agetext: {
    fontSize: 24,
    color: "white",
    alignSelf: "center",
  },
});

export default Hotelsearch;
