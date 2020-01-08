import React, { Component } from 'react';
import {
    Text, View, ActivityIndicator
} from 'react-native';
import { DetailScreen, ThirdScreen } from '../screenNames';
import Button from 'react-native-button';

export default class MainComponent extends Component {
    static navigationOptions = ({ navigation }) => {
        const { params = {} } = navigation.state;
        /**
         * Custom header
         */
        let headerTitle = 'Main';
        let headerTitleStyle = { color: 'red',textAlign: 'center',
        flex: 1 };
        let headerRight = (
            <Button
                containerStyle={{ margin: 5, padding: 10, borderRadius: 10, backgroundColor: 'darkviolet' }}
                style={{ fontSize: 15, color: 'white' }}
                onPress={() => {
                    //do something
                    params.onSave();
                }}
            >Save</Button>);
            let headerBackTitle = 'Back';
        return { headerTitle, headerTitleStyle, headerRight,headerBackTitle }
    }
    _onSave() {
        if(this.props.navigation.state.params.isSaving == true){
            return;
        }
       this.props.navigation.setParams({ isSaving: true});
       //Do some tasks for about second
       var interval = setTimeout(() => {
        console.log(`I finished some tasks in 3 seconds`);
        this.props.navigation.setParams({ isSaving: false });
    }, 3000);
    
    }
    componentDidMount() {
        this.props.navigation.setParams({ onSave: this._onSave.bind(this), isSaving: false });
    }
    render() {
        const { navigation } = this.props;
        // send data to screen diferent
        let dataSendToDetail = {
            name: "Star Wars",
            releaseYear: 2020
        }
        let mainView = (navigation.state.params && navigation.state.params.isSaving == true) ? <ActivityIndicator/>:
            <View style={{
                flex: 1,
                backgroundColor: 'dodgerblue',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Text style={{
                    fontWeight: 'bold',
                    fontSize: 22, color: 'white'
                }}>
                    This is Main Screen
                </Text>
                <Button
                    containerStyle={{
                        padding: 10,
                        margin: 20,
                        width: 200,
                        height: 45,
                        borderRadius: 10,
                        backgroundColor: 'darkviolet'
                    }}

                    style={{
                        fontSize: 18,
                        color: 'white'
                    }}
                    onPress={() => {
                        navigation.navigate(DetailScreen, dataSendToDetail)
                    }}
                >
                    Navigate to Detail
                </Button>
                <Button
                    containerStyle={{
                        padding: 10,
                        margin: 20,
                        width: 200,
                        height: 45,
                        borderRadius: 10,
                        backgroundColor: 'darkviolet'
                    }}

                    style={{
                        fontSize: 18,
                        color: 'white'
                    }}
                    onPress={() => {
                        navigation.navigate(ThirdScreen)
                    }}
                >
                    Navigate to Thrid
                </Button>
            </View>
        return mainView;
    }
}