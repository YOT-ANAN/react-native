import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Weather from './components/Weather'
import Forecast from './components/Forecast'

export default class App extends React.Component {

  render() {
    return (
      <View>
      <Weather zipCode="90110"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});