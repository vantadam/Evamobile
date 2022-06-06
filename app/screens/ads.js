import React, { useState } from "react";
import { ImageBackground, StyleSheet, Image, View, Text } from "react-native";

import "react-native-gesture-handler";

export default function Ads({ route }) {
  const headline = route.params.headline;
  const [image, setImage] = useState(
    "https://s30876.pcdn.co/wp-content/uploads/Japan.jpg.optimal.jpg"
  );

  /* if (headline == "Decouvrez Le Japan") { 
  setImage("https://s30876.pcdn.co/wp-content/uploads/Japan.jpg.optimal.jpg");
   } else if (headline == "Best Deals Mahdia") {
    setImage(
      "https://lepetitjournal.com/sites/default/files/styles/main_article/public/2020-07/MAHDIA.jpg?itok=EFJrY-Ml"
    );
  } else {
    setImage("https://fokblastek.com/wp-content/uploads/2018/07/evatour.jpg");
  } */

  return (
    <ImageBackground
      source={require("../assets/notifbg.png")}
      style={styles.container}
    >
      <View style={styles.stroke}>
        <View style={styles.image}>
          <Image
            style={styles.ad}
            source={{
              uri: image,
            }}
          />
        </View>
      </View>
      <Text style={styles.title}>{headline}</Text>
      <Text style={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum
      </Text>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  stroke: {
    backgroundColor: "#36446d",
    width: "75%",
    aspectRatio: 1,
    position: "absolute",
    top: "12%",
    borderRadius: 20,
  },
  image: {
    width: "95%",
    aspectRatio: 1,
    position: "absolute",
    alignSelf: "center",
    top: "2.5%",
  },
  ad: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },

  title: {
    color: "#f58f5a",
    top: "55%",
    left: "15%",
    position: "absolute",
    fontSize: 30,
    fontWeight: "bold",
  },
  text: {
    alignSelf: "center",
    height: "25%",
    width: "75%",
    position: "absolute",
    top: "65%",
  },
});
