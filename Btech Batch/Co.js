import React, { Component } from 'react';
import { Container, Header, Content, Button, Text } from 'native-base';
import {Platform, StyleSheet, TextInput, AppRegistr,Linking} from 'react-native';

export default class Co extends Component {
  render() {
    return (
      <Container>
                                     
        <Content>

             <Button block dark onPress={ ()=> Linking.openURL("https://drive.google.com/open?id=1kz5hhBlK4ZlRPaIvmD3oo4_A_n4lawoS")}>
            <Text>MOD 1</Text>
          </Button> 
          
       <Button block dark onPress={ ()=> Linking.openURL("https://drive.google.com/open?id=1ZmdyuV6gzdwnEgq5xpUvNQfAJToWxuX4")}>
            <Text>MOD 2</Text>
          </Button> 
          
           <Button block dark onPress={ ()=> Linking.openURL("https://drive.google.com/open?id=1RHcnQ8r-az0o_wXVzgKQ95q3KpJZMpAB")}>
            <Text>MOD 3</Text>
          </Button> 
          

           <Button block dark onPress={ ()=> Linking.openURL("https://drive.google.com/open?id=1MJad4t6g7RlOd65k4vJei0HbZBY60tQJ")}>
            <Text>MOD 4</Text>
          </Button> 
          
           <Button block dark onPress={ ()=> Linking.openURL("https://drive.google.com/open?id=1qcQtVoSEvS0WWdvmc7Y_I_spbyRztP2Q")}>
            <Text>MOD 5</Text>
          </Button> 
            <Button block dark onPress={ ()=> Linking.openURL("https://drive.google.com/open?id=1y3Zjhp1ResVHPLGbqGK7KQmq3JQgL11a")}>
            <Text>MOD 5</Text>
          </Button> 
          
          
        </Content>
      </Container>
    );
  }
}