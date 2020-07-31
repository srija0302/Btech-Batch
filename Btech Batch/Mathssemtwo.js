import React, { Component } from 'react';
import { Container, Header, Content, Button, Text } from 'native-base';
import {Platform, StyleSheet, TextInput, AppRegistry,Linking} from 'react-native';

export default class Mathssemtwo extends Component {
  render() {
    return (
      <Container>
                                     
        <Content>
        <Button block dark onPress={ ()=> Linking.openURL("https://drive.google.com/file/d/1mLG2lHqxHvqtY69kFOc-yA0g5_LUjYYl/view?usp=sharing") }  >
            <Text>MOD 1</Text>
          </Button>
        <Button block dark onPress={ ()=> Linking.openURL("https://drive.google.com/open?id=14_SzP7OS5ytG4UTDpp2AElICp93fSmlC") }  >
            <Text>MOD 2</Text>
          </Button>
           <Button block dark onPress={ ()=> Linking.openURL("https://drive.google.com/open?id=1lpR4LTbdi-MNbSxyEn27KnNnDbdOnvXh") }  >
            <Text>MOD 3</Text>
          </Button>
           <Button block dark onPress={ ()=> Linking.openURL("https://drive.google.com/open?id=1MaB-Hnut_-Mw_CMcA5bicyRygoiQK5dk") }  >
            <Text>MOD 4</Text>
          </Button>
           <Button block dark onPress={ ()=> Linking.openURL("https://drive.google.com/open?id=1q2cEvDmSTtzn5B1CeAlg2XNqRlMqCl0Z") }  >
            <Text>MOD 5</Text>
          </Button>          
      
        </Content>
      </Container>
    );
  }
}