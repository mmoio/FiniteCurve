import React from 'react';
import { CharacterListProps } from '../types';
import CharacterItem from '../Character';
import GridList from '../../components/GridList';

const CharacterList: React.FC<CharacterListProps & { onPress: (id: string) => void }> = (props) => {
	return (
		<GridList
			data={props.characters}
			renderItem={({ item }) => <CharacterItem onPress={() => props.onPress(item.id)} character={item} />}
			keyExtractor={(item) => item.id}
			onEndReached={props.onEndReached}
			onEndReachedThreshold={0.2}
		/>
	);
};

export default CharacterList;
