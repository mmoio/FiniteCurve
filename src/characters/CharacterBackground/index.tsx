import React from 'react';
import DarkenedBackground from '../../components/DarkenedBackground';
import { DarkenedBackgroundProps } from '../../components/types';
import { CharacterStatus } from '../types';

const selectStatusColor = (status: CharacterStatus) => {
	switch (status) {
		case CharacterStatus.DEAD:
			return 'red';
		case CharacterStatus.ALIVE:
			return 'green';
		default:
			return 'gray';
	}
};

export const CharacterBackground: React.FC<DarkenedBackgroundProps & { status: CharacterStatus }> = (props) => {
	return (
		<DarkenedBackground {...props} style={[props.style, { borderColor: selectStatusColor(props.status) }]}>
			{props.children}
		</DarkenedBackground>
	);
};

export default CharacterBackground;
