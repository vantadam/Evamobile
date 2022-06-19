import { async } from "@firebase/util";

import React, { Component, useState } from "react";
import {
  FlatList,
  ImageBackground,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import LottieView from "lottie-react-native";

export default class VolResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSource: [],
    };
  }

  componentDidMount() {
    const date = this.props.route.params.date;
    const cabinpref = this.props.route.params.classe;
    const passengers = this.props.route.params.passengers;
    fetch("http://217.182.175.100:8383/services/evaprovider/api/vols", {
      method: "post",
      headers: new Headers({
        Authorization:
          "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGgiOiJST0xFX0FETUlOLFJPTEVfVVNFUiIsImV4cCI6MTY1NDg3MTE2Mn0.H0U9VsqI-0-7fOvSoJLxMGuKb-iurPAwbVBgz09e0O654CUWG3SzLBGILTmF_HHV11OlYVbu4EWxLptMkspNBw",
        "Content-Type": "application/json",
      }),
      body: JSON.stringify({
        directFlightsOnly: true,
        originDestinationInformation: [
          {
            id: "1",
            destinationLocation: {
              codeContext: "PAR",
              locationCode: "PAR",
              value: "PAR",
            },
            originLocation: {
              codeContext: "TUN",
              locationCode: "TUN",
            },
            departureDateTime: {
              value: date,
            },
          },
        ],
        primaryLangID: "GB",
        travelPreferences: {
          cabinPref: cabinpref,
          end: null,
          start: null,
        },
        travelerInfoSummary: {
          airTravelerAvail: [
            {
              passengerTypeQuantity: passengers,
            },
          ],
          priceRequestInformation: {},
        },
        tripType: "ONE_WAY",
        codeProvider: "AMADEUS",
      }),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          dataSource:
            responseJson.originDestinationInformation[0]
              .originDestinationOptions.originDestinationOption,
        });
        console.log(response);
      });
  }

  _renderItem = ({ item, index }) => {
    if (item != undefined && item != []) {
      var flight = item.flightSegment;
      if (flight[0] != undefined) {
        var airline = flight[0].marketingAirline.code;
        switch (airline) {
          case "TO":
            var company = "Transavia";
            break;
          case "BJ":
            var company = "Nouvelair";
            break;
          case "TU":
            var company = "Tunisair";
            break;
          case "AF":
            var company = "Air France";
            break;
        }
        return (
          <TouchableOpacity style={styles.result}>
            <View style={styles.line1}>
              <Text style={styles.amount}>
                {item.pricingOverview.fareInfo.totalFare.amount} TND
              </Text>
              <Text style={styles.airlines}>{company}</Text>
            </View>
            <View style={styles.line2}>
              <Text style={styles.airports}>
                {flight[0].departureAirport.locationCode} -{" "}
                {flight[0].arrivalAirport.locationCode}
              </Text>
              <Text style={styles.num}>N°Vol</Text>
            </View>
            <View style={styles.line3}>
              <Text style={styles.time}>
                {flight[0].departureDateTime.substr(
                  flight[0].departureDateTime.indexOf("T") + 1,
                  5
                )}{" "}
                -
                {flight[0].arrivalDateTime.substr(
                  flight[0].departureDateTime.indexOf("T") + 1,
                  5
                )}
              </Text>
              <Text style={styles.flightnmbr}>26545</Text>
            </View>
          </TouchableOpacity>
        );
      }
    }
  };

  render() {
    let { container } = styles;
    let { dataSource, isLoading } = this.state;
    if (isLoading) {
      return (
        <ImageBackground
          source={require("../assets/notifbg.png")}
          style={styles.container}
        >
          <LottieView
            style={styles.lottie}
            source={require("../assets/77218-search-imm.json")}
            autoPlay
            loop
          />
        </ImageBackground>
      );
    } else {
      return (
        <ImageBackground
          source={require("../assets/notifbg.png")}
          style={styles.container}
        >
          <Text style={styles.title}>RESULTATS</Text>

          <FlatList
            style={styles.flat}
            data={dataSource}
            renderItem={this._renderItem}
            keyExtractor={(item, index) => index.toString()}
          />
        </ImageBackground>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  flat: {
    marginTop: "25%",
    marginBottom: "15%",

    width: "95%",
  },
  result: {
    paddingBottom: "6%",

    borderBottomColor: "#a4a4a4",
    borderBottomWidth: 2,
    marginHorizontal: "1%",
    marginVertical: "5%",

    top: "5%",
  },
  amount: {
    top: "0.5%",
    fontSize: 25,
    left: "20%",
    fontWeight: "bold",
  },
  loading: {
    fontSize: 20,
    color: "grey",
    textAlign: "center",
    alignSelf: "center",
    fontWeight: "bold",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    top: "10%",
    color: "#f58f5a",
  },
  airports: {
    marginLeft: "3%",
    fontSize: 22,
    color: "#5a5a5a",
    fontWeight: "bold",
  },
  time: {
    marginLeft: "2%",
    fontSize: 20,
    color: "#5a5a5a",
    fontWeight: "bold",
  },
  airlines: {
    color: "#a4a4a4",
    position: "absolute",
    right: "5%",
    fontSize: 27,
    fontWeight: "bold",
  },
  line1: {
    flexDirection: "row",
    paddingBottom: "5%",
  },
  line2: {
    flexDirection: "row",
    paddingBottom: "1%",
  },
  line3: {
    flexDirection: "row",
  },
  flightnmbr: {
    fontSize: 20,
    position: "absolute",
    right: "6%",
    color: "#5a5a5a",
    fontWeight: "bold",
  },
  num: {
    position: "absolute",
    right: "5%",
    fontSize: 20,
    color: "#5a5a5a",
    fontWeight: "bold",
  },
});
