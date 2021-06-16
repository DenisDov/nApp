import React from 'react';
import { StyleSheet, Platform, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useTranslation } from 'react-i18next';
// import auth from '@react-native-firebase/auth';
import {loginRequest} from '../../redux/ducks/authSlice'
import {useSelector, useDispatch} from 'react-redux'

import { Box, Text } from '../../theme';

// import Body from '../../components/Body';
import BackgroundImage from '../../components/BackgroundImage';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Divider from '../../components/Divider';

const schema = yup.object().shape({
	email: yup.string().email().required(),
	password: yup
		.string()
		.min(6, ({ min }) => `Password must be at least ${min} characters`)
		.required(),
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

	const dispatch = useDispatch();
	const loading = useSelector(state => state.auth.loading);

	const onSubmit = data => {
		console.log('data: ', data);
		dispatch(loginRequest(data));
	};

	return (
		<BackgroundImage>
			{Platform.OS === 'android' && <StatusBar backgroundColor="#20111111" />}
			<SafeAreaView style={styles.container}>
				<Box flex={1} margin="m" justifyContent="space-between">
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

						<Button text={t('Login')} onPress={handleSubmit(onSubmit)} loading={loading} />
						<Divider />
						<Button text={t('Register')} onPress={() => navigation.navigate('Register')} />
						<Text
							marginTop="m"
							textAlign="center"
							onPress={() => navigation.navigate('ForgotPassword')}>
							Forgot password?
						</Text>
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
