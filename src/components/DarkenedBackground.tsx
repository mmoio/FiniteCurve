import React from 'react';
import { Dimensions, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { DarkenedBackgroundProps, LightBackgroundStyle } from './types';

export const LightBackground = styled.ImageBackground`
	align-items: ${({ style }: LightBackgroundStyle) => style?.alignItems || 'center'};
	border-color: ${({ style }: LightBackgroundStyle) => style?.borderColor || 'black'};
	border-width: 2px;
	display: flex;
	height: ${({ style }: LightBackgroundStyle) => style?.height || Dimensions.get('screen').height * 0.3 + 'px'};
	justify-content: ${({ style }: LightBackgroundStyle) => style?.justifyContent || 'flex-end'};
	opacity: 0.8;
	width: ${({ style }: LightBackgroundStyle) => style?.width || Dimensions.get('screen').width * 0.48 + 'px'};
`;

export const DarkLayer = styled.View`
	display: flex;
	position: absolute;
	background-color: black;
	opacity: 0.4;
	height: 101%;
	width: 100%;
`;

const DarkenedBackground: React.FC<DarkenedBackgroundProps> = (props) => {
	const innerComponent = (
		<LightBackground {...props}>
			<DarkLayer />
			{props.children}
		</LightBackground>
	);
	return props.onPress ? (
		<TouchableOpacity onPress={props.onPress}>{innerComponent}</TouchableOpacity>
	) : (
		<>{innerComponent}</>
	);
};

export default DarkenedBackground;
