import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { Card, Box, Text } from '../../theme';

import Body from '../../components/Body';
import Button from '../../components/Button';

import { logout } from '../../redux/ducks/authSlice';

const SettingsScreen = () => {
	const dispatch = useDispatch();
	const user = useSelector(state => state.auth.user);

	return (
		<Body>
			<ScrollView style={styles.scrollView}>
				<Card variant="elevated" marginHorizontal="s" marginTop="s">
					<Box padding="s">
						<Text variant="title" marginBottom="m">
							User
						</Text>
						<Box flexDirection="row" alignItems="center" justifyContent="space-between">
							<Text>E-mail</Text>
							<Text>{user.email}</Text>
						</Box>
					</Box>
				</Card>
				<Card variant="elevated" marginHorizontal="s" marginTop="s">
					<Box padding="s">
						<Text variant="title" marginBottom="m">
							Units
						</Text>
						<Box flexDirection="row" alignItems="center" justifyContent="space-between">
							<Text>Speed</Text>
							<Text>km/h</Text>
						</Box>
					</Box>
				</Card>
				<Card variant="elevated" marginHorizontal="s" marginTop="s">
					<Box padding="s">
						<Text variant="title" marginBottom="m">
							Weather
						</Text>
						<Box flexDirection="row" alignItems="center" justifyContent="space-between">
							<Text>Wind speed</Text>
							<Text>m/s</Text>
						</Box>
						<Box flexDirection="row" alignItems="center" justifyContent="space-between">
							<Text>Temperature</Text>
							<Text>Celsius</Text>
						</Box>
					</Box>
				</Card>
				<Box margin="s">
					<Button text="Logout" onPress={() => dispatch(logout())} />
				</Box>
			</ScrollView>
		</Body>
	);
};

const styles = StyleSheet.create({
	scrollView: {
		// paddingTop: 8,
	},
});

export default SettingsScreen;
