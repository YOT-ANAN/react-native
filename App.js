import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Weather from './components/Weather'
import Forecast from './components/Forecast'
import WeatherScreen from './components/WeatherScreen';
import ZipCodeScreen from './components/ZipCodeScreen';
import { createStackNavigator } from 'react-navigation';
const RootStack = createStackNavigator({
      Weather: WeatherScreen,
      ZipCode: ZipCodeScreen
},{
      initialRouteName: 'Weather',
})
export default class App extends React.Component {
 render() {
 return (
 <RootStack/>
 );
 }
}