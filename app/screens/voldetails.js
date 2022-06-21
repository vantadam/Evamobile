import React, { useState } from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import DatePicker from "react-native-datepicker";
import Counter from "react-native-counters";
import AntDesign from "react-native-vector-icons/AntDesign";
import DropDownPicker from "react-native-dropdown-picker";
import { TouchableOpacity } from "react-native";
import { cityCodes } from "../assets/citycodes";
const minusIcon = (isDisabled) => {
  return <AntDesign name="minuscircle" size={26} color="#f58f5a" />;
};

const plusIcon = (isPlusDisabled) => {
  return <AntDesign name="pluscircle" size={26} color="#f58f5a" />;
};
//finding the codes for the city airports
const Voldetails = ({ navigation, route }) => {
  const f = route.params.from;
  const t = route.params.to;
  for (let i in cityCodes) {
    if (f == cityCodes[i].name) {
      var from = cityCodes[i].code;
    }
    if (t == cityCodes[i].name) {
      var to = cityCodes[i].code;
    }
  }
  //function to always  set the default date as the current
  const getCurrentDate = () => {
    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();

    return year + "-" + month + "-" + date; //format: yyyy-mm-dd;
  };

  const [today] = useState(getCurrentDate);
  const [classe, setClass] = useState("Economy");
  const [date, setDate] = useState(getCurrentDate);
  const [adults, setAdults] = useState(1);
  const [kids, setKids] = useState(0);
  const [teens, setTeens] = useState(0);
  const [babies, setBabies] = useState(0);

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {
      label: "Economy",
      value: [
        {
          cabinSubtype: "M",
          cabin: "ECONOMY",
        },
      ],
    },

    {
      label: "Business",
      value: [
        {
          cabinSubtype: "W",
          cabin: "BUISNESS",
        },
      ],
    },
    {
      label: "First Class",
      value: [
        {
          cabinSubtype: "F",
          cabin: "FIRST",
        },
      ],
    },
  ]);
  console.log(from);
  console.log(to);

  return (
    <ImageBackground
      source={require("../assets/voldebg.png")}
      style={styles.container}
    >
      <View style={styles.calendar}>
        <Text style={styles.text}>Date</Text>
        <DatePicker
          style={styles.datePickerStyle}
          date={date}
          mode="date"
          placeholder="select date"
          format="YYYY-MM-DD"
          minDate={today}
          maxDate="2024-01-01"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          iconComponent={
            <AntDesign name="calendar" size={24} color="#f58f5a" />
          }
          customStyles={{
            dateIcon: {
              position: "absolute",
              right: -5,
              top: 4,
              marginLeft: 0,
            },
            dateInput: {
              borderColor: "gray",
              alignItems: "flex-start",
              borderWidth: 0,
              borderBottomWidth: 1,
            },
            placeholderText: {
              fontSize: 17,
              color: "gray",
            },
            dateText: {
              fontSize: 17,
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
            start={1}
            max={9}
            minusIcon={minusIcon}
            plusIcon={plusIcon}
            countTextStyle={{ color: "white", fontSize: "20" }}
            buttonStyle={{ borderColor: "#36446d" }}
            onChange={(adults) => setAdults(adults)}
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
            onChange={(kids) => setKids(kids)}
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
            onChange={(teens) => setTeens(teens)}
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
            onChange={(babies) => setBabies(babies)}
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
          onChangeValue={(classe) => {
            setClass(classe);
          }}
        />
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.navigate("Volplus", {
            adults,
            babies,
            teens,
            kids,
            from,
            to,
            date,
            classe,
          })
        }
      >
        <Text style={styles.buttonText}> Confirmer </Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

export default Voldetails;

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
    fontSize: 24,
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
    top: "-2%",
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
    top: "3%",
    marginHorizontal: 10,
  },
  button: {
    elevation: 1,
    backgroundColor: "#f58f5a",
    borderRadius: 10,
    paddingHorizontal: 12,
    top: "12%",
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
});
