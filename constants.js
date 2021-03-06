import { Dimensions } from "react-native"

const window_ = Dimensions.get('window');
export const HEIGHT = window_.height;
export const WIDTH = window_.width;

export const COLORS = {
	primary: '#FFFFFF',
	secondary: '#05960B',

	white: '#FFFFFF',
	black: '#000000',
	gray: '#111111',
	green: '#05960B',
	orange: '#DD8D42'
}

export const SIZES = {
	// global sizes
	base: 8,
	font: 14,
	radius: 20,
	padding: 24,

	// font sizes
	h1: 30,
	h2: 22,
	h3: 16,
	h4: 14,
	body1: 30,
	body2: 22,
	body3: 16,
	body4: 14,
	body5: 12,
}

