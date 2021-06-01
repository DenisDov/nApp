import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Box, Text } from '../../theme';

import Body from '../../components/Body';
// import BackgroundImage from '../../components/BackgroundImage';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Divider from '../../components/Divider';

const LoginScreen = ({ navigation }) => {
	const { t } = useTranslation();
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
				<Box flex={0.6} margin="m" justifyContent="space-between">
					<Text variant="header">{t('Welcome back')}</Text>
					<Box>
						<Input
							{...{ control, errors }}
							fieldName="email"
							ionicon="mail-outline"
							placeholder={t('emailPlaceholder')}
						/>
						<Input
							{...{ control, errors }}
							fieldName="password"
							ionicon="lock-closed-outline"
							placeholder={t('passwordPlaceholder')}
							secureTextEntry
						/>

						<Button text={t('Login')} onPress={handleSubmit(onSubmit)} />
						<Divider />
						<Button text={t('Register')} />
						<Text
							marginTop="m"
							textAlign="center"
							onPress={() => navigation.navigate('ForgotPassword')}>
							Forgot password?
						</Text>
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
