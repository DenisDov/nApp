import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '@shopify/restyle';
import { Box, Text } from '../../theme';

const SettingsScreen = () => {
	const theme = useTheme();
	return (
		<SafeAreaView style={styles.container} edges={['right', 'bottom', 'left']}>
			<ScrollView style={{ backgroundColor: theme.colors.background }}>
				<Box padding="m">
					<Text variant="body">Settings here</Text>
				</Box>
				<Box padding="m">
					<Text variant="body">Settings here</Text>
				</Box>
				<Box padding="m">
					<Text variant="body">Settings here</Text>
				</Box>
				<Box padding="m">
					<Text variant="body">Settings here</Text>
				</Box>
				<Box padding="m">
					<Text variant="body">Settings here</Text>
				</Box>
				<Box padding="m">
					<Text variant="body">Settings here</Text>
				</Box>
				<Box padding="m">
					<Text variant="body">Settings here</Text>
				</Box>
				<Box padding="m">
					<Text variant="body">Settings here</Text>
				</Box>
				<Box padding="m">
					<Text variant="body">Settings here</Text>
				</Box>
				<Box padding="m">
					<Text variant="body">Settings here</Text>
				</Box>
				<Box padding="m">
					<Text variant="body">Settings here</Text>
				</Box>
				<Box padding="m">
					<Text variant="body">Settings here</Text>
				</Box>
			</ScrollView>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});

export default SettingsScreen;
