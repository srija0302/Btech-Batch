import React, { Component } from 'react';
import { Container, Header, Content, Button, Text } from 'native-base';
import {Platform, StyleSheet, TextInput, AppRegistry} from 'react-native';

export default class Csesemfive extends Component {
  render() {
    return (
      <Container>
                                     
        <Content>

           <Button block dark onPress={()=>this.props.navigation.navigate("i")}>
            <Text>CN</Text>
          </Button>
          <Button block dark onPress={()=>this.props.navigation.navigate("j")}>
            <Text>SEM</Text>
          </Button>
          <Button block dark onPress={()=>this.props.navigation.navigate("k")}>
            <Text>LP</Text>
          </Button>
          <Button block dark onPress={()=>this.props.navigation.navigate("l")}>
            <Text>CD</Text>
          </Button>
          
      
        </Content>
      </Container>
    );
  }
}