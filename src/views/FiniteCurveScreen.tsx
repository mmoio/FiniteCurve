import { Character } from '../characters/types';
import CharacterList from '../characters/CharacterList';
import Loading from '../components/Loading';
import React from 'react';
import useCharacters from '../hooks/useCharacters';

const FiniteCurveScreen: React.FC = ({ navigation }) => {
	const { characters, loading, loadMore, hasMore } = useCharacters();
	return loading ? (
		<Loading loading/>
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
