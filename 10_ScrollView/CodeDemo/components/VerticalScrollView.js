/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import {
  AppRegistry,
  ScrollView,
  Image,
  Text,
  View,
  TextInput,
  Dimensions,
} from 'react-native';

export default class VerticalScrollView extends Component {
  render() {
    let screenWidth = Dimensions.get('window').width;
    return (
      <ScrollView
      contentContainerStyle={{padding:20}}
      >
        <Image source={require('../images/keyboard.png')}
          style={{ width: screenWidth, height: screenWidth * 730 / 1791, marginTop: 20 }} />
        <Text style={{
          fontSize: 20,
          padding: 10,
          color: 'white',
          textAlign: 'center',
          backgroundColor: 'green'
        }}>
          This is a text
                </Text>
        <TextInput
          style={{
            padding: 10,
            margin: 10,
            borderWidth: 1
          }}
          placeholder='Enter text'
        >

        </TextInput>
        <View style={{
          padding: 10,
          margin: 10,
          borderWidth: 1
        }}>
          <Image source={require('../images/keyboard.png')}
            style={{ width: screenWidth, height: screenWidth * 730 / 1791, marginTop: 20 }} />
          <Image source={require('../images/keyboard.png')}
            style={{ width: screenWidth, height: screenWidth * 730 / 1791, marginTop: 20 }} />
          <Image source={require('../images/keyboard.png')}
            style={{ width: screenWidth, height: screenWidth * 730 / 1791, marginTop: 20 }} />
          <Image source={require('../images/keyboard.png')}
            style={{ width: screenWidth, height: screenWidth * 730 / 1791, marginTop: 20 }} />
          <Image source={require('../images/keyboard.png')}
            style={{ width: screenWidth, height: screenWidth * 730 / 1791, marginTop: 20 }} />
          <Image source={require('../images/keyboard.png')}
            style={{ width: screenWidth, height: screenWidth * 730 / 1791, marginTop: 20 }} />
        </View>
      </ScrollView>
    );
  }
}
