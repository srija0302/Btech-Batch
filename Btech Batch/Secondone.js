import React, { Component } from 'react';
import { Container, Header, Content, Button, Text, } from 'native-base';
import { StyleSheet, View  } from 'react-native';

export default class Secondone extends Component {
  render() {
    return (
      <Container>
  
        <Header />
        <Content>
        <View style={styles.container}>
         <View style={styles.rightNav}>
            <Button block dark>
            <Text>1-1</Text>
          </Button>
            <Button block dark>
            <Text>ECE</Text>
          </Button>
            <Button block dark>
            <Text>MECH</Text>
          </Button>
            <Button block dark>
            <Text>CIVIL</Text>
          </Button>
          </View>
          </View>
        </Content>
  
      </Container>
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
 rightNav: {
   justifyContent:'space-between'
  }
  });
