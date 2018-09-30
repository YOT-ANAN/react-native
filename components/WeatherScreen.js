import React from 'react';
import {StyleSheet, Text, Button} from 'react-native';
import Weather from './Weather';
const _keyExtractor = item => item.code;

export default class WeatherScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: (<Text>Weather</Text>),
    }
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
        <Weather  zipCode="90110"/>
    );
  }
} 