import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Forecast extends React.Component {
    render() {
    return (
        <View style={styles.text}>
            <Text>{this.props.main}</Text>
            <Text>{this.props.description}</Text>
            <Text>{this.props.temp}</Text>
            <Text>°C</Text>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    container: { paddingTop: 25},
     backdrop: {width:'100%',height:'100%'},
     flex: {
         flexDirection:'column',justifyContent: 'center',alignItems:'center'
      },
      text:{textAlign:'center',fontSize:20}
     
    
  });
  

