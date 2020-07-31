import React, { Component } from 'react';
import { Container, Header, Content, Button, Text } from 'native-base';
import {Platform, StyleSheet, TextInput, AppRegistry,Linking} from 'react-native';

export default class Opsys extends Component {
  render() {
    return (
      <Container>
                                     
        <Content>

     <Button block dark onPress={ ()=> Linking.openURL("https://drive.google.com/open?id=1nTJuv3XIuftFDwUoNNPaacGFoMP88QOA")}>
            <Text>MOD 1</Text>
          </Button>
             <Button block dark onPress={ ()=> Linking.openURL("https://drive.google.com/open?id=1Lr7MnFMXDikGyz9jwURMCPeSESF7B4pP")}>
            <Text>MOD 1</Text>
          </Button>
             <Button block dark onPress={ ()=> Linking.openURL("https://drive.google.com/open?id=1d8urgCrLfe1xvHOepJG2-reOraAsYQH8")}>
            <Text>MOD 2</Text>
          </Button>
             <Button block dark onPress={ ()=> Linking.openURL("https://drive.google.com/open?id=1Prj4w0q0-PVUDondL8Z58EfPHE7wGwXp")}>
            <Text>MOD 2</Text>
          </Button>
             <Button block dark onPress={ ()=> Linking.openURL("https://drive.google.com/open?id=17tO2gzPecBk74cVk-2k2ihf8BjSy0a9a")}>
            <Text>MOD 3</Text>
          </Button>
             <Button block dark onPress={ ()=> Linking.openURL("https://drive.google.com/open?id=1jPQA3rEf-Gyn7CgL88EHLyxnIQbfUYxE")}>
            <Text>MOD 4</Text>
          </Button>
             <Button block dark onPress={ ()=> Linking.openURL("https://drive.google.com/open?id=1lHImpQEyH_r2XR-3LDYbXr3GAOnJwUct")}>
            <Text>MOD 4</Text>
          </Button>
          <Button block dark onPress={ ()=> Linking.openURL("https://drive.google.com/open?id=1ymJTRff_pG7Z3ziWrOZBdyUwG3K_5Qju")}>
            <Text>MOD 5</Text>
          </Button>
        <Button block dark onPress={ ()=> Linking.openURL("https://drive.google.com/open?id=1kItIO2T0x5FKydcVV1dlgbq0WAdukfLU")}>
            <Text>MOD 5</Text>
          </Button>  
        
        
        </Content>
      </Container>
    );
  }
}