import {ImageBackgroundProps, TouchableOpacityProps} from "react-native";

export declare type LightBackgroundStyle = {
	style?: {
		width?: string;
		height?: string;
		alignItems?: string;
		justifyContent?: string;
		borderColor?: string;
	};
};

export declare type DarkenedBackgroundProps = ImageBackgroundProps & TouchableOpacityProps & LightBackgroundStyle
