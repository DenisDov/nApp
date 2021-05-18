import React from 'react';
import { useColorScheme, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import AppNavigator from './Navigation';

import Network from './components/Network';

import store from './redux/configureStore';

const App = () => {
	const isDarkMode = useColorScheme() === 'dark';
	console.log('isDarkMode: ', isDarkMode);

	return (
		<Provider store={store}>
			<Network>
				<SafeAreaProvider>
					<StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
					<AppNavigator />
				</SafeAreaProvider>
			</Network>
		</Provider>
	);
};

export default App;

// rnfe
