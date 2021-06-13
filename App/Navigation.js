import * as React from 'react';
import { NavigationContainer, getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import RNBootSplash from 'react-native-bootsplash';
// import { useTheme } from '@shopify/restyle';
// Screens start
import LoginScreen from '../App/screens/auth/LoginScreen';
import RegisterScreen from '../App/screens/auth/RegisterScreen';
import ForgotPassword from '../App/screens/auth/ForgotPassword';

import HomeScreen from '../App/screens/home/HomeScreen';
import DetailScreen from '../App/screens/home/DetailScreen';
import SettingsScreen from '../App/screens/home/SettingsScreen';
// Screens end

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

function getHeaderTitle(route) {
	// If the focused route is not found, we need to assume it's the initial screen
	// This can happen during if there hasn't been any navigation inside the screen
	// In our case, it's "Home" as that's the first screen inside the navigator
	const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home';

	switch (routeName) {
		case 'HomeTab':
			return 'Home';
		case 'SettingsTab':
			return 'Settings';
	}
}

const AppTabs = () => {
	// const { t } = useTranslation();
	// const theme = useTheme();
	return (
		<Tab.Navigator
			activeColor="#f0edf6"
			inactiveColor="#3e2465"
			labeled={false}
			screenOptions={({ route }) => ({
				tabBarIcon: ({ focused, color }) => {
					let iconName;

					if (route.name === 'HomeTab') {
						iconName = focused ? 'ios-home' : 'ios-home-outline';
					} else if (route.name === 'SettingsTab') {
						iconName = focused ? 'settings-sharp' : 'settings-outline';
					}

					return <Ionicons name={iconName} size={24} color={color} />;
				},
			})}>
			<Tab.Screen name="HomeTab" component={HomeScreen} />
			<Tab.Screen name="SettingsTab" component={SettingsScreen} />
		</Tab.Navigator>
	);
};

const AppNavigator = ({ theme }) => {
	const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
	return (
		<NavigationContainer theme={theme} onReady={() => RNBootSplash.hide({ fade: true })}>
			<Stack.Navigator>
				{isAuthenticated ? (
					<Stack.Group>
						<Stack.Screen
							name="Home"
							component={AppTabs}
							options={({ route }) => ({
								headerTitle: getHeaderTitle(route),
							})}
						/>
						<Stack.Screen
							name="Detail"
							component={DetailScreen}
							options={{
								headerTranslucent: true,
								headerTitle: '',
								headerShadowVisible: false,
							}}
						/>
					</Stack.Group>
				) : (
					<Stack.Group screenOptions={{ headerMode: 'none' }}>
						<Stack.Screen name="Login" component={LoginScreen} />
						<Stack.Screen name="Register" component={RegisterScreen} />
						<Stack.Screen name="ForgotPassword" component={ForgotPassword} />
					</Stack.Group>
				)}
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default AppNavigator;
