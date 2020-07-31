import React, { Component } from 'react';
import { Container, Header, Content, Button, Text } from 'native-base';
import {Platform, StyleSheet, TextInput, AppRegistry} from 'react-native';

export default class Csesemtwo extends Component {
  render() {    
    return (
      <Container>
       
        <Content>

           <Button block dark onPress={()=>this.props.navigation.navigate("L")} >
            <Text>CM</Text>
          </Button>
          <Button block dark onPress={()=>this.props.navigation.navigate("M")} >
            <Text>APPLIED PHYSICS</Text>
          </Button>
          <Button block dark onPress={()=>this.props.navigation.navigate("N")}>
            <Text>APPLIED CHEMISTRY</Text>
          </Button>
          <Button block dark onPress={()=>this.props.navigation.navigate("O")}>
            <Text>BEEE</Text>
          </Button>
          <Button block dark onPress={()=>this.props.navigation.navigate("P")}>
            <Text>DATA STRUCTURES</Text>
          </Button>
          
      
        </Content>
      </Container>
    );
  }
}