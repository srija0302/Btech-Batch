import React, { Component } from 'react';
import { Container, Header, Content, Button, Text } from 'native-base';
import {Platform, StyleSheet, TextInput, AppRegistry} from 'react-native';

export default class Csesemthree extends Component {
  render() {    
    return (
      <Container>
       
        <Content>

           <Button block dark onPress={()=>this.props.navigation.navigate("S")} >
            <Text>AC</Text>
          </Button>
          <Button block dark onPress={()=>this.props.navigation.navigate("T")} >
            <Text>DLD</Text>
          </Button>
          <Button block dark onPress={()=>this.props.navigation.navigate("U")}>
            <Text>OOPS</Text>
          </Button>
          <Button block dark onPress={()=>this.props.navigation.navigate("V")}>
            <Text>DAA</Text>
          </Button>
          <Button block dark onPress={()=>this.props.navigation.navigate("W")}>
            <Text>MFCS</Text>
          </Button>
          <Button block dark onPress={()=>this.props.navigation.navigate("X")}>
            <Text>CO</Text>
          </Button>
          
      
        </Content>
      </Container>
    );
  }
}