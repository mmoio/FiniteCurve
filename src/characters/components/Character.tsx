import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { CharacterProps } from '../types';
import BorderText from '../../components/BorderText';
import DarkenedBackground from '../../components/DarkenedBackground';
import CenteredView from '../../components/CenteredView';

const CharacterItem: React.FC<CharacterProps> = ({ character }) => {
	return (
		<DarkenedBackground
			resizeMode='cover'
			source={{ uri: character.image }}
		>
			<View style={{ marginBottom: 20 }}>
				<BorderText fontSize={42}>
					{character.name}
				</BorderText>
				<CenteredView>
					<BorderText>
						{character.status + ' - ' + character.species}
					</BorderText>
				</CenteredView>
			</View>
		</DarkenedBackground>
	);
};

export default CharacterItem;
