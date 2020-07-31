/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput,Button,AppRegistry} from 'react-native';
import {
createStackNavigator,
createAppContainer,
} from 'react-navigation';
import Firstone from './Firstone';
import TabScreen from './TabScreen';
import Beageek from './Beageek';
import Python from './Python';
import Os from './Os';
import Dbms from './Dbms';
import Aboutus from './Aboutus';

import Cse from './Cse';


import Csesemone from './Csesemone';
import Physemone from './Physemone';
import Cpsemone from './Cpsemone';
import Csesemtwo from './Csesemtwo';
import Mathssemtwo from './Mathssemtwo';
import Physemtwo from './Physemtwo';
import Chesemtwo from './Chesemtwo';
import Beee from './Beee';
import Ds from './Ds';
import Csesemthree from './Csesemthree';
import Ac from './Ac';
import Dld from './Dld';
import Oops from './Oops';
import Daa from './Daa';
import Mfcs from './Mfcs';
import Co from './Co';
import Csesemfour from './Csesemfour';
import Pands from './Pands';
import Wt from './Wt';
import Dbmss from './Dbmss';
import Opsys from './Opsys';

import Sl from './Sl';
import Csesemfive from './Csesemfive';
import Cn from './Cn';
import Sem from './Sem';
import Lp from './Lp';
import Cd from './Cd';

import OneSignal from 'react-native-onesignal';


export default class App extends Component<Props> {

  constructor(properties) {
    super(properties);
    this.state = { loaded: false, };
    OneSignal.init("498a2d3b-9ed6-477d-bfa8-c9e5e269384b");
    OneSignal.inFocusDisplaying(2);

    OneSignal.addEventListener('received', this.onReceived);
    OneSignal.addEventListener('opened', this.onOpened);
    OneSignal.addEventListener('ids', this.onIds);
    OneSignal.configure();  // triggers the ids event

  }

  componentWillUnmount() {
    OneSignal.removeEventListener('received', this.onReceived);
    OneSignal.removeEventListener('opened', this.onOpened);
    OneSignal.removeEventListener('ids', this.onIds);
  }

  onReceived(notification) {
    console.log("Notification received: ", notification);
  }

  onOpened(openResult) {
    console.log('Message: ', openResult.notification.payload.body);
    console.log('Data: ', openResult.notification.payload.additionalData);
    console.log('isActive: ', openResult.notification.isAppInFocus);
    console.log('openResult: ', openResult);
  }
  render() {

    return (
        
       <View style={{flex:1}}>
       <LoginContainer/>
        </View>

      
    );
  }

};

const RootStack = createStackNavigator(
  {
   A: Firstone,
   B: TabScreen,
   C: Beageek,
   D: Python,
   E: Os,
   F: Dbms,
   G: Cse,
   H: Csesemone,
   J: Physemone,
   K: Cpsemone,
   L: Mathssemtwo,
   M: Physemtwo,
   N: Chesemtwo,
   O: Beee,
   P: Ds,
   Q: Csesemtwo,
   R: Csesemthree,
   S: Ac,
   T: Dld,
   U: Oops,
   V: Daa,
   W: Mfcs,
   X: Co,
   a: Csesemfour,
   b: Pands,
   c: Wt,
   d: Dbmss,
   e: Opsys,
  
   g: Sl,
   h: Csesemfive,
   i: Cn,
   j: Sem,
   k: Lp,
   l: Cd,
   m: Aboutus,
   

  },
  {
    initialRouteName: "A"
  }
);
const LoginContainer = createAppContainer(RootStack);




