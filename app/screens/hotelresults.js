import { ImageBackground, StyleSheet, Text } from "react-native";

export default function HotelResults({ route }) {
  const search = route.params.search;
  const location = route.params.location;
  const adults = route.params.adults;
  const kids = route.params.kids;
  const teens = route.params.teens;
  const babies = route.params.babies;
  const date = route.params.date;
  const end = route.params.end;
  const rating = route.params.rating;
  const min = route.params.min;
  const max = route.params.max;
  const room = route.params.room;
  const roomNum = route.params.roomNum;
  const arrangement = route.params.arrangement;

  return (
    <ImageBackground
      source={require("../assets/notifbg.png")}
      style={styles.container}
    >
      <Text style={styles.title}>Résultats de recherche</Text>
      <Text style={styles.text}>
        recherche: <Text style={styles.info}>{search}</Text>
      </Text>
      <Text style={styles.text}>
        ou: <Text style={styles.info}>{location}</Text>
      </Text>

      <Text style={styles.text}>
        Adultes: <Text style={styles.info}>{adults}</Text> -Enfants:{" "}
        <Text style={styles.info}>{kids}</Text> -Jeunes:{" "}
        <Text style={styles.info}>{teens}</Text> -Bebes:
        <Text style={styles.info}>{babies}</Text>
      </Text>
      <Text style={styles.text}>
        date: <Text style={styles.info}>{date}</Text>
      </Text>
      <Text style={styles.text}>
        a: <Text style={styles.info}>{end}</Text>
      </Text>
      <Text style={styles.text}>
        rating: <Text style={styles.info}>{rating}</Text>
      </Text>
      <Text style={styles.text}>
        min: <Text style={styles.info}>{min}</Text>
      </Text>
      <Text style={styles.text}>
        max: <Text style={styles.info}>{max}</Text>
      </Text>
      <Text style={styles.text}>
        type de chambre: <Text style={styles.info}>{room}</Text>
      </Text>
      <Text style={styles.text}>
        nombre des chambres : <Text style={styles.info}>{roomNum}</Text>
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
  title: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    color: "#f58f5a",
    marginBottom: "5%",
  },
  text: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
    color: "#36446d",
    marginVertical: "1%",
  },
  info: {
    color: "#172d51",
  },
});
