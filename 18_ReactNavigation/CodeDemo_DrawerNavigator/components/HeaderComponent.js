import React, { Component } from 'react';
import {
    Text, View, Image, TouchableHighlight
} from 'react-native';

export default class HeaderComponent extends Component {
    render() {
        return (
            <View style={{
                height: 60,
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center'
            }}>
                  <TouchableHighlight style={{ marginLeft: 10 }}
                onPress={() => {
                    this.props.navigation.openDrawer();
                }}>
                <Image
                    style={{ width: 25, height: 25 }}
                    source={require('../icons/menu-icon.png')}
                />
            </TouchableHighlight>
            </View>
        )
    }
}
