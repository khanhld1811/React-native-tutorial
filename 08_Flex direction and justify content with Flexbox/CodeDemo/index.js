/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import FlexExample from './components/FlexExample';
import JustifyContentExample from './components/JustifyContentExample';

AppRegistry.registerComponent(appName, () => JustifyContentExample);
