import {
  ImageBackground,
  StyleSheet,
  TextInput,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Keyboard,
} from "react-native";
import React from "react";
import { FontAwesome, Entypo } from "@expo/vector-icons";
import { useState, useEffect } from "react";
import "react-native-gesture-handler";
import * as Location from "expo-location";
import { closestMatch } from "closest-match";

import { cityList } from "../assets/cities";
import { cityCodes } from "../assets/citycodes";

export default function List(
  listState,
  listStyle,
  source,
  choicestyle1,
  choicestyle2,
  listIndex,
  keys
) {
  if (listState == false || keys == closestMatch(keys, cityList)) {
    return null;
  } else {
    return (
      <View style={listStyle}>
        <FlatList
          data={source}
          renderItem={({ item, index }) => {
            return (
              <View>
                <View style={{ top: "2%", marginTop: "1%" }}>
                  <Text style={{ fontSize: 20, left: "10%", color: "white" }}>
                    {item}
                  </Text>
                </View>
              </View>
            );
          }}
          keyExtractor={(item) => item}
        />
        <TouchableOpacity
          onPress={() => choice1(keys, listIndex)}
          style={choicestyle1}
        />
        <TouchableOpacity
          onPress={() => {
            choice2(keys);
          }}
          style={choicestyle2}
        />
      </View>
    );
  }
}
