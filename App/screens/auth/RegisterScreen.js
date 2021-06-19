import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';

import { registerRequest } from '../../redux/ducks/authSlice';

import { Box, Text } from '../../theme';

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
	rePassword: yup
		.string()
		.oneOf([yup.ref('password')], 'password does not match')
		.required('Re-type password'),
});

const RegisterScreen = ({ navigation }) => {
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
		dispatch(registerRequest(data));
	};
	return (
		<BackgroundImage>
			<SafeAreaView style={styles.container}>
				<Box flex={1} margin="m">
					<Text variant="header">Create account</Text>
					<Box flex={1} marginVertical="xl">
						<Input
							{...{ control, errors }}
							fieldName="email"
							ionicon="mail-outline"
							placeholder={t('emailPlaceholder')}
							keyboardType="email-address"
						/>
						<Input
							{...{ control, errors }}
							fieldName="password"
							ionicon="lock-closed-outline"
							placeholder={t('passwordPlaceholder')}
							secureTextEntry
						/>
						<Input
							{...{ control, errors }}
							fieldName="rePassword"
							ionicon="lock-closed-outline"
							placeholder={t('passwordRetype')}
							secureTextEntry
						/>
						<Button text="Sign up" onPress={handleSubmit(onSubmit)} loading={loading} />
						<Divider />
						<Button text="Log in" onPress={() => navigation.navigate('Login')} />
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

export default RegisterScreen;
