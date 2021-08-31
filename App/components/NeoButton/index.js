import React from 'react';
import { Pressable, StyleSheet } from 'react-native';

import { useTheme } from '@shopify/restyle';
import { Shadow } from 'react-native-neomorph-shadows';

import { Box, Text } from '../../theme';

const NeoButton = ({ onPress, label, variant, ...rest }: Props) => {
	const theme = useTheme();

	const buttonStyles = [];
	const textStyles = [];

	switch (variant) {
		case 'primary':
			buttonStyles.push({
				backgroundColor: theme.colors.primary,
			});
			break;
		case 'error':
			buttonStyles.push({
				backgroundColor: theme.colors.error,
			});
			textStyles.push({
				color: theme.colors.light,
			});

			break;
		default:
			buttonStyles;
	}

	return (
		<Pressable
			hitSlop={10}
			onPress={onPress}
			style={({ pressed }) => [
				{
					opacity: pressed ? 0.5 : 1,
				},
				{ flex: 1 },
			]}>
			<Shadow style={styles.shadow}>
				<Box padding="m" borderRadius="s" style={buttonStyles} {...rest}>
					<Text textAlign="center" style={textStyles}>
						{label}
					</Text>
				</Box>
			</Shadow>
		</Pressable>
	);
};

const styles = StyleSheet.create({
	shadow: {
		shadowColor: 'black',
		shadowOffset: {
			width: 10,
			height: 10,
		},
		shadowOpacity: 0.5,
		shadowRadius: 10,
	},
});

export default NeoButton;
