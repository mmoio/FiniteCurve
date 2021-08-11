import { Platform } from 'react-native';
import {
	getStorybookUI,
	configure,
} from '@storybook/react-native';

import { loadStories } from './storyLoader';
import './rn-addons';

configure(() => loadStories(), module);

// Refer to
// https://github.com/storybookjs/storybook/tree/master/app/react-native#start-command-parameters
// To find allowed options for getStorybookUI
const StorybookUIRoot = getStorybookUI({
	host: Platform.OS === 'android' ? '10.0.2.2' : '0.0.0.0',
});

export default StorybookUIRoot;
