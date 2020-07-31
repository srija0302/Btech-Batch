import React, { Component } from 'react';
import { Container, Header, Content, Button, Text } from 'native-base';
import {Platform, StyleSheet, TextInput, AppRegistry,Linking} from 'react-native';

export default class Daa extends Component {
  render() {
    return (
      <Container>
                                     
        <Content>

           <Button block dark onPress={ ()=> Linking.openURL("https://drive.google.com/open?id=1zQUxLWsfen87LoKQN_PIw_B2EmDpyaLf")}>
            <Text>MOD 1</Text>
          </Button>   
          <Button block dark onPress={ ()=> Linking.openURL("https://drive.google.com/open?id=1aC5cYnZP3FyrJvt2GFGhowlfDZDIhZB1")}>
            <Text>MOD 2</Text>
          </Button>   
          <Button block dark onPress={ ()=> Linking.openURL("https://drive.google.com/open?id=1QC1i8pf13-AZoY7z2DflEoyNIW5zBBS1")}>
            <Text>MOD 2</Text>
          </Button>   
          <Button block dark onPress={ ()=> Linking.openURL("https://drive.google.com/open?id=1VZAdCVM3208RuqE5ZdTHls7nr8akmjPT")}>
            <Text>MOD 3</Text>
          </Button>   
          <Button block dark onPress={ ()=> Linking.openURL("https://drive.google.com/open?id=1E7HIM8KrazbRsaE1e1nOS-hf3gvyqgDR")}>
            <Text>MOD 4</Text>
          </Button>   
          <Button block dark onPress={ ()=> Linking.openURL("https://drive.google.com/open?id=1BtURmi5Z2Hoa1QCtNxOLcTZ90zLynpZP")}>
            <Text>MOD 4</Text>
          </Button>   
          <Button block dark onPress={ ()=> Linking.openURL("https://drive.google.com/open?id=1GNCIjVlBQ-xCo4s_WySJzT1jC6YwvT5O")}>
            <Text>MOD 5</Text>
          </Button>   
          
      
        </Content>
      </Container>
    );
  }
}