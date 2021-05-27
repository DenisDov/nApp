import { createTheme, createBox, createText } from '@shopify/restyle';

const palette = {
	purpleLight: '#8C6FF7',
	purplePrimary: '#5A31F4',
	purpleDark: '#3F22AB',

	greenLight: '#56DCBA',
	greenPrimary: '#0ECD9D',
	greenDark: '#0A906E',

	black: '#0B0B0B',
	white: '#F0F2F3',
};

const theme = createTheme({
	colors: {
		mainBackground: palette.white,
		cardPrimaryBackground: palette.purplePrimary,
		textColor: palette.white,
	},
	spacing: {
		s: 8,
		m: 16,
		l: 24,
		xl: 40,
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
			// fontFamily: 'ShopifySans-SemiBold',
			fontWeight: '400',
			fontSize: 28,
			color: 'textColor',
		},
		body: {
			// fontFamily: 'ShopifySans',
			fontSize: 16,
			color: 'textColor',
		},
	},
});

const Text = createText();
const Box = createBox();

export { theme, Text, Box };
