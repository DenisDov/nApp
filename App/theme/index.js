import { createTheme, createBox, createText } from '@shopify/restyle';

const palette = {
	blue: '#026AFF',
	darkBlue: '#005AD4',
	black: '#121212',
	lightGray: '#F0F2F3',
	white: '#ffffff',
	red: '#B00020', // error for light theme
	purple: '#CF6679', // error for dark theme
};

const theme = createTheme({
	colors: {
		primary: palette.blue,
		primaryDark: palette.darkBlue,
		background: palette.lightGray,
		// card: 'rgb(255, 255, 255)',
		text: palette.black,
		light: palette.white,
		border: palette.black,
		error: palette.red,
		// notification: 'rgb(255, 69, 58)',
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
			color: 'text',
		},
		subheader: {
			fontFamily: 'Raleway-Regular',
			fontSize: 28,
			color: 'text',
		},
		body: {
			fontFamily: 'Raleway-Regular',
			fontSize: 16,
			color: 'text',
		},
	},
});

const darkTheme = {
	...theme,
	colors: {
		...theme.colors,
		background: palette.black,
		text: palette.lightGray,
		border: palette.lightGray,
		error: palette.purple,
	},
};

const Text = createText();
const Box = createBox();

export { theme, darkTheme, Text, Box };
