import React, { Component } from 'react';
import { Container, Header, Content, Button, Text } from 'native-base';
import { StyleSheet, View,Linking } from 'react-native';
import {
createStackNavigator,
createAppContainer,
} from 'react-navigation';
import { AppRegistry } from 'react-native';



export default class Other extends Component {
  render() {
    return (
      <Container>
       
       <View style={{flex:1}}>
       <LoginContainer/>
        </View>


  <Button block dark onPress={()=>this.props.navigation.navigate("C")}>
            <Text>CSE</Text>
          </Button>
            <Button block dark>
            <Text>ECE</Text>
          </Button>
            <Button block dark>
            <Text>MECH</Text>
          </Button>
<Button block dark onPress={ ()=> Linking.openURL('https://google.com') }  >  
 <Text >EEE</Text>
</Button>
          <Button block dark>
            <Text>CIVIL</Text>
          </Button>
    
    
         
        
  
      </Container>
    );
  }
}

const Nav = createStackNavigator(
  {
   B: TabScreen,
   C: Secondone,
   
  },
  {
    initialRouteName: "B"
  }
);
const LoginContainer = createAppContainer(Nav);
