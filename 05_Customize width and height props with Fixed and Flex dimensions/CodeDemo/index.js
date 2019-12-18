/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import FixedDimension from './components/FixedDimension';
import FlexDimension from './components/FlexDimension';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => FlexDimension);
