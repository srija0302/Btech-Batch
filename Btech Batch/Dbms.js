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
 
export default class Dbms extends Component {
  render(){
    return (
      <Swiper style={styles.wrapper} showsButtons={true}>
        <View style={styles.slide1}>

              <Image source={require('./images/dbms1.jpg')} style={{ width:350,height:350}}/>
          
        </View>
        <View style={styles.slide2}>

              <Image source={require('./images/dbms2.jpg')} style={{ width:350,height:350}}/>
        
        </View>
        <View style={styles.slide1}>

              <Image source={require('./images/dbms3.jpg')} style={{ width:350,height:350}}/>
        
        </View>
        <View style={styles.slide1}>

              <Image source={require('./images/dbms4.jpg')} style={{ width:350,height:350}}/>
        
        </View>
        <View style={styles.slide1}>

              <Image source={require('./images/dbms5.jpg')} style={{ width:350,height:350}}/>
                 
                  </View>
        <View style={styles.slide1}>

              <Image source={require('./images/dbms6.jpg')} style={{ width:350,height:350}}/>
           
        </View>
      
        <View style={styles.slide1}>

              <Image source={require('./images/dbms7.jpg')} style={{ width:350,height:350}}/>
                  </View>
                  <View style={styles.slide1}>

              <Image source={require('./images/dbms8.jpg')} style={{ width:350,height:350}}/>
          
        </View>
        <View style={styles.slide2}>

              <Image source={require('./images/dbms9.jpg')} style={{ width:350,height:350}}/>
        
        </View>
        <View style={styles.slide1}>

              <Image source={require('./images/dbms10.jpg')} style={{ width:350,height:350}}/>
        
        </View>
        <View style={styles.slide1}>

              <Image source={require('./images/dbms11.jpg')} style={{ width:350,height:350}}/>
        
        </View>
        <View style={styles.slide1}>

              <Image source={require('./images/dbms12.jpg')} style={{ width:350,height:350}}/>
                 
                  </View>
        <View style={styles.slide1}>

              <Image source={require('./images/dbms13.jpg')} style={{ width:350,height:350}}/>
           
        </View>
      
        <View style={styles.slide1}>

              <Image source={require('./images/dbms14.jpg')} style={{ width:350,height:350}}/>
                  </View>
                  <View style={styles.slide1}>

              <Image source={require('./images/dbms15.jpg')} style={{ width:350,height:350}}/>
                  </View>
                  <View style={styles.slide1}>

              <Image source={require('./images/python7.jpg')} style={{ width:350,height:350}}/>
                  </View>
      </Swiper>
    );
  }
}