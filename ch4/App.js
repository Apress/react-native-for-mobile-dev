import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import HomeListScreen from './screens/HomeListScreen';

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  About: {
    screen: AboutScreen
  },
  HomeListScreen: {
    screen: HomeListScreen
  }
  },
  {
   initialRouteName: 'Home',
   navigationOptions: {
   headerStyle: {
     backgroundColor: '#48BBEC',
   },
   headerTintColor: '#fff',
   headerTitleStyle: {
     fontWeight: 'bold',
   }
 }
}
);

export default class App extends React.Component {
  render() {
    return <AppNavigator />;
  }
}
