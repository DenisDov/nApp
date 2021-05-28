import { createTheme, createBox, createText } from '@shopify/restyle';

const palette = {
	blue: '#026AFF',
	black: '#0B0B0B',
	lightGray: '#F0F2F3',
};

const theme = createTheme({
	colors: {
		mainBackground: palette.lightGray,
		primary: palette.blue,
		textColor: palette.black,
		light: palette.lightGray,
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

const darkTheme = {
	...theme,
	colors: {
		...theme.colors,
		mainBackground: palette.black,
		// primary: palette.blue,
		textColor: palette.lightGray,
		// light: palette.lightGray,
	},
};

const Text = createText();
const Box = createBox();

export { theme, darkTheme, Text, Box };
