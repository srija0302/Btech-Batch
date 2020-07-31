import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity
} from "react-native";

export default class Page2 extends Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <View style={{ alignSelf: "center", padding: 50 }}>
        <View
          style={{
            alignSelf: "center",
            padding: 50,
            borderWidth: 5,
            borderColor: "black"
          }}
        >
          <Text>{this.props.x}</Text>
          <Text style={{ fontSize: 20, fontWeight: "500" }}>
            {this.props.y}
          </Text>
        </View>
      </View>
    );
  }
}
