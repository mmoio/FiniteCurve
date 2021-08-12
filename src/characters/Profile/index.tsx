import React from 'react';
import DarkenedBackground from '../../components/DarkenedBackground';
import { ProfileProps } from '../types';
import { Text } from 'react-native';
import CenteredView from '../../components/CenteredView';

const Profile: React.FC<ProfileProps> = (props) => {
	return (
		<>
			<DarkenedBackground width={'100%'} source={{ uri: props.character.image }} />
			<CenteredView>
				<Text> { props.character.name } </Text>
			</CenteredView>
			<CenteredView>
				<Text> { props.character.status + ' - ' + props.character.species } </Text>
			</CenteredView>
			<CenteredView>
				<Text> { props.character.location.name } </Text>
			</CenteredView>
		</>
	);
};

export default Profile;
