import React, { Component } from 'react';
import { Container, Header, Content, Button, Text } from 'native-base';
import {Platform, StyleSheet, TextInput, AppRegistry} from 'react-native';

export default class Cse extends Component {
  render() {
    return (
      <Container>     
       
        <Content>

           <Button block dark onPress={()=>this.props.navigation.navigate("H")}>
            <Text>1-1</Text>
          </Button> 
          <Button block dark onPress={()=>this.props.navigation.navigate("Q")}>
            <Text>1-2</Text>
          </Button>
          <Button block dark onPress={()=>this.props.navigation.navigate("R")}>
            <Text>2-1</Text>
          </Button>
          <Button block dark onPress={()=>this.props.navigation.navigate("a")}>
            <Text>2-2</Text>
          </Button>
          <Button block dark onPress={()=>this.props.navigation.navigate("h")}>
            <Text>3-1</Text>
          </Button>
          <Button block dark onPress={() => alert("Will be updated Soon")}>
            <Text>3-2</Text>
          </Button>
           <Button block dark onPress={() => alert("Will be updated Soon")}>
            <Text>4-1</Text>
          </Button>
           <Button block dark onPress={() => alert("Will be updated Soon")}>
            <Text>4-2</Text>
          </Button>
        
      
        </Content>
      </Container>
    );
  }
}