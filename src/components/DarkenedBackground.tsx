import React from 'react';
import { ImageBackgroundProps, TouchableOpacity, TouchableOpacityProps, Dimensions } from 'react-native';
import styled from 'styled-components/native';

export const LightBackground = styled.ImageBackground`
	display: flex;
	border-width: 2px;
	opacity: 0.8;
	align-items: center;
	justify-content: flex-end;
	width: ${({ width }) => width || Dimensions.get('screen').width * 0.48 + 'px'};
	height: ${({ height }) => height || Dimensions.get('screen').height * 0.3 + 'px'};
`;

export const DarkLayer = styled.View`
	display: flex;
	position: absolute;
	background-color: black;
	opacity: 0.4;
	height: 101%;
	width: 100%;
`;

const DarkenedBackground: React.FC<ImageBackgroundProps & TouchableOpacityProps> = (props) => {
	return (
		<TouchableOpacity onPress={props.onPress}>
			<LightBackground {...props}>
				<DarkLayer />
				{props.children}
			</LightBackground>
		</TouchableOpacity>
	);
};

export default DarkenedBackground;
