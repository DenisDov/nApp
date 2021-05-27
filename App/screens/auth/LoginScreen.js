import React from 'react';
import { ImageBackground, StyleSheet, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Box, Text } from '../../theme';
import assets from '../../assets';

const LoginScreen = () => {
	return (
		<ImageBackground source={assets.images.AUTH_BACKGROUND} style={styles.image}>
			<SafeAreaView style={styles.container}>
				<Box flex={1} margin="m" justifyContent="space-between">
					<Text variant="header">Login</Text>
					<Box>
						<TextInput
							style={styles.input}
							// onChangeText={onChangeText}
							value="lol"
						/>
						<TextInput
							style={styles.input}
							// onChangeText={onChangeText}
							value="lol"
						/>
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
	input: {
		height: 40,
		// margin: 12,
		borderWidth: 1,
	},
});

export default LoginScreen;
