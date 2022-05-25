import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
} from "react-native";

import DropDownPicker from "react-native-dropdown-picker";
import { TouchableOpacity } from "react-native";

const Volplus = ({ navigation, route }) => {
  const from = route.params.from;
  const to = route.params.to;
  const adults = route.params.adults;
  const kids = route.params.kids;
  const teens = route.params.teens;
  const babies = route.params.babies;
  const date = route.params.date;
  const classe = route.params.classe;

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "American Airlines", value: "American Airlines" },
    { label: "Air Berlin", value: "Air Berlin" },
    { label: "Air Canada", value: "Air Canada" },
    { label: "Aspen Mountain Air", value: "Aspen Mountain Air" },
    { label: "Mandarin Airlines", value: "Mandarin Airlines" },
    { label: "Aero Lyon", value: "Aero lyon" },
    { label: "Air France", value: "Air France" },
    { label: "Air Algérie", value: "Air Algérie" },
    { label: "Air India", value: "Air India" },
    { label: "Air Asia", value: "Air Asia" },
    { label: "Aero Mexico", value: "Aero Mexico" },
    { label: "Ansett Australia", value: "Ansett Australia" },
    { label: "Aviaco", value: "Aviaco" },
    { label: "Air One", value: "Air One" },
    { label: "Aloha Airline", value: "Aloha Airlines" },
    { label: "Aerolineas Argentinas", value: "Aerolinas Argentinas" },
    { label: "Alaska Airlines", value: "Alaska Airlines" },
    { label: "Royal Air Maroc", value: "Royal Air Maroc" },
    { label: "Austral", value: "Austral" },
    { label: "Avianca", value: "Avianca" },
    { label: "Finnair", value: "Finnair" },
    { label: "Alitalia", value: "Alitalia" },
    { label: "British Airways", value: "British Airways" },
    { label: "Air Jet", value: "Air Jet" },
    { label: "British Midland", value: "British Midland" },
    { label: "Bangladesh Biman", value: "Bangladesh Biman" },
    { label: "Royal Brunei", value: "Royal Brunei" },
    { label: "Air Méditerranée", value: "Air Méditerranée" },
    { label: "Nouvelair", value: "Nouvelair" },
    { label: "Belair", value: "Belair" },
    { label: "Transporti Italiani", value: "Transporti Italiani" },
    { label: "Air Bostawana", value: "Air Bostawana" },
    { label: "Virgin Express", value: "Virgin Express" },
    { label: "Eva Air", value: "Eva Air" },
    { label: "BWIA Trinidad", value: "BWIA Trinidad" },
    { label: "Air China", value: "Air China" },
    { label: "Suckling Airways", value: "Suckling Airways" },
    { label: "Faucett", value: "Faucett" },
    { label: "China Airlines", value: "China Airlines" },
    { label: "Gambia Airways", value: "Gambia Airways" },
    { label: "Continental Airlines", value: "Continental Airlines" },
    { label: "Canadian Airlines", value: "Canadian Airlines" },
    { label: "AMC Aviation", value: "AMC Aviation" },
    { label: "Corsair", value: "Corsair" },
    { label: "Cubana", value: "Cubana" },
    { label: "Cathay", value: "Cathay" },
    { label: "Cyprus Airways", value: "Cyprus Airways" },
    { label: "Brit'Air", value: "Brit'Air" },
    { label: "Delta Airlines", value: "Delta Airlines" },
    { label: "Maerks Air", value: "Maerks Air" },
    { label: "Air Sénégal", value: "Air Sénégal" },
    { label: "TAAG", value: "TAAG" },
    { label: "Danair", value: "Danair" },
    { label: "Dynamic Airlines", value: "Dynamic Airlines" },
    { label: "Aer Lingus", value: "Aer Lingus" },
    { label: "Emirates", value: "Emirates" },
    { label: "Air Nippon", value: "Air Nippon" },
    { label: "Air Dolomiti", value: "Air Dolomiti" },
    { label: "Ethiopian Airlines", value: "Ethiopian Airlines" },
    { label: "Ecuatoriana", value: "Ecuatoriana" },
    { label: "Eurowings", value: "Eurowings" },
    { label: "Ariana Afghani", value: "Ariana Afghani" },
    { label: "Icelandair", value: "Icelandair" },
    { label: "Air Pacific", value: "Air Pacific" },
    { label: "Air Littoral", value: "Air Littoral" },
    { label: "Futura Internat.", value: "Futura Internat." },
    { label: "Viva Air", value: "Viva Air" },
    { label: "Garuda", value: "Garuda" },
    { label: "Taesa", value: "Taesa" },
    { label: "Gulf Air", value: "Gulf Air" },
    { label: "Flitestar", value: "Flitestar" },
    { label: "Air Gabon", value: "Air Gabon" },
    { label: "Go Fly", value: "Go Fly" },
    { label: "Aviateca", value: "Aviateca" },
    { label: "Air Guyane", value: "Air Guyane" },
    { label: "Riga Airlines", value: "Riga Airlines" },
    { label: "Gandalf Airlines", value: " Gandalf Airlines" },
    { label: "Hawaiian Airlines", value: "Hawaiian Airlines" },
    { label: "Air Seychelles", value: "Air Seychelles" },
    { label: "America West Airlines", value: "America West Airlines" },
    { label: "Uzbekistan Airlines", value: "Uzbekistan Airlines" },
    { label: "Iberia", value: "Iberia" },
    { label: "Indian Airlines", value: "Indian Airlines" },
    { label: "Air Normandie", value: "Air Normandie" },
    { label: "Meridiana", value: "Meridiana" },
    { label: "Air Liberté", value: "Air Liberté" },
    { label: "Istanbul Airlines", value: "Istanbul Airlines" },
    { label: "Iran Air", value: "Iran Air" },
    { label: "Regional Air", value: "Regional Air" },
    { label: "AOM", value: "AOM" },
    { label: "Flandre Air", value: "Flandre Air" },
    { label: "Yemenia", value: "Yemenia" },
    { label: "Manx Airlines", value: "Manx Airlines" },
    { label: "TAM", value: "TAM" },
    { label: "Spanair", value: "Spanair" },
    { label: "Japan Airlines", value: "Japan Airlines" },
    { label: "Air Jamaica", value: "Air Jamaica" },
    { label: "Adria Airways", value: "Adria Airways" },
    { label: "JAT", value: "JAT" },
    { label: "Jersey Europ.Airways", value: "Jersey Europ.Airways" },
    { label: "", value: "" },
  ]);
  const [open2, setOpen2] = useState(false);
  const [value2, setValue2] = useState(null);
  const [items2, setItems2] = useState([
    { label: "+/-1", value: "+/-1" },
    { label: "+2", value: "+2" },
    { label: "-2", value: "-2" },
  ]);
  const [open3, setOpen3] = useState(false);
  const [value3, setValue3] = useState(null);
  const [items3, setItems3] = useState([
    { label: "Matinal", value: "Matinal" },
    { label: "Aprés-Midi", value: "Aprés-Midi" },
    { label: "Soirée", value: "Soirée" },
  ]);
  const [open4, setOpen4] = useState(false);
  const [value4, setValue4] = useState(null);
  const [items4, setItems4] = useState([
    { label: "Matinal", value: "Matinal" },
    { label: "Aprés-Midi", value: "Aprés-Midi" },
    { label: "Soirée", value: "Soirée" },
  ]);

  const [min, setMin] = useState("");
  const [max, setMax] = useState("");
  const [flex, setFlex] = useState("");
  const [time, setTime] = useState("");
  const [airline, setAirline] = useState("");
  const [depart, setDepart] = useState("");
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
              keyboardType="number-pad"
            />
          </View>
          <View style={styles.drop1}>
            <Text style={styles.minititle}>Par compagnie</Text>
            <DropDownPicker
              open={open}
              value={value}
              items={items}
              setOpen={setOpen}
              setValue={setValue}
              setItems={setItems}
              style={styles.DropDownPicker}
              textStyle={styles.droptext}
              onChangeValue={(airline) => setAirline(airline)}
            />
          </View>
          <View style={styles.drop2}>
            <Text style={styles.minititle}>Par flexibilité</Text>
            <DropDownPicker
              open={open2}
              value={value2}
              items={items2}
              setOpen={setOpen2}
              setValue={setValue2}
              setItems={setItems2}
              style={styles.DropDownPicker}
              textStyle={styles.droptext}
              onChangeValue={(flex) => setFlex(flex)}
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
              keyboardType="number-pad"
            />
          </View>
          <View style={styles.drop2}>
            <Text style={styles.minititle}>Par Horaire</Text>
            <DropDownPicker
              open={open3}
              value={value3}
              items={items3}
              setOpen={setOpen3}
              setValue={setValue3}
              setItems={setItems3}
              style={styles.DropDownPicker}
              textStyle={styles.droptext}
              onChangeValue={(time) => setTime(time)}
            />
          </View>
          <View style={styles.drop1}>
            <Text style={styles.minititle}>Depart</Text>
            <DropDownPicker
              open={open4}
              value={value4}
              items={items4}
              setOpen={setOpen4}
              setValue={setValue4}
              setItems={setItems4}
              style={styles.DropDownPicker}
              textStyle={styles.droptext}
              onChangeValue={(depart) => setDepart(depart)}
            />
          </View>
        </View>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.navigate("Results", {
            search: "vol",
            adults,
            babies,
            teens,
            kids,
            from,
            to,
            date,
            classe,
            min,
            max,
            flex,
            time,
            airline,
            depart,
          })
        }
      >
        <Text style={styles.buttonText}> Confirmer </Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

export default Volplus;

const styles = StyleSheet.create({
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
    bottom: "4%",
  },
  text: {
    top: "10.2%",
    fontSize: 20,
    color: "#f58f5a",
  },
  options: {
    width: "90%",
    height: "60%",
    top: "22%",
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
  drop1: {
    marginTop: "40%",
    top: "32%",
    width: "90%",
    alignSelf: "center",
  },
  drop2: {
    top: "12%",
    marginTop: "40%",
    width: "90%",
    alignSelf: "center",
    position: "absolute",
  },
  button: {
    elevation: 8,
    backgroundColor: "#f58f5a",
    borderRadius: 10,
    paddingHorizontal: 12,
    top: "8%",
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
});
