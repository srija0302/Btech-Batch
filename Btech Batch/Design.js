import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity
} from "react-native";
import Page2 from "./Page2.js";
export default class Page1 extends Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <View style={styles.container}>
        <Page2
          y="reader will be distracted by the readable content of a page when looking at it"
          x="some things in here"
        />

        <Page2
          y="reader will be distracted by the readable content of a page when looking at it"
          x="some things in here"
        />

        <Page2
          y="reader will be distracted byge when looking at it"
          x="some things in here"
        />
        <Page2
          y="reader will be distracted by the readable content of a page when looking at it"
          x="some things in here"
        />

        <Page2
          y="reader will be distracted byge when looking at it"
          x="some things in here"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  textStlye: {
    alignSelf: "center"
  }
});
