import React, { Component } from 'react';
import { Container, Header, Content, Button, Text } from 'native-base';
import {Platform, StyleSheet, TextInput, AppRegistry,Linking} from 'react-native';

export default class Sl extends Component {
  render() {
    return (
      <Container>
                                     
        <Content>

           <Button block dark onPress={ ()=> Linking.openURL("https://drive.google.com/open?id=14yi0QHoCNKNVSQ7k7biMMUx5gD672nGQ")}>
            <Text>MOD 1</Text>
          </Button>
         <Button block dark onPress={ ()=> Linking.openURL("https://drive.google.com/open?id=1zBm8fduzqqvWTW7g559fEPGwwLFG0wvX")}>
            <Text>MOD 2</Text>
          </Button>
          <Button block dark onPress={ ()=> Linking.openURL("https://drive.google.com/open?id=1mcdtHq8etFodhOuO2UZVqEv3wIZI7CnC")}>
            <Text>MOD 3</Text>
          </Button>

          <Button block dark onPress={ ()=> Linking.openURL("https://drive.google.com/open?id=17VHYHOqcqfb2EPRJ5UzTkCOYLRGtBVZG")}>
            <Text>MOD 4</Text>
          </Button>

          <Button block dark onPress={ ()=> Linking.openURL("https://drive.google.com/open?id=1LnaXKR6C_8m9j-KYdkOK4uZvcmknpTea")}>
            <Text>MOD 5</Text>
          </Button>
          
          
      
        </Content>
      </Container>
    );
  }
}