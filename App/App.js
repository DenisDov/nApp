import React from 'react';
import { useColorScheme, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from '@shopify/restyle';
import { DefaultTheme, DarkTheme } from '@react-navigation/native';
import FlashMessage from 'react-native-flash-message';
import { theme, darkTheme } from './theme';

import AppNavigator from './Navigation';

import Network from './components/Network';

import store from './redux/configureStore';

const navTheme = {
	...DefaultTheme,
	colors: {
		...DefaultTheme.colors,
		background: 'black',
	},
};

const App = () => {
	const isDarkMode = useColorScheme() === 'dark';
	console.log('isDarkMode: ', isDarkMode);

	return (
		<Provider store={store}>
			<ThemeProvider theme={isDarkMode ? darkTheme : theme}>
				<StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
				<SafeAreaProvider>
					<Network>
						<AppNavigator theme={isDarkMode ? DarkTheme : navTheme} />
						<FlashMessage position="top" />
					</Network>
				</SafeAreaProvider>
			</ThemeProvider>
		</Provider>
	);
};

export default App;

// rnfe
