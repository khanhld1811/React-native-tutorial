/**
 * @format
 */
import React, { Component } from 'react';
import { AppRegistry, Aler, StyleSheet, View } from 'react-native';
import Button from 'react-native-button';
export default class App extends Component {
    _onPressButton() {
        alert('Nice!')
    }
    render() {
        return (
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignContent: 'center'
            }}>
                <Button
                    style={{
                        fontSize: 25,
                        color: 'white',
                        backgroundColor:'green',
                        padding:10,
                        borderRadius:20,
                     }}
                    styleDisabled={{ color: 'red' }}
                    onPress={() => this._onPressButton()}>
                    Press Me!
      </Button>
            </View>
        );
    }
}
AppRegistry.registerComponent('CodeDemo', () => App);
