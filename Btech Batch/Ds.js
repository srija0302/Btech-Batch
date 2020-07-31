import React, { Component } from 'react';
import { Container, Header, Content, Button, Text } from 'native-base';
import {Platform, StyleSheet, TextInput, AppRegistry, Linking} from 'react-native';

export default class Ds extends Component {
  render() {
    return (
      <Container>
                                     
        <Content>

            <Button block dark onPress={ ()=> Linking.openURL("https://drive.google.com/open?id=1Rc2cHK59hzeck8y-7DGkqfFch2_DVmJ8") }  >
            <Text>MOD 1</Text>
          </Button>
          <Button block dark onPress={ ()=> Linking.openURL("https://drive.google.com/open?id=107JsCzZvOAUggS2bsTOP8czISoUz8kcy") }  >
            <Text>MOD 2</Text>
          </Button>
          <Button block dark onPress={ ()=> Linking.openURL("https://drive.google.com/open?id=1q1-sPeLI_3lMyos_D-FZBMeJzFSYgMYM") }  >
            <Text>MOD 3</Text>
          </Button>
          <Button block dark onPress={ ()=> Linking.openURL("https://drive.google.com/open?id=1pFRBZ_dVFMmcnI2FNuZAFKwVBjXNCMFb") }  >
            <Text>MOD 4</Text>
          </Button>
          <Button block dark onPress={ ()=> Linking.openURL("https://drive.google.com/open?id=1CNiTgbw2Lb_ytG9_6s8FsYIjbDwHZGPt") }  >
            <Text>MOD 4 TREES</Text>
          </Button>
          <Button block dark onPress={ ()=> Linking.openURL("https://drive.google.com/open?id=1zQe_GuYwEPusB1ocFGk0abtx8zRYhX-Y") }  >
            <Text>MOD 5 BSTREE</Text>
          </Button>
          <Button block dark onPress={ ()=> Linking.openURL("https://drive.google.com/open?id=1BZQ8NbFEkn_jW-PSE05xghDKjAkSFf9z") }  >
            <Text>MOD 5 AVLTREE</Text>
          </Button>
          
          <Button block dark onPress={ ()=> Linking.openURL("https://drive.google.com/open?id=1Hd1V7MkbuholwFpPA8gVtULJelmQZGxZ") }  >
            <Text>MOD 5</Text>
          </Button>


          
      
        </Content>
      </Container>
    );
  }
}