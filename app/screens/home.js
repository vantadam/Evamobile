import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import "react-native-gesture-handler";
import { useIsFocused } from "@react-navigation/native";
import { authentication } from "../../firebase/firebase-config";

export default function Home({ navigation }) {
  const [user, setUser] = useState("");
  const isFocused = useIsFocused();

  useEffect(() => {
    setUser(authentication.currentUser.displayName);
  }, [isFocused]);

  return (
    <View style={styles.bg}>
      <View style={styles.head}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Notif")}
          style={styles.mail}
        >
          <Ionicons name="notifications" size={24} color="#f58f5a" />
        </TouchableOpacity>
        <Text style={styles.welcome}> bienvenue! </Text>
        <Text style={styles.email}>{user} </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("User")}
          style={styles.user}
        >
          <AntDesign name="user" size={25} color="#f58f5a" />
        </TouchableOpacity>
      </View>
      <View style={styles.fixToIcon}>
        <View style={styles.column}>
          <View style={styles.row}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Volsearch")}
              style={styles.search}
            >
              <View style={styles.icon}>
                <FontAwesome name="plane" size={25} color="#36446d" />
              </View>
            </TouchableOpacity>

            <Text style={styles.text}>Vol</Text>
          </View>
          <View style={styles.row}>
            <TouchableOpacity style={styles.search}>
              <View style={styles.icon}>
                <FontAwesome name="train" size={25} color="#36446d" />
              </View>
            </TouchableOpacity>
            <Text style={styles.text}>Train</Text>
          </View>
          <View style={styles.row}>
            <TouchableOpacity style={styles.search}>
              <View style={styles.icon}>
                <FontAwesome name="ship" size={25} color="#36446d" />
              </View>
            </TouchableOpacity>
            <Text style={styles.text}>Bateaux</Text>
          </View>
        </View>

        <View style={styles.column}>
          <View style={styles.row}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Hotelsearch")}
              style={styles.search}
            >
              <View style={styles.icon}>
                <FontAwesome name="hotel" size={25} color="#36446d" />
              </View>
            </TouchableOpacity>
            <Text style={styles.text}>Hotel</Text>
          </View>
          <View style={styles.row}>
            <TouchableOpacity style={styles.search}>
              <View style={styles.icon}>
                <FontAwesome name="bus" size={25} color="#36446d" />
              </View>
            </TouchableOpacity>
            <Text style={styles.text}>Transferts</Text>
          </View>
          <View style={styles.row}>
            <TouchableOpacity style={styles.search}>
              <View style={styles.icon}>
                <FontAwesome5 name="car" size={25} color="#36446d" />
              </View>
            </TouchableOpacity>
            <Text style={styles.text}>Location voiture</Text>
          </View>
        </View>

        <View style={styles.column}>
          <View style={styles.row}>
            <TouchableOpacity
              style={styles.search}
              onPress={() => navigation.navigate("Volhotel")}
            >
              <View style={styles.icon}>
                <MaterialIcons name="tour" size={25} color="#36446d" />
              </View>
            </TouchableOpacity>
            <Text style={styles.text}>Vol+Hotel</Text>
          </View>
          <View style={styles.row}>
            <TouchableOpacity style={styles.search}>
              <View style={styles.icon}>
                <MaterialCommunityIcons
                  name="bus-marker"
                  size={29}
                  color="#36446d"
                />
              </View>
            </TouchableOpacity>
            <Text style={styles.text}>Excursions</Text>
          </View>
          <View style={styles.row}>
            <TouchableOpacity style={styles.search}>
              <View style={styles.icon}>
                <Fontisto name="yacht" size={25} color="#36446d" />
              </View>
            </TouchableOpacity>
            <Text style={styles.text}>Croisières</Text>
          </View>
        </View>
      </View>
      <View style={styles.offersView}>
        <Text style={{ fontSize: 20, bottom: 10, left: 5, color: "white" }}>
          Nous Offres
        </Text>
        <ScrollView horizontal style={styles.offers}>
          <Image
            source={require("../assets/deal.jpg")}
            style={{
              width: 200,
              height: 200,
              marginRight: 25,
              top: 30,

              borderRadius: 20,
            }}
          />
          <Image
            source={require("../assets/deal1.jpg")}
            style={{
              width: 200,
              height: 200,
              marginRight: 25,
              top: 30,

              borderRadius: 20,
            }}
          />
          <Image
            source={require("../assets/deal2.jpg")}
            style={{
              width: 200,
              height: 200,
              marginRight: 25,
              top: 30,
              marginRight: 25,
              borderRadius: 20,
            }}
          />
        </ScrollView>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Discover")}
      >
        <Text style={styles.buttonText}>Decouvrir</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  head: {
    top: "10%",
    height: "6%",
    flexDirection: "row",
    width: "100%",

    justifyContent: "center",
  },
  offers: {
    width: "85%",
    height: 250,
    position: "absolute",
    alignSelf: "center",
  },
  offersView: {
    top: "14%",
    alignSelf: "center",
    width: "95%",
    height: 250,
  },
  email: {
    fontSize: 15,
    fontWeight: "bold",
    alignSelf: "flex-start",
    color: "white",
    marginRight: "20%",
  },
  welcome: {
    fontSize: 15,
    fontWeight: "bold",
    color: "white",
    marginLeft: "20%",
  },

  mail: {
    color: "white",
    margin: 1,

    fontWeight: "bold",
    top: "1%",
  },
  user: {
    color: "white",
    margin: 1,

    fontWeight: "bold",
    top: "1%",
  },
  fixToIcon: {
    top: "13%",
    height: "35%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: "10%",
  },
  column: {
    height: "100%",
    width: "29%",
  },

  row: {
    width: "100%",
    aspectRatio: 1,
    marginBottom: "10%",
  },
  search: {
    width: "75%",
    aspectRatio: 1,
    backgroundColor: "white",
    borderRadius: 100,
    alignSelf: "center",
  },
  icon: {
    alignSelf: "center",
    top: "30%",
  },

  bg: {
    backgroundColor: "#36446d",
    flex: 1,
    alignContent: "center",
  },

  button: {
    elevation: 8,
    backgroundColor: "#f58f5a",
    borderRadius: 10,
    marginHorizontal: "15%",
    top: "16%",
    paddingVertical: 10,
  },
  buttonText: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  text: {
    fontSize: 15,
    fontWeight: "bold",
    color: "white",
    alignSelf: "center",
    textAlign: "center",
  },
});
