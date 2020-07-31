import React, { Component } from 'react';
import { Container, Header, Content, Button, Text } from 'native-base';
import {Platform, StyleSheet, TextInput, AppRegistry} from 'react-native';

export default class Beageek extends Component {
  render() {
    return (
      <Container>
       
        <Content>

             <Button block dark onPress={()=>this.props.navigation.navigate("E")}>
            <Text>OS</Text>
          </Button>
          <Button block dark onPress={()=>this.props.navigation.navigate("F")}>
            <Text>DBMS</Text>
          </Button>
          
          <Button block dark onPress={()=>this.props.navigation.navigate("D")} >
            <Text>PYTHON</Text>
          </Button>
      
        </Content>
      </Container>
    );
  }
}