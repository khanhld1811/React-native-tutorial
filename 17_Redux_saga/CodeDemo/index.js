/**
 * @format
 */

 import React, {Component} from 'react';
import {AppRegistry} from 'react-native';

//Redux
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import allReducers from './reducers';
import CounterContainer from './containers/CounterContainer';

let store = createStore(allReducers);
const App = () => {
    return(
    <Provider store={store}>
        <CounterContainer/>
    </Provider>
    )
};

AppRegistry.registerComponent('CodeDemo', () => App);
