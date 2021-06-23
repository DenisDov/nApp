import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { Text, Box } from '../../theme';

import shadeHexColor from '../../services/shade-hex-color';

const ButtonSocial = ({ type, ...props }) => {
	let text;
	let color;
	let iconName;

	switch (type) {
		case 'google':
			text = 'Google';
			color = '#EA4436';
			iconName = 'logo-google';
			break;
		case 'facebook':
			text = 'Facebook';
			color = '#3b5998';
			iconName = 'logo-facebook';
			break;
	}
	return (
		<Pressable
			style={({ pressed }) => [
				{
					backgroundColor: pressed ? shadeHexColor(color, -0.1) : color,
				},
				styles.button,
			]}
			{...props}>
			<Box flexDirection="row" alignItems="center">
				<Icon name={iconName} size={24} style={styles.iconStyle} />
				<Text>{text}</Text>
			</Box>
		</Pressable>
	);
};

const styles = StyleSheet.create({
	button: {
		flex: 1,
		height: 40,
		justifyContent: 'center',
		alignItems: 'center',
		elevation: 2,
		borderRadius: 8,
		padding: 8,
	},
	iconStyle: {
		marginRight: 8,
		color: 'white',
	},
});

export default ButtonSocial;
