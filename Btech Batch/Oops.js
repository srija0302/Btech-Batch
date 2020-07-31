import React, { Component } from 'react';
import { Container, Header, Content, Button, Text } from 'native-base';
import {Platform, StyleSheet, TextInput, AppRegistry,Linking} from 'react-native';

export default class Oops extends Component {
  render() {
    return (
      <Container>
                                     
        <Content>

           <Button block dark onPress={ ()=> Linking.openURL("https://drive.google.com/open?id=1jTAq9BY2UVGo-fvbymtoyqKNgpql7tdx")}>
            <Text>MOD 1</Text>
          </Button> 

           <Button block dark onPress={ ()=> Linking.openURL("https://drive.google.com/open?id=1MnVe0viVwfWkTxHqDP_i7vCsKAje0czl")}>
            <Text>MOD 2</Text>
          </Button> 
 <Button block dark onPress={ ()=> Linking.openURL("https://drive.google.com/open?id=1fwLnHXWHTlB9M7oVe-pgDCKJed7WVbQ3")}>
            <Text>MOD 3</Text>
          </Button> 
 <Button block dark onPress={ ()=> Linking.openURL("https://drive.google.com/open?id=1HnwZ8SlgzK9QDix-5PoSRHOiOpCZFCpw")}>
            <Text>MOD 4</Text>
          </Button> 
 <Button block dark onPress={ ()=> Linking.openURL("https://drive.google.com/open?id=1-jtxiw-AmRm3g1MmurQ8DTEn8a6TXbbw")}>
            <Text>MOD 5</Text>
          </Button> 

      
        </Content>
      </Container>
    );
  }
}