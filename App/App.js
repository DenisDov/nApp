import React from 'react';
import { useColorScheme, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from '@shopify/restyle';
import { theme, darkTheme } from './theme';

import AppNavigator from './Navigation';

import Network from './components/Network';

import store from './redux/configureStore';

const App = () => {
	const isDarkMode = useColorScheme() === 'dark';
	console.log('isDarkMode: ', isDarkMode);

	return (
		<Provider store={store}>
			<ThemeProvider theme={isDarkMode ? darkTheme : theme}>
				<SafeAreaProvider>
					<StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
					<Network>
						<AppNavigator />
					</Network>
				</SafeAreaProvider>
			</ThemeProvider>
		</Provider>
	);
};

export default App;

// rnfe
