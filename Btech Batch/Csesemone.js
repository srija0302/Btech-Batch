import React, { Component } from 'react';
import { Container, Header, Content, Button, Text } from 'native-base';
import {Platform, StyleSheet, TextInput, AppRegistry, Linking} from 'react-native';

export default class Csesemone extends Component {
  render() {    
    return (
      <Container>
       
        <Content>

           
          <Button block dark onPress={()=>this.props.navigation.navigate("J")} >
            <Text>PHYSICS</Text>
          </Button>
          <Button block dark onPress={()=>this.props.navigation.navigate("K")}>
            <Text>CP</Text>
          </Button>
          <Button block dark onPress={ ()=> Linking.openURL("https://www.youtube.com/playlist?list=PLIhUrsYr8yHwDUrVYmUNYkEeZgZTvoIfS") }  >
            <Text>Engineering Drawing</Text>
          </Button>
      
        </Content>
      </Container>
    );
  }
}