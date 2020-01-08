import React, {Component} from 'react';
import Button from 'react-native-button';
import {
    Text,
    View,
    Image
} from 'react-native';
import { Info } from '../screenNames';
const backgroundColor = '#0067A7'
export default class HomeComponent extends Component{
    static navigationOptions = ({ navigation }) => {
        const {params = {}} = navigation.state;
        let tabBarLabel = 'Home';
        let tabBarIcon = () => (
            <Image
                source={require('../Icons/home-icon.png')}
                style={{
                    width:26,
                    height:26,
                    tintColor:backgroundColor
                }}
            />
        );
        return {tabBarLabel, tabBarIcon};
    }
    render(){
        return(
            <View style={{
                flex:1,
                backgroundColor:backgroundColor,
                alignItems:'center',
                justifyContent:'center'
            }}>
                <Text style={{
                    fontWeight:'bold',
                    fontSize:22,
                    color:'white',
                }}>
                    This is Home Screen
                </Text>
                <Button 
                      containerStyle={{ padding: 10, margin: 20, width: 200, height: 45, borderRadius: 10, backgroundColor: 'darkviolet' }}
                      style={{ fontSize: 18, color: 'white' }}
                      onPress={() => {
                          const { navigate } = this.props.navigation;
                          navigate(Info)
                      }}>
                    Navigate to Detail
                </Button>
            </View>
        )
    }
}