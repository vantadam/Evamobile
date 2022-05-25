import { ImageBackground, StyleSheet, Text } from "react-native";

export default function Results({ route }) {
  const search = route.params.search;
  const from = route.params.from;
  const to = route.params.to;
  const adults = route.params.adults;
  const kids = route.params.kids;
  const teens = route.params.teens;
  const babies = route.params.babies;
  const date = route.params.date;
  const classe = route.params.classe;
  const min = route.params.min;
  const max = route.params.max;
  const flex = route.params.flex;
  const time = route.params.time;
  const airline = route.params.airline;
  const depart = route.params.depart;
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
        d'ou: <Text style={styles.info}>{from}</Text>
      </Text>
      <Text style={styles.text}>
        où aller: <Text style={styles.info}>{to}</Text>
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
        classe: <Text style={styles.info}>{classe}</Text>
      </Text>
      <Text style={styles.text}>
        min: <Text style={styles.info}>{min}</Text>
      </Text>
      <Text style={styles.text}>
        max: <Text style={styles.info}>{max}</Text>
      </Text>
      <Text style={styles.text}>
        flexibilité: <Text style={styles.info}>{flex}</Text>
      </Text>
      <Text style={styles.text}>
        Horaire: <Text style={styles.info}>{time}</Text>
      </Text>

      <Text style={styles.text}>
        compagnie: <Text style={styles.info}>{airline}</Text>
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
