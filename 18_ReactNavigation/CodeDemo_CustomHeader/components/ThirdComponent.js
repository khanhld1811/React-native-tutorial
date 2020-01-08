import React, { Component } from 'react';
import {
    Text, View
} from 'react-native';

import Button from 'react-native-button';

export default class ThirdComponent extends Component {
    static navigationOptions = ({ navigation }) => {
        let headerTitle = 'Detail';
        let headerStyle = { backgroundColor: 'lightsteelblue ',borderBottomColor: 'white' };    
        let headerTitleStyle = { color: 'black' }; 
        let headerTintColor = 'black'; 
        return{ headerTitle, headerStyle, headerTitleStyle, headerTintColor};
    };
    render() {
        return (
            <View style={{
                flex: 1,
                backgroundColor: 'salmon',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Text style={{
                    fontWeight: 'bold',
                    fontSize: 22,
                    color: 'white'
                }}>
                    This is Thrid Screen
                </Text>
            </View>
        )
    }
}