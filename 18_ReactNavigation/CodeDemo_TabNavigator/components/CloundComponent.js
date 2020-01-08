import React, {Component} from 'react';
import Button from 'react-native-button';

import {
    Text,
    View,
    Image
} from 'react-native';
const backgroundColor = '#964f8e'
export default class InfoComponent extends Component{
    static navigationOptions = ({ navigation }) => {
        const {params = {}} = navigation.state;
        let tabBarLabel = 'Cloud';
        let tabBarIcon = () => (
            <Image
                source={require('../Icons/settings-icon.png')}
                style={{
                    width:26,
                    height:26,
                    tintColor:backgroundColor
                }}
            />
        );
        return {tabBarLabel, tabBarIcon};
    }
    render(){
        return(
            <View style={{
                flex:1,
                backgroundColor:backgroundColor,
                alignItems:'center',
                justifyContent:'center'
            }}>
                <Text style={{
                    fontWeight:'bold',
                    fontSize:22,
                    color:'white'
                }}>
                    This is Cloud Screen
                </Text>
            </View>
        )
    }
}