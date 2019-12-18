import React, {Component} from 'react';
import {Text, View} from 'react-native';

class Blink extends Component{
    constructor(props){
        super(props);
        /**
         * - state = "private property", can change value
         * - can assign state only in constructor!
         */
        this.state = {
            showText: true
        };
        /**
         * () - parameter
         * {} - Implementation
         */
        var taskToDo = () => {
            this.setState(previousState => {
                return{
                    showText:!previousState.showText
                };
            })
        };

        const timeToBlink = 1000;
        setTimeout(taskToDo,timeToBlink);
    }

    render(){
        //After state changed, component is rendered
        let textToDisplay = this.state.showText ? this.props.inputText : ''
        return(
            <Text>{textToDisplay}</Text>
        );
    }
}

export default class TextBlink extends Component{
    render(){
        return(
            <View>
                <Blink inputText='why are you doing!'></Blink>
            </View>
        )
    }
}