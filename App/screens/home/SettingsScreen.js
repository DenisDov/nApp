import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Box, Text } from '../../theme';

const SettingsScreen = () => {
	return (
		<SafeAreaView style={styles.container} edges={['right', 'bottom', 'left']}>
			<ScrollView>
				<Box padding="m">
					<Text>Settings here</Text>
				</Box>
				<Box padding="m">
					<Text>Settings here</Text>
				</Box>
				<Box padding="m">
					<Text>Settings here</Text>
				</Box>
				<Box padding="m">
					<Text>Settings here</Text>
				</Box>
				<Box padding="m">
					<Text>Settings here</Text>
				</Box>
				<Box padding="m">
					<Text>Settings here</Text>
				</Box>
				<Box padding="m">
					<Text>Settings here</Text>
				</Box>
				<Box padding="m">
					<Text>Settings here</Text>
				</Box>
				<Box padding="m">
					<Text>Settings here</Text>
				</Box>
				<Box padding="m">
					<Text>Settings here</Text>
				</Box>
				<Box padding="m">
					<Text>Settings here</Text>
				</Box>
				<Box padding="m">
					<Text>Settings here</Text>
				</Box>
				<Box padding="m">
					<Text>Settings here</Text>
				</Box>
				<Box padding="m">
					<Text>Settings here</Text>
				</Box>
				<Box padding="m">
					<Text>Settings here</Text>
				</Box>
				<Box padding="m">
					<Text>Settings here</Text>
				</Box>
				<Box padding="m">
					<Text>Settings here</Text>
				</Box>
				<Box padding="m">
					<Text>Settings here</Text>
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
