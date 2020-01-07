import React, { Component } from 'react';
import {
    AppRegistry, FlatList, StyleSheet, Text, View, Image, Alert,
    Platform, TouchableHighlight, Dimensions, TextInput
} from 'react-native';

import firebase from 'react-native-firebase';
import Button from 'react-native-button';

export default class LoginComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isAuthenticated: false,
        }
    }
    onAnonymousLogin = () => {
        firebase.auth().signInAnonymously()
        .then(() =>{
            console.log(`Login successfully`);
            this.setState({
                isAuthenticated:true,
            });
        }).catch((error) => {
            console.log(`Login failed. Error = ${error}`);
        });
    }
    render() {
        return (
            <View style={{
                flex: 1,
                alignItems: 'center',
                backgroundColor: 'white',
                borderRadius: Platform.OS === 'ios' ? 30 : 0,
            }}>
                <Text style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    margin: 40
                }}>
                    Login with Firebase
                </Text>
                <Button containerStyle={{
                    padding: 10,
                    borderRadius: 4,
                    backgroundColor: 'rgb(226, 161,184)'
                }}
                    style={{ fontSize: 18, color: 'white' }}
                    onPress={this.onAnonymousLogin}>
                    Login onAnonymousLogin
                </Button>
            <Text style={{margin:20, fontSize:15 }}>{this.state.isAuthenticated == true ? 'Looged in anonymous' : ''}</Text>
            </View>
        );
    }
}