import { storiesOf } from '@storybook/react-native';
import { CenterView } from '../storybook/stories/CenterView';
import React from 'react';
import { CustomButton } from './CustomButton';

storiesOf('Atoms/CustomButton', module)
	.addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
	.add('confirm', () => (
		<CustomButton />
	));
