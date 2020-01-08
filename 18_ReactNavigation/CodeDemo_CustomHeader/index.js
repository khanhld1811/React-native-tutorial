/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

//Components
import MainComponent from './components/MainComponent';
import DetailComponent from './components/DetailComponent';
import ThirdComponent from './components/ThirdComponent';

import {MainScreen, DetailScreen, ThirdScreen} from './screenNames';

const MainNavigator = createStackNavigator({
    MainScreen:{
        screen: MainComponent
    },
    DetailScreen:{
        screen:DetailComponent,
        
    },
    ThirdScreen:{
        screen:ThirdComponent,
    },
});

const App = createAppContainer(MainNavigator);

AppRegistry.registerComponent('CodeDemo_CustomHeader',() => App);
