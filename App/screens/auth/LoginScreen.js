import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useForm } from 'react-hook-form';
import { Box, Text } from '../../theme';

import Body from '../../components/Body';
import BackgroundImage from '../../components/BackgroundImage';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Divider from '../../components/Divider';

const LoginScreen = () => {
	const {
		control,
		handleSubmit,
		// touched,
		formState: { errors },
	} = useForm();
	const onSubmit = data => console.log('formdata', data);
	return (
		<Body>
			<SafeAreaView style={styles.container}>
				<Box flex={0.5} margin="m" justifyContent="space-between">
					<Text variant="header">Login</Text>
					<Box>
						<Input
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
						/>

						<Button text="Log in" onPress={handleSubmit(onSubmit)} />
						<Divider />
						<Button text="Sign up" />
					</Box>
				</Box>
			</SafeAreaView>
		</Body>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});

export default LoginScreen;
