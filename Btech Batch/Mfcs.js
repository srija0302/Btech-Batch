import React, { Component } from 'react';
import { Container, Header, Content, Button, Text } from 'native-base';
import {Platform, StyleSheet, TextInput, AppRegistry,Linking} from 'react-native';

export default class Mfcs extends Component {
  render() {
    return (
      <Container>
                                     
        <Content>

           <Button block dark onPress={ ()=> Linking.openURL("https://drive.google.com/open?id=1KWBjUx0KqjayxvUIBaCiTRu7WfOAiXdt")}>
            <Text>MOD 1</Text>
          </Button>
      
           <Button block dark onPress={ ()=> Linking.openURL("https://drive.google.com/open?id=11pN4VZg0NB6Nb9PDWR7pnvtf9ydkLfG4")}>
            <Text>MOD 2</Text>
          </Button>

           <Button block dark onPress={ ()=> Linking.openURL("https://drive.google.com/open?id=1nYRQw2VXoFM2SXISqawr-rzNBdqF_RpF")}>
            <Text>MOD 3</Text>
          </Button>

           <Button block dark onPress={ ()=> Linking.openURL("https://drive.google.com/open?id=15cKelojPh0MfKKYhyeW7a04j5dSQqSZS")}>
            <Text>MOD 4</Text>
          </Button>

           <Button block dark onPress={ ()=> Linking.openURL("https://drive.google.com/open?id=1Ugi_KynXnZ4ZREtno4KxBYgHqMvKEh-l")}>
            <Text>MOD 5</Text>
          </Button>
          
        </Content>
      </Container>
    );
  }
}