import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import { useTheme } from '@shopify/restyle';
import { Text } from '../../theme';

const Button = ({ text, onPress, loading }) => {
	const theme = useTheme();
	return (
		<Pressable
			onPress={onPress}
			disabled={loading}
			style={({ pressed }) => [
				{
					backgroundColor: pressed ? theme.colors.primaryDark : theme.colors.primary,
				},

				[
					styles.button,
					{
						borderRadius: theme.borderRadii.s,
						padding: theme.spacing.s,
					},
				],
			]}>
			{loading ? (
				<ActivityIndicator color={theme.colors.light} />
			) : (
				<Text style={{ color: theme.colors.light }}>{text}</Text>
			)}
		</Pressable>
	);
};

const styles = StyleSheet.create({
	button: {
		height: 40,
		justifyContent: 'center',
		alignItems: 'center',
		elevation: 2,
	},
});

export default Button;
