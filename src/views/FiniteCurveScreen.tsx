import React, {useState} from 'react';
import { Text } from 'react-native';
import CharacterList from '../characters/CharacterList';
import useCharacters from '../hooks/useCharacters';
import { Character } from '../characters/types';

const FiniteCurveScreen: React.FC = ({ navigation }) => {
	const { characters, loading, loadMore, hasMore } = useCharacters();
	return loading ? (
		<Text> Loading </Text>
	) : (
		<CharacterList
			onPress={(id: string) => navigation.navigate('Profile', { characterId: id })}
			characters={characters as Character[]}
			onEndReached={ loadMore }
			loading={ hasMore }
		/>
	);
};

export default FiniteCurveScreen;
