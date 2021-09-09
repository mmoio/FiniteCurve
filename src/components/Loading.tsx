import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import CenteredView from './CenteredView';

const Loading: React.FC<{ loading?: boolean }> = ({ loading }) =>
	loading ? (
		<CenteredView>
			<ActivityIndicator style={{ padding: 10 }} size="large" color="black" />
		</CenteredView>
	) : (
		<View style={{ padding: 10 }} />
	);

export default Loading;
