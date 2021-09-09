import React from 'react';
import { FlatListProps, FlatList, View } from 'react-native';

export declare type GridListProps<T> = FlatListProps<T>;

const GridList = function <T>(props: GridListProps<T>): any {
	return (
		<FlatList
			ItemSeparatorComponent={
				() => <View style={{ paddingVertical: 3 }}/>
			}
			columnWrapperStyle={{ justifyContent: 'space-around' }}
			numColumns={2}
			{...props}
		/>
	);
};
export default GridList;
