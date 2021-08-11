import { useQuery, gql } from '@apollo/client';
import React from 'react';
import { Text } from 'react-native';
import CharacterItem from '../characters/components/Character';
import {Character } from '../characters/types';

const CHAPTERS_QUERY = gql`
	query {
		character(id: ${Math.floor(Math.random() * 100)}) {
			name,
			image,
			status,
			species,
		}
	}
`;

const FiniteCurveScreen: React.FC = () => {
	const { data, loading } = useQuery(CHAPTERS_QUERY);
	return loading ? (
		<Text> Loading </Text>
	) : (
		<CharacterItem character={data.character as Character} />
	);
};

export default FiniteCurveScreen;
