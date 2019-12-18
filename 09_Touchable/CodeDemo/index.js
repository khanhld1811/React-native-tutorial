/**
 * @format
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    Alert,
    StyleSheet,
    View,
    Image,
    Text,
    TouchableHighlight,
    TouchableNativeFeedback,
    TouchableOpacity,
    TouchableWithoutFeedback
} from 'react-native';

export default class App extends Component {
    _onPressButton = () => {
        alert("You pressed the button!");
    }
    render() {
        return (
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}>

                <TouchableHighlight
                    onPress={this._onPressButton}
                    underlayColor='red'
                // onShowUnderlay={() => {
                //     alert("onShowUnderlay button !");
                // }}
                >
                    <View style={{ backgroundColor: 'transparent' }}>
                        <Image
                            style={{ width: 300, height: 300 }}
                            source={require('./images/button.png')}>

                        </Image>
                    </View>
                </TouchableHighlight>

                <TouchableNativeFeedback
                    onPress={this._onPressButton}
                    useForeground={true}
                >
                    <View style={{
                        width: 300,
                        height: 50,
                        margin: 20,
                        backgroundColor: 'red'
                    }}>
                        <Text style={{
                            margin: 10,
                            fontSize: 20,
                            color: 'white',
                            textAlign: 'center'
                        }}>
                            TouchableNativeFeedback
                            </Text>
                    </View>
                </TouchableNativeFeedback>

                <TouchableOpacity
                    onPress={this._onPressButton}
                    activeOpacity={0.7}>
                    <View style={{
                        width: 300,
                        height: 50,
                        margin: 20,
                        backgroundColor: 'green'
                    }}>
                        <Text style={{
                            margin: 10,
                            fontSize: 20,
                            color: 'white',
                            textAlign: 'center'
                        }}>
                            TouchableOpacity
                            </Text>
                    </View>
                </TouchableOpacity>

                <TouchableWithoutFeedback
                    onPress={this._onPressButton}
                    /**
                     * when hold
                     */
                    onLongPress={() => {
                        alert("onLongPress")
                    }}
                    /**
                     * when check
                     */
                    onPressIn={() => {
                        alert("onPressIn")
                    }}
                    /**
                     * when uncheck
                     */
                    onPressOut={() => {
                        alert("onPressOut")
                    }}
                    disabled={false}
                    >
                         <View style={{
                        width: 300,
                        height: 50,
                        margin: 20,
                        backgroundColor: 'purple'
                    }}>
                        <Text style={{
                            margin: 10,
                            fontSize: 20,
                            color: 'white',
                            textAlign: 'center'
                        }}>
                            TouchableWithoutFeedback
                            </Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        )
    }
}

AppRegistry.registerComponent('CodeDemo', () => App);
