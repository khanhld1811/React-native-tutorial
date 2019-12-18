import React, {Component} from 'react';
import {Text,View} from 'react-native';
/**
 * private component
 */
class Greeting extends Component{
    render(){
        return(
            /**
             * props='public property'
             */
            <Text>Hello {this.props.name}</Text>
        );
    }
}

export default class MultipleGreetings extends Component{
    render(){
        return(
            <View style = { {alignItems: 'center'} }>
                <Greeting name="Le Duy Khanh">
                </Greeting>
            </View>
        );
    }
}


