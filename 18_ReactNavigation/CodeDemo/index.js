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
        screen: MainComponent,
        navigationOptions:{
            headerTitle:'Main',
        },
    },
    DetailScreen:{
        screen:DetailComponent,
        navigationOptions:{
            headerTitle:'Detail',
        },
    },
    ThirdScreen:{
        screen:ThirdComponent,
        navigationOptions:{
            headerTitle:'Third',
        },
    },
});

const App = createAppContainer(MainNavigator);

AppRegistry.registerComponent('CodeDemo', () => App);
