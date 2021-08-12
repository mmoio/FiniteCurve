import React from 'react';
import { View } from 'react-native';
import BorderText from '../../components/BorderText';
import CenteredView from '../../components/CenteredView';
import DarkenedBackground from '../../components/DarkenedBackground';
import { CharacterProps } from '../types';

const CharacterItem: React.FC<CharacterProps & { onPress: () => void }> = ({ character, onPress }) => {
	return (
		<DarkenedBackground onPress={onPress} resizeMode='cover' source={{ uri: character.image }}>
			<View style={{ marginBottom: 20 }}>
				<BorderText fontSize={22}>{character.name}</BorderText>
				<CenteredView>
					<BorderText>{character.status + ' - ' + character.species}</BorderText>
				</CenteredView>
			</View>
		</DarkenedBackground>
	);
};

export default CharacterItem;
