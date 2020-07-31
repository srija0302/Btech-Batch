import React, { Component } from 'react';
import { AppRegistry, View, Image } from 'react-native';

export default class DisplayAnImage extends Component {
  render() {
    return (
      <View>
        <Image
          source={require('1559031595401.png')}
        />
       
      </View>
    );
  }
}
