import React from 'react';
import { Text, Pressable, ActivityIndicator, StyleSheet } from 'react-native';
import { useTheme } from '@shopify/restyle';

const Button = ({ text, onPress, loading }) => {
	const theme = useTheme();
	return (
		<Pressable
			onPress={onPress}
			disabled={loading}
			style={({ pressed }) => [
				{
					opacity: pressed ? 0.7 : 1,
				},

				[
					styles.button,
					{
						borderRadius: theme.borderRadii.s,
						backgroundColor: theme.colors.primary,
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
	},
});

export default Button;
