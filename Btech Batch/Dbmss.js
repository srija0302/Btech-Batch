import React, { Component } from 'react';
import { Container, Header, Content, Button, Text } from 'native-base';
import {Platform, StyleSheet, TextInput, AppRegistry,Linking} from 'react-native';

export default class Dbmss extends Component {
  render() {
    return (
      <Container>
                                     
        <Content>
         <Button block dark onPress={ ()=> Linking.openURL("https://drive.google.com/open?id=1ytPUiEXqTBZKh-sr9qxHlxf7wHEEo_Gr")}>
            <Text>MOD 1</Text>
          </Button>
          <Button block dark onPress={ ()=> Linking.openURL("https://drive.google.com/open?id=1JLBTgla1mk85DYXz-62wjY01nSPUuzYi")}>
            <Text>MOD 1</Text>
          </Button><Button block dark onPress={ ()=> Linking.openURL("https://drive.google.com/open?id=1DvGMsvoH0iSEZKgKSvN_LudqqsBki67A")}>
            <Text>MOD 2</Text>
          </Button><Button block dark onPress={ ()=> Linking.openURL("https://drive.google.com/open?id=1nVvLeHGizMZDxs0sLa6k3aiXUlgmSxRb")}>
            <Text>MOD 3</Text>
          </Button><Button block dark onPress={ ()=> Linking.openURL("https://drive.google.com/open?id=1jju8vGuA33tFBEQMw3aUzLb4c0wrZQr1")}>
            <Text>MOD 3</Text>
          </Button>
          <Button block dark onPress={ ()=> Linking.openURL("https://drive.google.com/open?id=1q37Nj-CiSVc5q5KcbUvpgTEydi51UWcz")}>
            <Text>MOD 4</Text>
          </Button>   
           <Button block dark onPress={ ()=> Linking.openURL("https://drive.google.com/open?id=1tLa2ZBq9LUP8awB6N4Be1P4DwUokuYlm")}>
            <Text>MOD 4</Text>
            </Button>       
           <Button block dark onPress={ ()=> Linking.openURL("https://drive.google.com/open?id=19eL7eZLMC6R5codgjaHB4AvbmoH0DzSn")}>
            <Text>MOD 5</Text>
          </Button>     
      
        </Content>
      </Container>
    );
  }
}