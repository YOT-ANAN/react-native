import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Forecast extends React.Component {
    render() {
    return (
        <View >

            <Text style={styles.display} >{this.props.main}</Text>
            <Text style={styles.display1} >{this.props.description}</Text>
            <Text style={styles.display} >{this.props.temp}°C</Text>
            
        </View>
        );
    }
}

const styles = StyleSheet.create({
     backdrop: {width:'100%',height:'100%'},  
     display:{
        margin: 10,
        fontSize:25,
        color:'#FFFFFF',
    },
        
    display1:{
        margin: 10,
        fontSize:15,
        color:'#FFFFFF',    
        }
      
 
  });
  

