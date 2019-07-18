/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, NativeModules, Button} from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.updateCount();
  }
  increment = () => {
    NativeModules.Counter.increment();
    this.updateCount();
    }
  updateCount = () => {
    NativeModules.Counter.getCount( (error, count)=>{
      this.setState({ count: count});
    })  
  } 
  render() {
    return (
      <View style={styles.container}>
        <Text>Counter from Native Code:</Text>
        <Text>{this.state.count}</Text>
      <Button
            onPress={this.increment}
            title="Increment"
            color="#841584"
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
