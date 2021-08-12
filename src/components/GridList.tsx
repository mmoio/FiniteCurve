import React from 'react';
import { FlatListProps, FlatList, View } from 'react-native';

export declare type GridListProps<T> = FlatListProps<T>;

const GridList = function <T>(props: GridListProps<T>): any {
	return (
		<FlatList
			{...props}
			columnWrapperStyle={{justifyContent: 'space-evenly'}}
			ItemSeparatorComponent={
				() => <View style={{ padding: 5 }}/>
			}
			style={{ marginVertical: 5 }}
			numColumns={2}
		/>
	);
};
export default GridList;
