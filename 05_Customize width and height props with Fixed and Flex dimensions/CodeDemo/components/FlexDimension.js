import React,{Component} from 'react';
import {View} from 'react-native';

export default class FlexDimension extends Component{
    render() {
        return(
            /**
             * FixedDimension -> Ưu tiên trước 
             * Flex -> Ưu tiên sau
             */
            <View style={{flex:1}}>
                <View style={ {flex:80, backgroundColor:'darkorange'} }/>
                <View style={ {flex:20, backgroundColor:'darkred'} }/>
                <View style={ {height:123, backgroundColor:'green'} }/>
            </View>
        )
    }
}