/**
 * @format
 */
import React, { Component } from 'react';
import { AppRegistry, TextInput, View, Text, Keyboard } from 'react-native';

//improt App from './App';
export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            typedText: 'please type your text',
            typedDiscription:''
        }
    }
    componentWillMount() {
        this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow',() => {
            this.setState(() => {
                return {
                    typedText: 'Keyboard is shown'
                }
            })
        });
        this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide',() => {
            this.setState(() => {
                return{
                    typedText: 'Keyboard is hidde'
                }
            })
        })
    }

    componentWillUnmount() {
        this.keyboardDidShowListener.remove();
    }
    render() {
        return (
            <View>
                <TextInput style={{
                    height: 40,
                    margin: 20,
                    padding: 10,
                    borderColor: 'gray',
                    borderWidth: 1
                }}
                    keyboardType='email-address' // characters @
                    placeholder="Enter your email" // hint
                    placeholderTextColor='red'//color hint
                    /**
                     * Call when have text change
                     */
                    onChangeText={
                        (text) => {
                            /**
                             * Kiểm tra nếu text rỗng
                             */
                            if (text === "") {
                                this.setState(
                                    (previousState) => {
                                        return {
                                            typedText: 'please type your text'
                                        }
                                    }
                                )
                                return;
                            }
                            this.setState(
                                (previousState) => {
                                    return {
                                        typedText: text
                                    }
                                }
                            )
                        }
                    }
                />
                <Text>{this.state.typedText}</Text>

                <TextInput style={{
                    height:100,
                    margin:20,
                    padding:10,
                    borderColor:'gray',
                    borderWidth:1,
                }}
                    multiline={true}
                    borderBottomColor='green'
                    borderBottomWidth={3}
                    borderLeftColor='green'
                    borderLeftWidth={3}
                    borderRightColor='green'
                    borderRightWidth={3}
                    returnKeyType='none'
                    editable={true}// can select or cannot edit
                    autoFocus={true}// cursor input
                    onChangeText={(text) => {
                        this.setState(() => {
                            return{
                                typedDiscription:text
                            }
                        })
                    }}
                >

                </TextInput>
            </View>
        );
    }
}
AppRegistry.registerComponent('CodeDemo', () => App);
