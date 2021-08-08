import { AppRegistry } from 'react-native';
import { getStorybookUI, configure } from '@storybook/react-native';
import { name as appName } from '../package.json';
import { Platform } from 'react-native';

import { loadStories } from './storyLoader';

import './rn-addons';

// import stories
configure(() => {
	loadStories();
}, module);

// Refer to https://github.com/storybookjs/storybook/tree/master/app/react-native#start-command-parameters
// To find allowed options for getStorybookUI
const StorybookUI= getStorybookUI({
	host: Platform.OS === 'android' ? '10.0.2.2' : '0.0.0.0',
});

AppRegistry.registerComponent(appName, () => StorybookUI);

export default StorybookUI;
