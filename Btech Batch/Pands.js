import React, { Component } from 'react';
import { Container, Header, Content, Button, Text } from 'native-base';
import {Platform, StyleSheet, TextInput, AppRegistry,Linking} from 'react-native';

export default class Pands extends Component {
  render() {
    return (
      <Container>
                                     
        <Content>

         <Button block dark onPress={ ()=> Linking.openURL("https://drive.google.com/open?id=1ds2IdAAiGRi9TaLwOW3EQebE_ddt_w-9")}>
            <Text>MOD 1</Text>
          </Button>     
         <Button block dark onPress={ ()=> Linking.openURL("https://drive.google.com/open?id=1wmNF9suFWua9-FMXiVXwprWT7U4DAvK6")}>
            <Text>MOD 2</Text>
          </Button>     
      <Button block dark onPress={ ()=> Linking.openURL("https://drive.google.com/open?id=1QUCWGRH1JcU9R52t3sDNSDta8iLhlAdi")}>
            <Text>MOD 3</Text>
          </Button>     
      <Button block dark onPress={ ()=> Linking.openURL("https://drive.google.com/open?id=1ds2IdAAiGRi9TaLwOW3EQebE_ddt_w-9")}>
            <Text>MOD 4</Text>
          </Button>     
      <Button block dark onPress={ ()=> Linking.openURL("https://drive.google.com/open?id=1ykmNELAAT-4ZaqhONKOxM08TE_FHHBzk")}>
            <Text>MOD 5</Text>
          </Button>     
      
      
        </Content>
      </Container>
    );
  }
}