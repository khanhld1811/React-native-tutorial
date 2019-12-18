/**
 * @format
 */
import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View} from 'react-native';

export default class App extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.firstText}> First line</Text>
                <Text style={styles.secondtText}> Second line</Text>    
                <Text style={styles.firstText,styles.secondtText}>First line, Second line</Text>    
                <Text style={styles.secondtText,styles.firstText}>Second line, First line</Text>    
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        marginLeft:20,
        marginRight:10,
        backgroundColor:'#28B463',
        borderWidth:1,
        borderColor:'red'
    },
    firstText:{
        margin:10,
        color:'white'
    },
    secondtText:{
        margin:5,
        color:'yellow',
        fontWeight:'bold',
        fontSize:20,

    }
})
AppRegistry.registerComponent('CodeDemo', () => App);
