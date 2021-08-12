import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { CharacterListProps } from '../../types';
import CharacterList from './index';

const props: CharacterListProps = {
	characters: [
		{
			name: 'Rick Sanchez',
			species: 'Human',
			status: 'Alive',
			image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
			id: '1',
		},
		{
			name: 'Morty Smith',
			species: 'Human',
			status: 'Alive',
			image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
			id: '2',
		},
		{
			name: 'Summer Smith',
			species: 'Human',
			status: 'Alive',
			image: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg',
			id: '3',
		},
		{
			name: 'Beth Smith',
			species: 'Human',
			status: 'Alive',
			image: 'https://rickandmortyapi.com/api/character/avatar/4.jpeg',
			id: '4',
		},
		{
			name: 'Jerry Smith',
			species: 'Human',
			status: 'Alive',
			image: 'https://rickandmortyapi.com/api/character/avatar/5.jpeg',
			id: '5',
		},
		{
			name: 'Abadango Cluster Princess',
			species: 'Alien',
			status: 'Alive',
			image: 'https://rickandmortyapi.com/api/character/avatar/6.jpeg',
			id: '6',
		},
		{
			name: 'Abradolf Lincler',
			species: 'Human',
			status: 'unknown',
			image: 'https://rickandmortyapi.com/api/character/avatar/7.jpeg',
			id: '7',
		},
		{
			name: 'Adjudicator Rick',
			species: 'Human',
			status: 'Dead',
			image: 'https://rickandmortyapi.com/api/character/avatar/8.jpeg',
			id: '8',
		},
		{
			name: 'Agency Director',
			species: 'Human',
			status: 'Dead',
			image: 'https://rickandmortyapi.com/api/character/avatar/9.jpeg',
			id: '9',
		},
		{
			name: 'Alan Rails',
			species: 'Human',
			status: 'Dead',
			image: 'https://rickandmortyapi.com/api/character/avatar/10.jpeg',
			id: '10',
		},
		{
			name: 'Albert Einstein',
			species: 'Human',
			status: 'Dead',
			image: 'https://rickandmortyapi.com/api/character/avatar/11.jpeg',
			id: '11',
		},
		{
			name: 'Alexander',
			species: 'Human',
			status: 'Dead',
			image: 'https://rickandmortyapi.com/api/character/avatar/12.jpeg',
			id: '12',
		},
		{
			name: 'Alien Googah',
			species: 'Alien',
			status: 'unknown',
			image: 'https://rickandmortyapi.com/api/character/avatar/13.jpeg',
			id: '13',
		},
		{
			name: 'Alien Morty',
			species: 'Alien',
			status: 'unknown',
			image: 'https://rickandmortyapi.com/api/character/avatar/14.jpeg',
			id: '14',
		},
		{
			name: 'Alien Rick',
			species: 'Alien',
			status: 'unknown',
			image: 'https://rickandmortyapi.com/api/character/avatar/15.jpeg',
			id: '15',
		},
		{
			name: 'Amish Cyborg',
			species: 'Alien',
			status: 'Dead',
			image: 'https://rickandmortyapi.com/api/character/avatar/16.jpeg',
			id: '16',
		},
		{
			name: 'Annie',
			species: 'Human',
			status: 'Alive',
			image: 'https://rickandmortyapi.com/api/character/avatar/17.jpeg',
			id: '17',
		},
		{
			name: 'Antenna Morty',
			species: 'Human',
			status: 'Alive',
			image: 'https://rickandmortyapi.com/api/character/avatar/18.jpeg',
			id: '18',
		},
		{
			name: 'Antenna Rick',
			species: 'Human',
			status: 'unknown',
			image: 'https://rickandmortyapi.com/api/character/avatar/19.jpeg',
			id: '19',
		},
		{
			name: 'Ants in my Eyes Johnson',
			species: 'Human',
			status: 'unknown',
			image: 'https://rickandmortyapi.com/api/character/avatar/20.jpeg',
			id: '20',
		},
	],
};

storiesOf('Character', module).add('List', () => <CharacterList {...props} />);
