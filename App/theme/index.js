import {
	createTheme,
	createBox,
	createText,
	createRestyleComponent,
	createVariant,
} from '@shopify/restyle';

import Animated from 'react-native-reanimated';
import FastImage from 'react-native-fast-image';

const palette = {
	blue: '#026AFF',
	darkBlue: '#005AD4',
	dark: '#121212',
	gray: '#1E1E1E',
	black: '#000000',
	lightGray: '#F0F2F3',
	white: '#ffffff',
	red: '#B00020', // error for light theme
	purple: '#CF6679', // error for dark theme
};

const theme = createTheme({
	colors: {
		primary: palette.blue,
		primaryDark: palette.darkBlue,
		background: palette.white,
		// card: 'rgb(255, 255, 255)',
		text: palette.black,
		light: palette.white,
		border: palette.dark,
		error: palette.red,
		surface: palette.white,
		shadow: palette.black,
		// notification: 'rgb(255, 69, 58)',
	},
	spacing: {
		xs: 4,
		s: 8,
		m: 16,
		l: 24,
		xl: 40,
	},
	borderRadii: {
		s: 8,
		xl: 50,
	},
	breakpoints: {
		phone: 0,
		tablet: 768,
	},
	textVariants: {
		defaults: {
			fontFamily: 'Raleway-Regular',
			color: 'text',
			fontSize: 16,
		},
		regular: {
			fontSize: 14,
		},
		header: {
			fontFamily: 'Raleway-SemiBold',
			fontSize: 34,
			color: 'text',
		},
		subheader: {
			fontFamily: 'Raleway-Regular',
			fontSize: 28,
			color: 'text',
		},
		title: {
			fontFamily: 'SquadaOne-Regular',
			fontSize: 18,
		},
	},
	cardVariants: {
		defaults: {
			borderRadius: 's',
			backgroundColor: 'surface',
		},
		elevated: {
			shadowColor: 'shadow',
			shadowOpacity: 0.2,
			shadowOffset: { width: 0, height: 5 },
			shadowRadius: 15,
			elevation: 5,
		},
	},
});

const darkTheme = {
	...theme,
	colors: {
		...theme.colors,
		background: palette.dark,
		text: palette.white,
		border: palette.lightGray,
		error: palette.purple,
		surface: palette.gray,
	},
};

const Text = createText();
const Box = createBox();
const Card = createRestyleComponent([createVariant({ themeKey: 'cardVariants' })], Box);
const ImageBox = createBox(FastImage);
const AnimatedBox = createBox(Animated.View);
const AnimatedText = createText(Animated.Text);

export { theme, darkTheme, Text, Box, Card, ImageBox, AnimatedBox, AnimatedText };
