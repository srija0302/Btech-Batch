import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, StatusBar } from "react-native";
import SInfo from "react-native-sensitive-info";
import {
  globalUsrID,
  globalemail,
  setValues,
  webURL
} from "../Common/GlobalValues";
import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator
} from "react-navigation";
import LoginScreen from "../Login/LoginScreen";
import SignUpScreen from "../Login/SignUpScreen";
import HomeScreen from "../Screens/HomeScreen";
import SearchScreen from "../Screens/SearchScreen";
import ProfileScreen from "../Screens/ProfileScreen";
import Icon from "react-native-vector-icons/Ionicons";

type Props = {};
export default class NavigationDecision extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = { loaded: false, };
  }
 
  render() {
    return(
		<View style={styles.container}>
		<LoginContainer/>
		</View>
	);
}

const RootStack = createStackNavigator(
  {
    Login: LoginScreen,
    SignUp: SignUpScreen
  },
  {
    initialRouteName: "Login"
  }
);
const LoginContainer = createAppContainer(RootStack);

const RootTab = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarLabel: "Home",
        tabBarOptions: {
          activeTintColor: "black"
        },
        tabBarIcon: ({ tintColor }) => (
          <Icon name="md-home" color={tintColor} size={25} />
        )
      }
    },
    Search: {
      screen: SearchScreen,
      navigationOptions: {
        tabBarLabel: "Search",
        tabBarOptions: {
          activeTintColor: "black"
        },
        tabBarIcon: ({ tintColor }) => (
          <Icon name="md-search" color={tintColor} size={25} />
        )
      }
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        tabBarLabel: "Profile",
        tabBarOptions: {
          activeTintColor: "black"
        },
        tabBarIcon: ({ tintColor }) => (
          <Icon name="md-person" color={tintColor} size={25} />
        )
      }
    }
  },
  {
    initialRouteName: "Home"
  }
);
const AppContainer = createAppContainer(RootTab);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  }
});
