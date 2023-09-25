import React from 'react';
import { View, Text, StyleSheet } from 'react-native'

const Heading = () => (
  <View style={StyleSheet.headerText}>
    <Text style={StyleSheet.headerText}>
      main
    </Text>
  </View>
)

const style = StyleSheet.create({
  header: {
    header:{
      marginTop: 80
    },
    headerText: {
      textAlign: 'center',
      fontSize: 72,
      color: 'rgba(175, 47, 47, 0.25)',
      fontWeight: '100'
    }
  }
})
export default Heading