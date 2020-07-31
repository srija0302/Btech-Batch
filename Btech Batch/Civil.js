import React, { Component } from 'react';
import { Container, Header, Content, Button, Text } from 'native-base';
import {Platform, StyleSheet, TextInput, AppRegistry} from 'react-native';

export default class Civil extends Component {
  render() {
    return (
      <Container>
       
        <Content>

           <Button block dark >
            <Text>1-1</Text>
          </Button>
          <Button block dark >
            <Text>1-2</Text>
          </Button>
          <Button block dark >
            <Text>2-1</Text>
          </Button>
          <Button block dark >
            <Text>2-2</Text>
          </Button>
          <Button block dark >
            <Text>3-1</Text>
          </Button>
          <Button block dark >
            <Text>3-2</Text>
          </Button>
          <Button block dark >
            <Text>4-1</Text>
          </Button>
          <Button block dark >
            <Text>4-2</Text>
          </Button>
      
        </Content>
      </Container>
    );
  }
}