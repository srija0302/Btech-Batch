import React, { Component } from 'react';
import { Container, Header, Content, Button, Text } from 'native-base';
import {Platform, StyleSheet, TextInput, AppRegistry,Linking} from 'react-native';

export default class Ac extends Component {
  render() {
    return (
      <Container>
                                     
        <Content>
   <Button block dark onPress={ ()=> Linking.openURL("https://drive.google.com/open?id=1_CCqQ3p_7OxbpPaHZyU1dnZXvhbPZ05Q")}>
            <Text>MOD 1</Text>
          </Button>   
           <Button block dark onPress={ ()=> Linking.openURL("https://drive.google.com/open?id=1KRZTizbqH1nb5WYYL34vXklnJApo32S_")}>
            <Text>MOD 2</Text>
          </Button>   
          
           <Button block dark onPress={ ()=> Linking.openURL("https://drive.google.com/open?id=1qIMN9ZBfYP7N4ByU-rMkLVNKHb3AYf52")}>
            <Text>MOD 3</Text>
          </Button>   
          
           <Button block dark onPress={ ()=> Linking.openURL("https://drive.google.com/open?id=1_Lavqq869wiphdL1m2DfPxqvb-bQ5LCH")}>
            <Text>MOD 4</Text>
          </Button>   
          
            
          
           <Button block dark onPress={ ()=> Linking.openURL("https://drive.google.com/open?id=1-pemMbMCqqCPyyzWOVZcZ27CY_E1am0j")}>
            <Text>MOD 5</Text>
          </Button>   
          
          
      
        </Content>
      </Container>
    );
  }
}