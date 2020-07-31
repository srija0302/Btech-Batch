import React, { Component } from 'react';
import { Container, Header, Content, Button, Text } from 'native-base';
import {Platform, StyleSheet, TextInput, AppRegistry,Linking} from 'react-native';

export default class Csesemfour extends Component {
  render() {    
    return (
      <Container>
       
        <Content>

           <Button block dark onPress={()=>this.props.navigation.navigate("b")} >
            <Text>P AND S</Text>
          </Button>
          <Button block dark onPress={()=>this.props.navigation.navigate("c")} >
            <Text>WEB TECH</Text>
          </Button>
          <Button block dark onPress={()=>this.props.navigation.navigate("d")}>
            <Text>DBMS</Text>
          </Button>
          <Button block dark onPress={()=>this.props.navigation.navigate("e")}>
            <Text>OS</Text>
          </Button>
          <Button block dark onPress={ ()=> Linking.openURL("https://www.youtube.com/playlist?list=PLBlnK6fEyqRgp46KUv4ZY69yXmpwKOIev")}>
            <Text>Flat</Text>
          </Button>
      
          <Button block dark onPress={()=>this.props.navigation.navigate("g")}>
            <Text>SL</Text>
          </Button>
          
      
        </Content>
      </Container>
    );
  }
}