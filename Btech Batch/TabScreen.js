import React, { Component } from 'react';
import { Container, Header, Content, Button, Text, } from 'native-base';
import { StyleSheet, View,Linking, Image,  } from 'react-native';
export default class TabScreen extends Component {
  render() {
    return (
      <Container>
  
        
        <Content>
        <View style={styles.container}>
         <View style={styles.rightNav}>
                       <Button block dark onPress={()=>this.props.navigation.navigate("G")}>
            <Text>CSE</Text>
          </Button>
            

             <Button block dark onPress={ ()=> Linking.openURL("https://drive.google.com/file/d/1Y63M00T680k7gsF0uzNjZxeNGaDLn3fr/view?usp=sharing") }  >  
 <Text >Syllabus Book</Text>
</Button>
       <Button block dark onPress={ ()=> Linking.openURL("https://mrecexamcell.com/Login.aspx") }  >
            <Text>MREC EXAM CELL</Text>
          </Button>
          <Button block dark onPress={ ()=> Linking.openURL("http://www.mrec.ac.in/Placement_Details.html") }  >
            <Text>PLACEMENT CELL</Text>
          </Button>
          <Button block dark onPress={()=>this.props.navigation.navigate("C")}>
            <Text>Be A GEEK</Text>
          </Button>
<Image source={require('./images/BB.png')} style={{ width:300,height:300,flexDirection: 'row',flex:1,marginLeft: 75}}/> 
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
