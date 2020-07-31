import React, { Component } from 'react';
import { Container, Header, Content, Button, Text } from 'native-base';
import {Platform, StyleSheet, TextInput, AppRegistry,Linking} from 'react-native';

export default class Wt extends Component {
  render() {
    return (
      <Container>
                                     
        <Content>

        <Button block dark onPress={ ()=> Linking.openURL("https://drive.google.com/open?id=1ITXAutoGrG0EFHJlMq7Rt7NB9GfFnz89")}>
            <Text>MOD 1</Text>
          </Button>     
      
       <Button block dark onPress={ ()=> Linking.openURL("https://drive.google.com/open?id=1_sSMpVheOWu1AV-DJ6TAuVGI4kx5J3Uf")}>
            <Text>MOD 2</Text>
          </Button>     
      <Button block dark onPress={ ()=> Linking.openURL("https://drive.google.com/open?id=1tlsI70qwfg-3Ndg0M_blHapcNRcl8DMQ")}>
            <Text>MOD 2</Text>
          </Button>     
      <Button block dark onPress={ ()=> Linking.openURL("https://drive.google.com/open?id=1uvhR7Vj2NYxhALmL795sIQvuY9fBJLfk")}>
            <Text>MOD 3</Text>
          </Button>     
      <Button block dark onPress={ ()=> Linking.openURL("https://drive.google.com/open?id=1B1y69TC5eH26ZlJzoE4lC5wu6C1Rv77g")}>
            <Text>MOD 4</Text>
          </Button>   
          <Button block dark onPress={ ()=> Linking.openURL("https://drive.google.com/open?id=1YN4JHo1LS1JvHJMGccUsP7cGRyb-3wbz")}>
            <Text>MOD 4</Text>
          </Button>     
      
          
          <Button block dark onPress={ ()=> Linking.openURL("https://drive.google.com/open?id=16U2Y4XAcNo3AVfM2LPn6ZV8oOu4b_pKR")}>
            <Text>MOD 5</Text>
          </Button>     
      
            
      
          
      
        </Content>
      </Container>
    );
  }
}