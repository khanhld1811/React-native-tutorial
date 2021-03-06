import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    ScrollView,
    Text,View,
   
} from 'react-native' 
import ViewPager from '@react-native-community/viewpager';

export default class ViewPagerExample extends Component{
    render() {
        return(
            <ViewPager
                style={{flex:1}}
                initialPage={0}
                onPageScroll={(event) => {
                    console.log(`offset = ${event.nativeEvent.offset}`)
                }}
                onPageScrollStateChanged={(state) => {
                        console.log(`Scrolling state = ${state}`)
                }}
                onPageSelected={(event) => {
                        console.log(`Scrolled to page: ${event.nativeEvent.position}`)
                }}
            >
                <View style={{backgroundColor:'lightseagreen'}}>
                    <Text>Screen 1</Text>
                </View>
                <View style={{backgroundColor:'palevioletred'}}>
                    <Text>Screen 2</Text>
                </View>
                <View style={{backgroundColor:'salmon'}}>
                    <Text>Screen 3</Text>
                </View>
            </ViewPager>
        );
    }
}

const styles = StyleSheet.create({
    textStyle:{
        fontSize:20,
        fontWeight:'bold',
        fontSize:20,
        padding:15,
        color:'white',
        textAlign:'center'
    }
})