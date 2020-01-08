/**
 * @format
 */

import { AppRegistry } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

//Components
import HomeComponent from './components/HomeComponent';
import InfoComponent from './components/InfoComponent';
import SettingComponent from './components/SettingComponent';
import CloundComponent from './components/CloundComponent';
//Screen names
import { Home, Info, Setting, Clound } from './screenNames';

let routeConfigs = {
    Home: {
        screen: HomeComponent,
    },
    Info: {
        screen: InfoComponent,
    },
    Setting: {
        screen: SettingComponent,
    },
    Clound: {
        screen: CloundComponent,
    }
};
let tabNavigatorConfig = {
    tabBarPosition: 'bottom',
    animationEnabled: true,
    swipeEnabled: true
};

const TabNavigator = createBottomTabNavigator({
    Home: HomeComponent,
    Setting: SettingComponent,
    Info: InfoComponent,
    Clound: CloundComponent
},
    {
        tabBarPosition: 'bottom',
        animationEnabled: true,
        swipeEnabled: true,
        tabBarOptions: {
            activeTintColor: 'black',
            labelStyle: {
                fontSize: 13,
            },
            style: {
                backgroundColor: 'lightgray',
                padding: -10
            },
            // showLabel: false    
        },
    }

);

const App = createAppContainer(TabNavigator);

AppRegistry.registerComponent('CodeDemo_TabNavigator', () => App);
