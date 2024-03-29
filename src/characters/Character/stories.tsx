import React from 'react';

import Character from './index';
import { CharacterProps } from '../../types';
import {storiesOf} from '@storybook/react-native';

const props: CharacterProps = {
	character: {
		name: 'Rick Sanchez',
		species: 'Human',
		status: 'Alive',
		image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
	},
};

storiesOf('Character', module).add('Item', () => ( <Character {...props} />));
