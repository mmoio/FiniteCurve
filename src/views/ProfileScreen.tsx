import { useQuery } from '@apollo/client';
import React from 'react';
import { Text } from 'react-native';
import { query } from '../api/queries';
import Profile from '../characters/Profile';
import { ProfileProps } from '../characters/types';

const ProfileScreen: React.FC<ProfileProps> = (props) => {
	const { characterId } = props.route.params;
	const { data, loading } = useQuery(query.character(characterId));
	return loading ? <Text> Loading </Text> : <Profile character={data.character} />;
};

export default ProfileScreen;
