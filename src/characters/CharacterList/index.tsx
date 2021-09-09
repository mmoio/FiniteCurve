import React from 'react';
import { CharacterListProps } from '../types';
import CharacterItem from '../Character';
import GridList from '../../components/GridList';
import Loading from '../../components/Loading';

const CharacterList: React.FC<CharacterListProps> = (props) => (
	<GridList
		data={props.characters}
		renderItem={({ item }) => <CharacterItem onPress={() => props.onPress(item.id)} character={item} />}
		onEndReached={props.onEndReached}
		ListFooterComponent={<Loading loading={props.loading} />}
	/>
);

export default CharacterList;
