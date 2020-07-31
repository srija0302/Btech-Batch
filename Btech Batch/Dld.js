import React, { Component } from 'react';
import { Container, Header, Content, Button, Text } from 'native-base';
import {Platform, StyleSheet, TextInput, AppRegistry,Linking} from 'react-native';

export default class Dld extends Component {
  render() {
    return (
      <Container>
                                     
        <Content>

            <Button block dark onPress={ ()=> Linking.openURL("https://drive.google.com/open?id=1DsSD_McHfQHq1hCZjrlxQ4WjD5SlTmNi")}>
            <Text>MOD 1</Text>
          </Button> 
          <Button block dark onPress={ ()=> Linking.openURL("https://drive.google.com/open?id=1EAnd7LalMFH-pa5Ufu_aUwxmT8PoBMlS")}>
            <Text>MOD 2</Text>
          </Button> 
          <Button block dark onPress={ ()=> Linking.openURL("https://drive.google.com/open?id=1ptYhrUFrxs2UwHi9LWDZvFxdcAB5NHbW")}>
            <Text>MOD 3</Text>
          </Button> 
          <Button block dark onPress={ ()=> Linking.openURL("https://www.youtube.com/playlist?list=PLBlnK6fEyqRjMH3mWf6kwqiTbT798eAOm")}>
            <Text>MOD 4</Text>
          </Button> 
          <Button block dark onPress={ ()=> Linking.openURL("https://drive.google.com/open?id=1LAmqQeidZDpF5N60R3GNudogl4KNNeu1")}>
            <Text>MOD 5</Text>
          </Button> 
      
        </Content>
      </Container>
    );
  }
}