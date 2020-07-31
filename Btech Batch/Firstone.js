import React, { Component } from 'react';
import { Container, Header, Content, Button, Text } from 'native-base';
import {Platform, StyleSheet, View, TextInput, AppRegistry, Image, Linking} from 'react-native';
export default class Firstone extends Component {
  render() {
    return (
      <Container>
       
        <Content>

           <Button block dark onPress={()=>this.props.navigation.navigate("B")}>
            <Text>MR 17</Text>
          </Button>
           
       <View style={{justifyContent: 'center',alignItems: 'center'}}>

              <Image source={require('./images/mreclogo.png')} style={{ width:188,height:185}}/> 
        <Button block dark onPress={ ()=> Linking.openURL("https://instagram.com/contentcafe_?igshid=omn205xhp145") }  >
            <Text>FOLLOW US</Text>
          </Button>
          <Button block dark onPress={()=>this.props.navigation.navigate("m")}>
            <Text>ABOUT US</Text>
          </Button>
           
         </View>
        </Content>
      </Container>
    );
  }
}