import React, {Component} from 'react';
import {AppRegistry,StyleSheet, Text, View, Platform } from 'react-native';

class LifeCycle extends Component{
    constructor(props){
        super(props)
        console.log(`${Date.now()}. Constructor`);
        /**
         * Khởi tạo sate
         */
        this.state = {
            count: 0
        };
        setInterval(()=> {
            console.log(`SETINTERVAL`)
            this.setState(prevState => {
                return{
                    count: prevState.count + 1
                }
            });
        },1000);
    }

    componentWillMount() {
        console.log(`${Date.now()}. ComponentWillMount`);
    }

    componentDidMount() {
        console.log(`${Date.now()}. ComponentDidMount`);
    }

    componentWillReceiveProps(){
        console.log(`${Date.now()}. ComponentWillreceiveProps`);
    }

    shouldComponentUpdate() {
        console.log(`${Date.now()}. ShouldComponentUpdate`);
        return true;
    }

    componentWillUpdate() {
        console.log(`${Date.now()}. ComponentWillUpdate `)
    }

    componentDidUpdate() {
        console.log(`${Date.now()}. componentDidUpdate `)
    }

    render(){
        console.log(`${Date.now()}. render()`);
        let textToDisplay = `Number of refresh: ${this.state.count}`;
        return(
            <View style={{
                flex:1
            }}>
                <Text>LifeCycle</Text>
                <Text>{textToDisplay}</Text>
            </View>
        );
    }
}

export default class LifeCycleComponent extends Component{
    constructor(props){
        super(props)
    }
    render() {
        var lifeCyclle = <LifeCycle propA="abc"></LifeCycle>
        return(
            <View>
                {lifeCyclle}
            </View>
        )
    }
}