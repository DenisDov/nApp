import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Controller } from 'react-hook-form';
import { useTheme } from '@shopify/restyle';

import { Box, Text } from '../../theme';

import isEmpty from '../../services/is-empty';
import capitalize from '../../services/capitalize';

const Input = ({ ionicon, control, errors, fieldName, ...rest }) => {
	const theme = useTheme();
	return (
		<Box marginBottom="s">
			<Controller
				control={control}
				render={({
					field: { onChange, onBlur, value },
					fieldState: { invalid, isTouched, isDirty, error },
				}) => (
					<Box
						flexDirection="row"
						alignItems="center"
						height={48}
						backgroundColor="surface"
						borderWidth={StyleSheet.hairlineWidth}
						borderRadius="s"
						borderColor="border"
						padding="s"
						marginBottom="s">
						<Icon name={ionicon} size={24} color="#4F8EF7" />
						<TextInput
							style={[styles.input, { color: theme.colors.text }]}
							onBlur={onBlur}
							onChangeText={val => onChange(val)}
							value={value}
							underlineColorAndroid="transparent"
							{...rest}
						/>
						{isDirty && (
							<Icon
								name={!isEmpty(errors[fieldName]) ? 'ios-alert-circle-outline' : 'ios-checkmark'}
								size={24}
								color={!isEmpty(errors[fieldName]) ? theme.colors.error : 'green'}
							/>
						)}
					</Box>
				)}
				name={fieldName}
				rules={{ required: true }}
				defaultValue=""
			/>
			{errors[fieldName] && (
				<Text variant="regular">{capitalize(errors[fieldName].message, true)}</Text>
			)}
		</Box>
	);
};

const styles = StyleSheet.create({
	input: {
		flex: 1,
		marginHorizontal: 8,
		height: 48,
		fontFamily: 'Raleway-Regular',
		// color: 'white',
	},
});

export default Input;
