import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";

import { TextInput } from "react-native-gesture-handler";

export function Passengers({ navigation, route }) {
  const adults = route.params.adults;
  const teens = route.params.teens;
  const babies = route.params.babies;
  const kids = route.params.kids;
  const passnum = adults + teens + babies + kids;
  let passengers = [];
  var i = 0;
  var a = adults;
  var t = teens;
  var b = babies;
  var k = kids;

  do {
    while (a > 0) {
      passengers[i] = {
        id: i + 1,
        age: "Adulte",
        fname: "",
        lname: "",
        bdate: "",
      };
      a--;
      i++;
    }

    while (t > 0) {
      passengers[i] = {
        id: i + 1,
        age: "Jeune",
        fname: "",
        lname: "",
        bdate: "",
      };
      t--;
      i++;
    }

    while (k > 0) {
      passengers[i] = {
        id: i + 1,
        age: "Enfant",
        fname: "",
        lname: "",
        bdate: "",
      };
      k--;
      i++;
    }
    while (b > 0) {
      passengers[i] = {
        id: i + 1,
        age: "Bebe",
        fname: "",
        lname: "",
        bdate: "",
      };
      b--;
      i++;
    }
  } while (i + 1 < passnum);

  function Book() {
    navigation.navigate("Carte");
  }

  function setfname(passager, fname) {
    passager.fname = fname;
  }
  function setlname(passager, lname) {
    passager.lname = lname;
  }
  function setbdate(passager, bdate) {
    passager.bdate = bdate;
  }
  const LastItem = ({ age, id, fname, lname, bdate }) => (
    <View style={styles.item}>
      <View style={styles.row}>
        <Text style={styles.pass}>Passager {id}</Text>
        <Text style={styles.age}>{age}</Text>
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Nom"
          placeholderTextColor="#D3D3D3"
          onChangeText={(fname) => setfname(passengers[id - 1], fname)}
          autoCapitalize="none"
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Prenom"
          placeholderTextColor="#D3D3D3"
          onChangeText={(lname) => setlname(passengers[id - 1], lname)}
          autoCapitalize="none"
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Date de naissance"
          placeholderTextColor="#D3D3D3"
          onChangeText={(bdate) => setbdate(passengers[id - 1], bdate)}
          autoCapitalize="none"
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={Book}>
        <Text style={styles.buttonText}>Confirmer</Text>
      </TouchableOpacity>
    </View>
  );
  const Item = ({ age, id, fname, lname, bdate }) => (
    <View style={styles.item}>
      <View style={styles.row}>
        <Text style={styles.pass}>Passager {id}</Text>
        <Text style={styles.age}>{age}</Text>
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Nom"
          placeholderTextColor="#D3D3D3"
          onChangeText={(fname) => setfname(passengers[id - 1], fname)}
          autoCapitalize="none"
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Prenom"
          placeholderTextColor="#D3D3D3"
          onChangeText={(lname) => setlname(passengers[id - 1], lname)}
          autoCapitalize="none"
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Date de naissance"
          placeholderTextColor="#D3D3D3"
          onChangeText={(bdate) => setbdate(passengers[id - 1], bdate)}
          autoCapitalize="none"
        />
      </View>
    </View>
  );
  function renderItem({ item }) {
    if (item.id < passnum && item.age != "Bebe") {
      return <Item age={item.age} id={item.id} name={item.name} />;
    } else {
      return <LastItem age={item.age} id={item.id} name={item.name} />;
    }
  }
  return (
    <ImageBackground
      source={require("../assets/notifbg.png")}
      style={styles.page}
    >
      <Text style={styles.title}>Information passagers</Text>
      <View style={{ height: "77%" }}>
        <FlatList
          data={passengers}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          style={{ top: "20%", marginBottom: "8%" }}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  title: {
    color: "#36446d",
    margin: 1,
    fontSize: 25,
    alignSelf: "center",
    top: "10%",
    marginHorizontal: 5,
    fontWeight: "bold",
    alignContent: "center",
  },
  page: {
    flex: 1,
  },
  row: {
    flexDirection: "row",
    borderBottomWidth: 2,
    borderBottomColor: "#a4a4a4",
  },

  pass: {
    fontSize: 20,
    fontWeight: "bold",
    marginRight: "52%",
    left: "60%",
  },
  age: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#a4a4a4",
  },
  inputView: {
    backgroundColor: "#fff",
    borderRadius: 20,
    alignSelf: "center",
    width: "80%",
    height: 50,
    marginTop: "10%",
    alignItems: "center",
  },

  TextInput: {
    textAlign: "center",
    width: "100%",
    fontSize: 15,
    height: 50,
    flex: 2,
    padding: 8,
  },
  item: { paddingBottom: "15%" },
  calendar: {
    marginTop: "10%",
    borderRadius: 20,
    padding: 10,
    width: "80%",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    top: "2%",
  },
  button: {
    top: "16%",
    marginHorizontal: "25%",
    elevation: 8,
    backgroundColor: "#f58f5a",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 5,
    bottom: 30,
  },
  buttonText: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
  },
});
