import { createTheme, createBox, createText } from '@shopify/restyle';

const palette = {
	primary: '#026AFF',
	darkPrimary: '#005AD4',

	black: '#0B0B0B',
	white: '#F0F2F3',
};

const theme = createTheme({
	colors: {
		mainBackground: palette.white,
		primary: palette.primary,
		textColor: palette.white,
		light: palette.white,
	},
	spacing: {
		s: 8,
		m: 16,
		l: 24,
		xl: 40,
	},
	borderRadii: {
		s: 8,
	},
	breakpoints: {
		phone: 0,
		tablet: 768,
	},
	textVariants: {
		header: {
			fontFamily: 'Raleway-Semibold',
			fontSize: 34,
			color: 'textColor',
		},
		subheader: {
			fontFamily: 'Raleway-Regular',
			fontSize: 28,
			color: 'textColor',
		},
		body: {
			fontFamily: 'Raleway-Regular',
			fontSize: 16,
			color: 'textColor',
		},
	},
});

const Text = createText();
const Box = createBox();

export { theme, Text, Box };
