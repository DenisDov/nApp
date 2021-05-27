import React from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Box, Text } from '../../theme';
import assets from '../../assets';

import Button from '../../components/Button';
import Input from '../../components/Input';
import Divider from '../../components/Divider';

const LoginScreen = () => {
	return (
		<ImageBackground source={assets.images.AUTH_BACKGROUND} style={styles.image}>
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
		</ImageBackground>
	);
};

const styles = StyleSheet.create({
	image: {
		flex: 1,
		resizeMode: 'cover',
	},
	container: {
		flex: 1,
	},
});

export default LoginScreen;
