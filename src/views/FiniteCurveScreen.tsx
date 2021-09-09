import React, {useState} from 'react';
import { Text } from 'react-native';
import CharacterList from '../characters/CharacterList';
import useCharacters from '../hooks/useCharacters';
import { Character } from '../characters/types';

const FiniteCurveScreen: React.FC = ({ navigation }) => {
	const { characters, loading, loadMore } = useCharacters();
	return loading ? (
		<Text> Loading </Text>
	) : (
		<CharacterList
			onPress={(id: string) => navigation.navigate('Profile', { characterId: id })}
			characters={characters as Character[]}
			onEndReached={ loadMore }
		/>
	);
};

export default FiniteCurveScreen;
