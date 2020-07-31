import React, { Component } from 'react';
import { Container, Header, Content, Button, Text } from 'native-base';
import {Platform, StyleSheet, TextInput, AppRegistry,Linking} from 'react-native';

export default class Physemone extends Component {
  render() {
    return (
      <Container>
       
        <Content>

           <Button block dark onPress={ ()=> Linking.openURL("https://drive.google.com/open?id=1i47hkT-9xpmyhvbviTuvk2rvA07TLuym") }   >
            <Text>MOD 1 </Text>
          </Button>
       <Button block dark onPress={ ()=> Linking.openURL("https://drive.google.com/open?id=1uLfwtFzk_YjfgxBGQC0gKV7lr-coXgo5") }   >
            <Text>MOD 2 </Text>
          </Button>
          <Button block dark onPress={ ()=> Linking.openURL("https://drive.google.com/open?id=1PujVJGUnoStz5pl4v2xAtselxWlk_bPh") }   >
            <Text>MOD 3 </Text>
          </Button>
          <Button block dark onPress={ ()=> Linking.openURL("https://drive.google.com/open?id=1z1EP9KGMhuYez07D3KpHs7Indl2u9mKG") }   >
            <Text>MOD 4</Text>
          </Button>
          <Button block dark onPress={ ()=> Linking.openURL("https://drive.google.com/open?id=17gizJ3camGB5AXBzG2d6gNUcTpKohxnE") }   >
            <Text>MOD 4</Text>
          </Button>
          <Button block dark onPress={ ()=> Linking.openURL("https://drive.google.com/open?id=11UKR4JtAS9VGWBpC-g6apy1x6gpacChT") }   >
            <Text>MOD 5 </Text>
          </Button>
          
          
      
        </Content>
      </Container>
    );
  }
}