import React, { Component } from 'react';
import { Container, Header, Content, Button, Text } from 'native-base';
import {Platform, StyleSheet, TextInput, AppRegistry,Linking} from 'react-native';

export default class Cpsemone extends Component {
  render() {
    return (
      <Container>
                      
        <Content>

           <Button block dark onPress={ ()=> Linking.openURL("https://drive.google.com/open?id=1dPy9aqMXk0NeCpml1qumogy8SbuiRCng")}>
            <Text>MOD 1</Text>
          </Button> 
          <Button block dark onPress={ ()=> Linking.openURL("https://drive.google.com/open?id=1vtvvMyNA0-sJzqrY7KzADBmj4YfU8g4f")}>
            <Text>MOD 2</Text>
          </Button> 
          <Button block dark onPress={ ()=> Linking.openURL("https://www.dyclassroom.com/c/c-pointers-and-strings")}>
            <Text>MOD 3</Text>
          </Button>
          <Button block dark onPress={ ()=> Linking.openURL("https://m.tutorialspoint.com/cprogramming/c_functions")}>
            <Text>MOD 4 FUNCTIONS</Text>
          </Button>  
          <Button block dark onPress={ ()=> Linking.openURL("https://www.cs.auckland.ac.nz/references/unix/digital/AQTLTBTE/DOCU_034.HTM")}>
            <Text>MOD 4 DERIVED TYPES</Text>
          </Button> 
          <Button block dark onPress={ ()=> Linking.openURL("https://drive.google.com/open?id=1MftQsQfdyoyn-1MLsJOTlN0fGPZjiDP9")}>
            <Text>MOD 5</Text>
          </Button> 
        </Content>
      </Container>
    );
  }
}