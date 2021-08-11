import React from 'react';
import {FlatList} from 'react-native';
import {CharacterListProps, Character} from '../../types';
import CharacterItem from '../Character';

const CharacterList: React.FC<CharacterListProps> = (props) => {
	return (
		<FlatList
			data={props.characters}
			renderItem={({ item }) => <CharacterItem character={item}/>}
			keyExtractor={item => item.id}
			numColumns={2}
			contentContainerStyle={{
				alignItems: 'flex-start',
				justifyContent: 'flex-start',
			}}
			style={{ gap: 70 }}
		/>
	);
}

export default CharacterList;
