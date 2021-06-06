import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import RNBootSplash from 'react-native-bootsplash';
import { useTheme } from '@shopify/restyle';
// Screens start
import LoginScreen from '../App/screens/auth/LoginScreen';
import RegisterScreen from '../App/screens/auth/RegisterScreen';
import ForgotPassword from '../App/screens/auth/ForgotPassword';

import HomeScreen from '../App/screens/home/HomeScreen';
import DetailScreen from '../App/screens/home/DetailScreen';
import SettingsScreen from '../App/screens/home/SettingsScreen';
// Screens end

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen name="Home" component={HomeScreen} />
			<Stack.Screen
				name="Detail"
				component={DetailScreen}
				options={{
					headerTransparent: true,
					headerTitle: '',
				}}
			/>
		</Stack.Navigator>
	);
};

const AppTabs = () => {
	const { t } = useTranslation();
	const theme = useTheme();
	return (
		<Tab.Navigator
			screenOptions={({ route }) => ({
				headerShown: false,
				activeTintColor: theme.colors.primary,
				inactiveTintColor: 'gray',
				tabBarIcon: ({ focused, color, size }) => {
					let iconName;

					if (route.name === 'Home') {
						iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
					} else if (route.name === 'Settings') {
						iconName = focused ? 'ios-list-box' : 'ios-list';
					}

					// You can return any component that you like here!
					return <Ionicons name={iconName} size={size} color={color} />;
				},
			})}>
			<Tab.Screen name="Home" component={HomeStack} />
			<Tab.Screen name="Settings" component={SettingsScreen} options={{ title: t('settings') }} />
		</Tab.Navigator>
	);
};

const AppNavigator = ({ theme }) => {
	const { t } = useTranslation();
	const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
	return (
		<NavigationContainer theme={theme} onReady={() => RNBootSplash.hide({ fade: true })}>
			{isAuthenticated ? (
				<AppTabs />
			) : (
				<Stack.Navigator screenOptions={{ headerMode: 'none' }}>
					<Stack.Screen name="Login" component={LoginScreen} />
					<Stack.Screen name="Register" component={RegisterScreen} />
					<Stack.Screen name="ForgotPassword" component={ForgotPassword} />
				</Stack.Navigator>
			)}
		</NavigationContainer>
	);
};

export default AppNavigator;
