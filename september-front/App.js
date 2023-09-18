import React, {Component} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

export default class App extends Component {
  state = {
    year: 2016,
    name: 'Nader Dabit',
    colors: ['blue']
  }

  render(){
    return(
      <View>
        <Text>My name is : {this.state.name} </Text>
        <Text>The year is : {this.state.year} </Text>
        <Text>My Colors are {this.state.colors[0]} </Text>
      </View>
    )
  }
}