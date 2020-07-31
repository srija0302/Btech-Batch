import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,

  View,Image, Linking
} from 'react-native';
import { Button,Text } from 'native-base';
 
import Swiper from 'react-native-swiper';
 
const styles = StyleSheet.create({
  wrapper: {
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',

  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  }
})
 
export default class Python extends Component {
  render(){
    return (
      <Swiper style={styles.wrapper} showsButtons={true}>
        <View style={styles.slide1}>

              <Image source={require('./images/python1.jpg')} style={{ width:350,height:350}}/>
          
        </View>
        <View style={styles.slide2}>

              <Image source={require('./images/python2.jpg')} style={{ width:350,height:350}}/>
        
        </View>
        <View style={styles.slide1}>

              <Image source={require('./images/python3.jpg')} style={{ width:350,height:350}}/>
        
        </View>
        <View style={styles.slide1}>

              <Image source={require('./images/python4.jpg')} style={{ width:350,height:350}}/>
        
        </View>
        <View style={styles.slide1}>

              <Image source={require('./images/python5.jpg')} style={{ width:350,height:350}}/>
               <Button block dark onPress={ ()=> Linking.openURL("https://github.com/join") } style={{marginLeft:0}}>
            <Text >JOIN GITHUB</Text>
          </Button>   
                  </View>
        <View style={styles.slide1}>

              <Image source={require('./images/python6.jpg')} style={{ width:350,height:350}}/>
           <Button block dark onPress={ ()=> Linking.openURL("https://www.youtube.com/playlist?list=PLsyeobzWxl7poL9JTVyndKe62ieoN-MZ3") } style={{marginLeft:0}}>
            <Text >CLICK HERE FOR PYTHON TUTORIALS</Text>
          </Button>
        </View>
      
        <View style={styles.slide1}>

              <Image source={require('./images/python7.jpg')} style={{ width:350,height:350}}/>
                  </View>
      </Swiper>
    );
  }
}