import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import DropDownPicker from "react-native-dropdown-picker";
import { TouchableOpacity } from "react-native";
import Counter from "react-native-counters";
const minusIcon = (isDisabled) => {
  return <AntDesign name="minuscircle" size={26} color="#f58f5a" />;
};

const plusIcon = (isPlusDisabled) => {
  return <AntDesign name="pluscircle" size={26} color="#f58f5a" />;
};

const Hotelplus = ({ navigation, route }) => {
  const location = route.params.location;
  const date = route.params.date;
  const end = route.params.end;
  const adults = route.params.adults;
  const kids = route.params.kids;
  const teens = route.params.teens;
  const babies = route.params.babies;
  const rating = route.params.rating;

  const [min, setMin] = useState("");
  const [max, setMax] = useState("");
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "single", value: "single" },
    { label: "double", value: "double" },
    { label: "Triple", value: "Triple" },
    { label: "Quad", value: "Quad" },
    { label: "Suite", value: "Suite" },
  ]);
  const [room, setRoom] = useState(null);

  const [open2, setOpen2] = useState(false);
  const [value2, setValue2] = useState(null);
  const [items2, setItems2] = useState([{ label: "", value: "" }]);
  const [arrangement, setArrangement] = useState(null);

  const [roomNum, setRoomNum] = useState(null);

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
              onChangeText={(min) => setMin(min)}
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
              onChangeValue={(room) => setRoom(room)}
            />
          </View>
        </View>
        <View style={styles.right}>
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="max"
              placeholderTextColor="grey"
              onChangeText={(max) => setMax(max)}
              autoCapitalize="none"
            />
          </View>
          <View style={styles.drop}>
            <Text style={styles.minititle}>arrangement</Text>
            <DropDownPicker
              open={open2}
              value={value2}
              items={items2}
              setOpen={setOpen2}
              setValue={setValue2}
              setItems={setItems2}
              style={styles.DropDownPicker}
              textStyle={styles.droptext}
              onChangeValue={(arrangement) => setArrangement(arrangement)}
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
            onChange={(roomNum) => setRoomNum(roomNum)}
          />
        </View>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.navigate("HotelResults", {
            search: "hotel",
            adults,
            babies,
            teens,
            kids,
            location,
            end,
            date,
            rating,
            min,
            max,
            room,
            roomNum,
            arrangement,
          })
        }
      >
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
