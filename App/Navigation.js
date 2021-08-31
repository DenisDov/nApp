import React, { useEffect, useState } from 'react';
import { NavigationContainer, getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useSelector, useDispatch } from 'react-redux';
import RNBootSplash from 'react-native-bootsplash';
import LottieView from 'lottie-react-native';
import auth from '@react-native-firebase/auth';

import { setUser } from './redux/ducks/authSlice';
import isEmpty from './services/is-empty';

import i18n from './i18n';
// Screens start
import LoginScreen from '../App/screens/auth/LoginScreen';
import RegisterScreen from '../App/screens/auth/RegisterScreen';
import ForgotPassword from '../App/screens/auth/ForgotPassword';

import HomeScreen from '../App/screens/home/HomeScreen';
import DetailScreen from '../App/screens/home/DetailScreen';
import SettingsScreen from '../App/screens/home/SettingsScreen';
import SandboxScreen from '../App/screens/home/SandboxScreen';
// Screens end

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

function getHeaderTitle(route) {
	// If the focused route is not found, we need to assume it's the initial screen
	// This can happen during if there hasn't been any navigation inside the screen
	const routeName = getFocusedRouteNameFromRoute(route) ?? 'HomeTab';

	switch (routeName) {
		case 'HomeTab':
			return 'Home';
		case 'SettingsTab':
			return i18n.t('settings');
	}
}

const AppTabs = () => {
	const screenOptions = ({ route }) => ({
		tabBarIcon: ({ focused, color }) => {
			let iconName;

			if (route.name === 'HomeTab') {
				iconName = focused ? 'ios-home' : 'ios-home-outline';
			} else if (route.name === 'SettingsTab') {
				iconName = focused ? 'settings-sharp' : 'settings-outline';
			}

			return <Ionicons name={iconName} size={24} color={color} />;
		},
	});
	return (
		<Tab.Navigator
			activeColor="#f0edf6"
			inactiveColor="#3e2465"
			labeled={false}
			screenOptions={screenOptions}>
			<Tab.Screen name="HomeTab" component={HomeScreen} />
			<Tab.Screen name="SettingsTab" component={SettingsScreen} />
			<Tab.Screen name="SandboxTab" component={SandboxScreen} />
		</Tab.Navigator>
	);
};

const AppNavigator = ({ theme }) => {
	const [initializing, setInitializing] = useState(true);
	const dispatch = useDispatch();
	const isAuthenticated = !isEmpty(useSelector(state => state.auth.user));

	function onAuthStateChanged(user) {
		dispatch(setUser(user));
		if (initializing) setInitializing(false);
	}

	useEffect(() => {
		const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
		return subscriber;
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	if (initializing) {
		return (
			<LottieView
				source={require('./assets/lottie.json')}
				autoPlay
				loop
				style={{ backgroundColor: '#003144' }}
			/>
		);
	}

	return (
		<NavigationContainer theme={theme} onReady={() => RNBootSplash.hide()}>
			<Stack.Navigator>
				{isAuthenticated ? (
					<Stack.Group>
						<Stack.Screen
							name="Home"
							component={AppTabs}
							options={({ route }) => ({
								headerTitle: getHeaderTitle(route),
								headerTitleStyle: {
									fontFamily: 'SquadaOne-Regular',
								},
							})}
						/>
						<Stack.Screen
							name="Detail"
							component={DetailScreen}
							options={{
								headerTranslucent: true,
								headerTitle: '',
								headerShadowVisible: false,
								headerBackTitleVisible: false,
							}}
						/>
					</Stack.Group>
				) : (
					<Stack.Group screenOptions={{ headerShown: false }}>
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
