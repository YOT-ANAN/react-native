import React from 'react';
import { StyleSheet, Text, View ,ImageBackground} from 'react-native';
import Forecast from './Forecast';

export default class Weather extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            forecast:{
                    main: '-', description: '-', temp: 0
            }
        }
    }
  render() {
    return (
        
      <View >
        <ImageBackground source={require('../bg.jpeg')} style={styles.backdrop} >
            <View style={styles.container} >
            <Text style={styles.display} > { 'Zip code is'} {this.props.zipCode}</Text>
            <Forecast {...this.state.forecast}/>
            </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
 
    container :{ 
    
    paddingTop: 50,  
    flexDirection:'column',
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,4)',
    opacity:0.3,
    height:'50%'

  }, 
  display:{
    fontSize:25,
    color:'#FFFFFF',
  },
   backdrop: {width:'100%',height:'100%'},
  
   
   
  
});
