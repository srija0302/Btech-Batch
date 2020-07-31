import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,

  View,Image, Linking
} from 'react-native';
 
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
 
export default class Os extends Component {
  render(){
    return (
      <Swiper style={styles.wrapper} showsButtons={true}>
        <View style={styles.slide1}>

              <Image source={require('./images/os1.jpg')} style={{ width:350,height:350}}/>
          
        </View>
        <View style={styles.slide2}>

              <Image source={require('./images/os2.jpg')} style={{ width:350,height:350}}/>
        
        </View>
        <View style={styles.slide1}>

              <Image source={require('./images/os3.jpg')} style={{ width:350,height:350}}/>
        
        </View>
        <View style={styles.slide1}>

              <Image source={require('./images/os4.jpg')} style={{ width:350,height:350}}/>
        
        </View>
        <View style={styles.slide1}>

              <Image source={require('./images/os5.jpg')} style={{ width:350,height:350}}/>
                 
                  </View>
        <View style={styles.slide1}>

              <Image source={require('./images/os6.jpg')} style={{ width:350,height:350}}/>
           
        </View>
      
        <View style={styles.slide1}>

              <Image source={require('./images/os7.jpg')} style={{ width:350,height:350}}/>
                  </View>
                  <View style={styles.slide1}>

              <Image source={require('./images/os8.jpg')} style={{ width:350,height:350}}/>
          
        </View>
        <View style={styles.slide2}>

              <Image source={require('./images/os9.jpg')} style={{ width:350,height:350}}/>
        
        </View>
        <View style={styles.slide1}>

              <Image source={require('./images/os10.jpg')} style={{ width:350,height:350}}/>
        
        </View>
        <View style={styles.slide1}>

              <Image source={require('./images/os11.jpg')} style={{ width:350,height:350}}/>
        
        </View>
        <View style={styles.slide1}>

              <Image source={require('./images/os12.jpg')} style={{ width:350,height:350}}/>
                 
                  </View>
        <View style={styles.slide1}>

              <Image source={require('./images/os13.jpg')} style={{ width:350,height:350}}/>
           
        </View>
      
        <View style={styles.slide1}>

              <Image source={require('./images/os14.jpg')} style={{ width:350,height:350}}/>
                  </View>
                  <View style={styles.slide1}>

              <Image source={require('./images/os15.jpg')} style={{ width:350,height:350}}/>
                  </View>
                  <View style={styles.slide1}>

              <Image source={require('./images/python7.jpg')} style={{ width:350,height:350}}/>
                  </View>
      </Swiper>
    );
  }
}