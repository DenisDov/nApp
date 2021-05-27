import React from 'react';
import { StyleSheet } from 'react-native';
import { Box, Text } from '../../theme';

const Divider = () => {
	return (
		<Box height={40} flexDirection="row" justifyContent="center" alignItems="center">
			<Box flex={1} backgroundColor="textColor" height={StyleSheet.hairlineWidth} />
			<Text color="textColor" paddingHorizontal="m">
				or
			</Text>
			<Box flex={1} backgroundColor="textColor" height={StyleSheet.hairlineWidth} />
		</Box>
	);
};

export default Divider;
