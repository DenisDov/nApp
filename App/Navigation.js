import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Screens start
import LoginScreen from '../App/screens/auth/LoginScreen';

import HomeScreen from '../App/screens/home/HomeScreen';
import SettingsScreen from '../App/screens/home/SettingsScreen';
// Screens end

const Stack = createStackNavigator();

const AppNavigator = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="Home" component={HomeScreen} />
				<Stack.Screen name="Login" component={LoginScreen} />
				<Stack.Screen name="Settings" component={SettingsScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default AppNavigator;
