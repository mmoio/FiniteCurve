import React from 'react';
import { View } from 'react-native';
import BorderText from '../../components/BorderText';
import CenteredView from '../../components/CenteredView';
import CharacterBackground from '../CharacterBackground';
import { CharacterProps } from '../types';

const CharacterItem: React.FC<CharacterProps & { onPress: () => void }> = ({ character, onPress }) => {
	return (
		<CharacterBackground
			onPress={onPress}
			status={character.status}
			resizeMode="cover"
			source={{ uri: character.image }}
		>
			<View style={{ marginBottom: 10 }}>
				<BorderText fontSize={22}>{character.name}</BorderText>
				<CenteredView>
					<BorderText>{character.status + ' - ' + character.species}</BorderText>
				</CenteredView>
			</View>
		</CharacterBackground>
	);
};

export default CharacterItem;
