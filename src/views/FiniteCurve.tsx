import { useQuery, gql } from '@apollo/client';
import React from 'react';
import { Text } from 'react-native';
import CharacterList from '../characters/CharacterList';
import {Character } from '../characters/types';

const CHAPTERS_QUERY = gql`
query {
  characters(page: 1) {
    results {
			name,
			species,
			status,
			image,
			id
		}
  }
}
`;

const FiniteCurveScreen: React.FC = () => {
	const { data, loading } = useQuery(CHAPTERS_QUERY);
	return loading ? (
		<Text> Loading </Text>
	) : (
		<CharacterList characters={data.characters.results as Character[]} />
	);
};

export default FiniteCurveScreen;
