import React, { Component } from 'react';
import {
    AppRegistry,
    ScrollView,
    Text, View,
    Dimensions
} from 'react-native';

export default class HorizontalScrollView extends Component {
    render() {
        let screenWidth = Dimensions.get('window').width;
        let screenHeight = Dimensions.get('window').height;
        return (
            <ScrollView
                horizontal={true}
                pagingEnabled={true}
                showsHorizontalScrollIndicator={true}
                onMomentumScrollBegin={() => {
                    alert('Begin scrolling')
                }}
                onMomentumScrollEnd={() => {
                    alert('End scrolling')
                }}
                onScroll={(event) => {
                    let logData = `Scrolled to x = ${event.nativeEvent.contentOffset.x}, y = ${event.nativeEvent.contentOffset.y}` 
                    console.log(logData);
                }}

                scrollEventThrottle={10}
            >
                <View style={{
                    backgroundColor: '#5f9ea0',
                    flex: 1,
                    marginTop: 20,
                    width: screenWidth,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Text style={{
                        fontSize: 20,
                        padding: 15,
                        color: 'white',
                        textAlign: 'center'
                    }}>
                        Screen 1
                    </Text>
                </View>

                <View style={{
                    backgroundColor: 'tomato',
                    flex: 1,
                    marginTop: 20,
                    width: screenWidth,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Text style={{
                        fontSize: 20,
                        padding: 15,
                        color: 'white',
                        textAlign: 'center'
                    }}>
                        Screen 2
                    </Text>
                </View>
                <View style={{
                    backgroundColor: 'green',
                    flex: 1,
                    marginTop: 20,
                    width: screenWidth,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Text style={{
                        fontSize: 20,
                        padding: 15,
                        color: 'white',
                        textAlign: 'center'
                    }}>
                        Screen 3
                    </Text>
                </View>
            </ScrollView>
        );
    }

}