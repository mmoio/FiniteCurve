import React from 'react';
import { Text, View, ActivityIndicator } from 'react-native';
import { CharacterListProps } from '../types';
import CharacterItem from '../Character';
import GridList from '../../components/GridList';

const CharacterList: React.FC<CharacterListProps> = (props) => (
	<GridList
		data={props.characters}
		renderItem={({ item }) => <CharacterItem onPress={() => props.onPress(item.id)} character={item} />}
		keyExtractor={(item) => item.id}
		onEndReached={props.onEndReached}
		ListFooterComponent={() =>
			props.loading ? <ActivityIndicator color="black" /> : <View style={{ marginVertical: 10 }} />
		}
	/>
);

export default CharacterList;
