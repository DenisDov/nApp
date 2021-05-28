import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Box, Text } from '../../theme';

import BackgroundImage from '../../components/BackgroundImage';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Divider from '../../components/Divider';

const LoginScreen = () => {
	return (
		<BackgroundImage>
			<SafeAreaView style={styles.container}>
				<Box flex={0.5} margin="m" justifyContent="space-between">
					<Text variant="header">Login</Text>
					<Box>
						<Input ionicon="mail-outline" placeholder="Email" />
						<Input ionicon="lock-closed-outline" placeholder="Password" />
						<Button text="Log in" />
						<Divider />
						<Button text="Sign up" />
					</Box>
				</Box>
			</SafeAreaView>
		</BackgroundImage>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});

export default LoginScreen;
