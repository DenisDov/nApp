import React from 'react';
import { StyleSheet } from 'react-native';
import { Shadow } from 'react-native-shadow-2';

import { Box, Text, TouchBox, theme } from '../../theme';

const ToggleCard = () => {
	return (
		<Shadow viewStyle={styles.container}>
			<Box height={90} flexDirection="row">
				<Shadow containerViewStyle={styles.childrenContainer} viewStyle={styles.childrenView}>
					<Box padding="m">
						<Text>INNER</Text>
					</Box>
				</Shadow>
				<TouchBox justifyContent="center" alignItems="center" padding="m">
					<Text>Button</Text>
				</TouchBox>
			</Box>
		</Shadow>
	);
};

const styles = StyleSheet.create({
	container: {
		alignSelf: 'stretch',
		backgroundColor: theme.colors.accent,
		borderRadius: theme.borderRadii.m,
		overflow: 'hidden',
	},
	childrenContainer: {
		flex: 1,
	},
	childrenView: {
		flex: 1,
		alignSelf: 'stretch',
		borderRadius: theme.borderRadii.m,
		backgroundColor: theme.colors.primary,
		overflow: 'hidden',
	},
});

export default ToggleCard;
