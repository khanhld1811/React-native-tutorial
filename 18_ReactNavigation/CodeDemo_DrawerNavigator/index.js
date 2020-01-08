/**
 * @format
 */

import {AppRegistry, Dimensions } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
//Component
import HomeComponent from './components/HomeComponent';
import InfoComponent from './components/InfoComponent';
import SettingsComponent from './components/SettingsComponent';
import CloudComponent from './components/CloudComponent';

//Screen names
import {Home, Info, Settings, Cloud } from './screenNames';
//Screen size
var {height, width} = Dimensions.get('window');

let routeConfigs = {
    Home:{
        path:'/',
        screen:HomeComponent,
    },
    Info:{
        path:'/info',
        screen:InfoComponent,
    },
    Settings:{
        screen:SettingsComponent,
    },
    Cloud:{
        screen: CloudComponent,
    },
};

let drawerNavigatorConfig = {    
    initialRouteName: Home,
    drawerWidth: width / 2,
    drawerPosition: 'left',
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',  
    // drawerBackgroundColor: 'orange',
    contentOptions: {
        activeTintColor: 'red',
    },
    order: [Info, Settings, Cloud, Home]
};

const DrawerNavigator = createDrawerNavigator(routeConfigs, drawerNavigatorConfig);
const App = createAppContainer(DrawerNavigator);
AppRegistry.registerComponent('CodeDemo_DrawerNavigator', () => App);
