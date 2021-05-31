import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import RNBootSplash from 'react-native-bootsplash';
// Screens start
import LoginScreen from '../App/screens/auth/LoginScreen';
import RegisterScreen from '../App/screens/auth/RegisterScreen';

import HomeScreen from '../App/screens/home/HomeScreen';
import SettingsScreen from '../App/screens/home/SettingsScreen';
// Screens end

const Stack = createStackNavigator();

const AppNavigator = ({ theme }) => {
	const { t } = useTranslation();
	const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
	return (
		<NavigationContainer theme={theme} onReady={() => RNBootSplash.hide({ fade: true })}>
			<Stack.Navigator>
				{!isAuthenticated ? (
					<Stack.Group screenOptions={{ headerMode: 'none' }}>
						<Stack.Screen name="Login" component={LoginScreen} />
						<Stack.Screen name="Register" component={RegisterScreen} />
					</Stack.Group>
				) : (
					<Stack.Group>
						<Stack.Screen name="Home" component={HomeScreen} />
						<Stack.Screen
							name="Settings"
							component={SettingsScreen}
							options={{ title: t('settings') }}
						/>
					</Stack.Group>
				)}
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default AppNavigator;
