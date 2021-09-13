import React from 'react';
import { ProfileProps } from '../types';
import { Text, View } from 'react-native';
import VerticalView from '../../components/VerticalView';
import BorderText from '../../components/BorderText';
import CharacterBackground from '../CharacterBackground';

const Profile: React.FC<ProfileProps> = (props) => {
	return (
		<>
			<CharacterBackground
				style={{ width: '100%', alignItems: 'flex-start', justifyContent: 'flex-start' }}
				source={{ uri: props.character.image }}
				status={props.character.status}
			>
				<View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between' }}>
					<BorderText fontSize={60}>{props.character.name}</BorderText>
					<BorderText fontSize={14}>{props.character.status}</BorderText>
				</View>
			</CharacterBackground>
			<View style={{ marginVertical: 5 }} />
			<VerticalView>
				<Text>
					First appeared in episode: {props.character.episode[0].episode + ' ' + props.character.episode[0].name}
				</Text>
				<View style={{ marginVertical: '1%' }} />
				<Text>{props.character.species + ' race'}</Text>
				<View style={{ marginVertical: '1%' }} />
				<Text>Last known location: </Text>
				<Text>{props.character.location.name}</Text>
			</VerticalView>
		</>
	);
};

export default Profile;
