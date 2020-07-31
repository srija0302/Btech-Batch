import React, { Component } from 'react';
import { Container, Header, Content, Button, Text } from 'native-base';
import {Platform, StyleSheet, TextInput, AppRegistry} from 'react-native';

export default class Lp extends Component {
  render() {
    return (
      <Container>
                                     
        <Content>

          <Button block dark onPress={() => alert("Will be updated Soon")}>
            <Text>MOD 1</Text>
          </Button>
           <Button block dark onPress={() => alert("Will be updated Soon")}>
            <Text>MOD 2</Text>
          </Button>
           <Button block dark onPress={() => alert("Will be updated Soon")}>
            <Text>MOD 3</Text>
          </Button>
           <Button block dark onPress={() => alert("Will be updated Soon")}>
            <Text>MOD 4</Text>
          </Button>
           <Button block dark onPress={() => alert("Will be updated Soon")}>
            <Text>MOD 5</Text>
          </Button>

      
        </Content>
      </Container>
    );
  }
}