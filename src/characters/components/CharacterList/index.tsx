import React from 'react';
import { CharacterListProps, Character } from '../../types';
import CharacterItem from '../Character';
import GridList from '../../../components/GridList';

const CharacterList: React.FC<CharacterListProps> = (props) => {
	return (
		<GridList
			data={props.characters}
			renderItem={({ item }) => <CharacterItem character={item} /> }
			keyExtractor={(item) => item.id}
		/>
	);
};

export default CharacterList;
