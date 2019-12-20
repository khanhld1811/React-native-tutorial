import React, { Component } from 'react';
import {
    AppRegistry,
    FlatList,
    StyleSheet,
    Text,
    View,
    Image,
    Alert,
    Platform,
    TouchableOpacity,
    RefreshControl,
    TextInput,
    Dimensions
} from 'react-native';

export default class TaskItemComponent extends Component {
    render() {
        return (
            <View style={{
                flex: 1,
                flexDirection: 'column'
            }}>
                <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    height: 50,
                    marginTop: 10,
                    marginBottom:10,

                }}>
                    <Text style={{ margin: 20, fontSize: 30, fontWeight: 'bold', color: this.props.completed == true ? 'red' : 'black' }}>
                        {this.props.tasks.taskName ? this.props.tasks.taskName : this.props.taskName}
                    </Text>
                    <TouchableOpacity
                        
                        onPress={() => {
                            // Call this action in Container     
                            this.props.onClickToggle(this.props.taskId);
                        }}

                        style={{
                            top: 0,
                            buttom: 0,
                            left: 0,
                            right: 0
                        }}>

                        <Image
                            source={require('../icons/change.png')}
                            style={{
                                margin:20,
                                heigh: 50,
                                width: 50,
                                resizeMode: 'contain'
                            }}
                        >
                        </Image>
                    </TouchableOpacity>
                </View>
                <View style={{
                    backgroundColor: 'grey',
                    height: 1
                }}>
                </View>
            </View>
        );
    }
}