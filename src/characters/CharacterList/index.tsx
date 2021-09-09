import React from 'react';
import { Text, View, ActivityIndicator } from 'react-native';
import { CharacterListProps } from '../types';
import CharacterItem from '../Character';
import GridList from '../../components/GridList';

const BottomLoadingIndicator = ({ loading }) =>
	loading ? <ActivityIndicator style={{ padding: 10 }} size="large" color="black" /> : <View style={{ marginVertical: 10 }} />;

const CharacterList: React.FC<CharacterListProps> = (props) => (
	<GridList
		data={props.characters}
		renderItem={({ item }) => <CharacterItem onPress={() => props.onPress(item.id)} character={item} />}
		onEndReached={props.onEndReached}
		ListFooterComponent={<BottomLoadingIndicator loading={props.loading} />}
	/>
);

export default CharacterList;
