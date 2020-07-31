import React, { Component } from 'react';
import { Container, Header, Content, Button, Text } from 'native-base';
import {Platform, StyleSheet, TextInput, AppRegistry, Linking} from 'react-native';

export default class Physemtwo extends Component {
  render() {
    return (
      <Container>
                                     
        <Content>

           <Button block dark onPress={ ()=> Linking.openURL("https://drive.google.com/file/d/1z3LAEbY94iHqwPZ9v2fEMEtpkg5OFCM6/view?usp=sharing") }  >
            <Text>MOD 1 EMT PROBLEMS</Text>
          </Button>

           <Button block dark onPress={ ()=> Linking.openURL("https://drive.google.com/file/d/1862ww0I2fGjYsG6KQhb9zEljZ6ke-GxI/view?usp=sharing") }  >
            <Text>MOD 1 LAQS</Text>
          </Button>

          <Button block dark onPress={ ()=> Linking.openURL("https://drive.google.com/file/d/1QSkOhE5ZRYbAdym0R7-87FK3kElTy6iQ/view?usp=sharing") }  >
            <Text>MOD 1 EMT THEORY</Text>
          </Button>
          <Button block dark onPress={ ()=> Linking.openURL("https://drive.google.com/file/d/1-nsaVxoKE7XaK4TcjlNd4WAshSbZ6uY7/view?usp=sharing") }  >
            <Text>MOD 2</Text>
          </Button>
           <Button block dark onPress={ ()=> Linking.openURL("https://drive.google.com/file/d/10S1sq6Bdr-c2LRPybVG3gq8SFVVg82Ur/view?usp=sharing") }  >
            <Text>MOD 3 LASERS</Text>
          </Button>
          <Button block dark onPress={ ()=> Linking.openURL("https://drive.google.com/file/d/12FLjSG46waSJTXQjcfY4dav2WAxrSTWV/view?usp=sharing") }  >
            <Text>MOD 3 FIBER OPTICS</Text>
          </Button>
           <Button block dark onPress={ ()=> Linking.openURL("https://drive.google.com/file/d/1wi9NahAHAJWH8KBIP4x6JNDYwGHT2GMK/view?usp=sharing") }  >
            <Text>MOD 4</Text>
          </Button>
           <Button block dark onPress={ ()=> Linking.openURL("https://drive.google.com/file/d/1imUl_Edj-sxNJZYeH4azHlUirCi9LJ1j/view?usp=sharing") }  >
            <Text>MOD 5</Text>
          </Button>
      
        </Content>
      </Container>
    );
  }
}