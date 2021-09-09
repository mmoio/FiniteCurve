import {useQuery} from '@apollo/client';
import React from 'react';
import {query} from '../api/queries';
import Profile from '../characters/Profile';
import {ProfileProps} from '../characters/types';
import Loading from '../components/Loading';

const ProfileScreen: React.FC<ProfileProps> = (props) => {
	const { characterId } = props.route.params;
	const { data, loading } = useQuery(query.character(characterId));
	return loading ? <Loading loading/> : <Profile character={data.character} />;
};

export default ProfileScreen;
