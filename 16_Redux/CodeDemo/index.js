/**
 * @format
 */
import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

//Redux
import { createStore } from 'redux';
import { Provider } from 'react-redux';

//Reducers
import allReducers from './reducers';
import TaskManagerComponent from './components/TaskManagerComponent';

let store = createStore(allReducers);
const App = () => {
    return (
        <Provider store={store}>
            <TaskManagerComponent />
        </Provider>
    )
};
AppRegistry.registerComponent('CodeDemo', () => App);
