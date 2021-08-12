import styled from 'styled-components/native';
import React from 'react';
import {ImageBackgroundProps} from 'react-native';

const LightBackground = styled.ImageBackground`
  display: flex;
  border-width: 2px;
  opacity: 0.8;
  align-items: center;
  justify-content: flex-end;
	width: 180px;
	height: 200px;
`

const DarkLayer = styled.View`
	display: flex;
	position: absolute;
	background-color: black;
	opacity: 0.4;
	height: 101%;
	width: 100%;
`

const DarkenedBackground: React.FC<ImageBackgroundProps> = (props) => {
	return (
		<LightBackground {...props}>
			<DarkLayer/>
			{props.children}
		</LightBackground>
	);
}

export default DarkenedBackground;
