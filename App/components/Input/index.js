import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Box } from '../../theme';

const Input = ({ ionicon, ...props }) => {
	return (
		<Box
			flexDirection="row"
			alignItems="center"
			height={48}
			borderWidth={StyleSheet.hairlineWidth}
			borderRadius="s"
			borderColor="border"
			padding="s"
			marginBottom="s">
			<Icon name={ionicon} size={24} color="#4F8EF7" />
			<TextInput underlineColorAndroid="transparent" {...props} style={styles.input} />
			<Icon name="ios-checkmark" size={24} color="#4F8EF7" />
		</Box>
	);
};

const styles = StyleSheet.create({
	input: {
		flex: 1,
		marginHorizontal: 8,
		height: 48,
	},
});

export default Input;
