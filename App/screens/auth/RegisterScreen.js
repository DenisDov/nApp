import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Box, Text } from '../../theme';

import BackgroundImage from '../../components/BackgroundImage';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Divider from '../../components/Divider';
import AnimatedCard from '../../components/AnimatedCard';

const RegisterScreen = ({ navigation }) => {
	return (
		<BackgroundImage>
			<SafeAreaView style={styles.container}>
				<Box flex={1} margin="m" justifyContent="space-between">
					<Text variant="header">Create account</Text>
					<AnimatedCard>
						{/* <Input
							{...{ control, errors }}
							fieldName="email"
							ionicon="mail-outline"
							placeholder="Email"
						/>
						<Input
							{...{ control, errors }}
							fieldName="password"
							ionicon="lock-closed-outline"
							placeholder="Password"
							secureTextEntry
						/> */}

						{/* <Button text="Log in" onPress={handleSubmit(onSubmit)} /> */}
						<Button text="Sign up" />
						<Divider />
						<Button text="Log in" onPress={() => navigation.navigate('Login')} />
					</AnimatedCard>
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

export default RegisterScreen;
