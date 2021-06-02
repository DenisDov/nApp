import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useTranslation } from 'react-i18next';

import { Box, Text } from '../../theme';

// import Body from '../../components/Body';
import BackgroundImage from '../../components/BackgroundImage';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Divider from '../../components/Divider';
import AnimatedHeader from '../../components/AnimatedHeader';
import AnimatedCard from '../../components/AnimatedCard';

const schema = yup.object().shape({
	email: yup.string().email().required(),
	password: yup.string().required(),
});

const LoginScreen = ({ navigation }) => {
	const { t } = useTranslation();

	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm({
		mode: 'onBlur',
		resolver: yupResolver(schema),
	});

	const onSubmit = data => console.log('formdata', data);

	return (
		<BackgroundImage>
			<SafeAreaView style={styles.container}>
				<Box flex={1} margin="m" justifyContent="space-between">
					<AnimatedHeader text={t('Welcome back')} />
					<AnimatedCard>
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
						<Button text={t('Register')} onPress={() => navigation.navigate('Register')} />
						<Text
							marginTop="m"
							textAlign="center"
							onPress={() => navigation.navigate('ForgotPassword')}>
							Forgot password?
						</Text>
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

export default LoginScreen;
