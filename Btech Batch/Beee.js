import React, { Component } from 'react';
import { Container, Header, Content, Button, Text } from 'native-base';
import {Platform, StyleSheet, TextInput, AppRegistry, Linking} from 'react-native';

export default class Beee extends Component {
  render() {
    return (
      <Container>
                                     
        <Content>
 <Button block dark onPress={ ()=> Linking.openURL("https://drive.google.com/open?id=1YXUaoGApAZsEBjlKNR5JlNir9UKK92bf") }  >
            <Text>MOD 1</Text>
          </Button>
           <Button block dark onPress={ ()=> Linking.openURL("https://drive.google.com/open?id=1K30dC6COGGRwoKB-3xpt8PFFrSAAA4jx") }  >
            <Text>MOD 2</Text>
          </Button>
           <Button block dark onPress={ ()=> Linking.openURL("https://drive.google.com/open?id=1N0XZ7l_xagrtgAm22alDUB756FRKMrab") }  >
            <Text>MOD 3</Text>
          </Button>
           <Button block dark onPress={ ()=> Linking.openURL("https://drive.google.com/open?id=16OMEsgZGrY0M6PZj7JCPCfMIAV9S2hTi") }  >
            <Text>MOD 3 RC </Text>
          </Button>
           <Button block dark onPress={ ()=> Linking.openURL("https://drive.google.com/open?id=1zSpzS_Gsn4OdgElisVKlGRRAhaHcXDDx") }  >
            <Text>MOD 3 PART 2</Text>
          </Button>
           <Button block dark onPress={ ()=> Linking.openURL("https://drive.google.com/open?id=1fuHpQxHwawMKPoVBv0EVBwsndnSPfl9o") }  >
            <Text>MOD 4</Text>
          </Button>
       <Button block dark onPress={ ()=> Linking.openURL("https://drive.google.com/open?id=1I0Q7ncvO9jYJMqR8_3pQ_Pf-dnD8h9g4") }  >
            <Text>MOD 5</Text>
          </Button>

        </Content>
      </Container>
    );
  }
}