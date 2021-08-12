import { useQuery, gql } from '@apollo/client';
import React from 'react';
import { Text } from 'react-native';
import CharacterList from '../characters/CharacterList';
import { Character } from '../characters/types';
import { query } from '../api/queries';

const FiniteCurveScreen: React.FC = ({ navigation }) => {
	const { data, loading } = useQuery(query.characters);
	return loading ? (
		<Text> Loading </Text>
	) : (
		<CharacterList
			onPress={(id: string) => navigation.navigate('Profile', { characterId: id })}
			characters={data.characters.results as Character[]}
		/>
	);
};

export default FiniteCurveScreen;
