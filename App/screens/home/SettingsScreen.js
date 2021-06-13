import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Card, Box, Text } from '../../theme';

import Body from '../../components/Body';

const SettingsScreen = () => {
	return (
		<Body>
			<SafeAreaView style={styles.container} edges={['right', 'bottom', 'left']}>
				<ScrollView style={styles.scrollView}>
					<Card variant="elevated" marginHorizontal="s" marginBottom="s">
						<Box padding="s">
							<Text>Units</Text>
							<Box flexDirection="row" alignItems="center" justifyContent="space-between">
								<Text>Speed</Text>
								<Text>km/h</Text>
							</Box>
						</Box>
					</Card>
					<Card variant="elevated" marginHorizontal="s" marginBottom="s">
						<Box padding="s">
							<Text>Weather</Text>
							<Box flexDirection="row" alignItems="center" justifyContent="space-between">
								<Text>Wind speed</Text>
								<Text>m/s</Text>
							</Box>
							<Box flexDirection="row" alignItems="center" justifyContent="space-between">
								<Text>Temperature</Text>
								<Text>Celsius</Text>
							</Box>
						</Box>
					</Card>
				</ScrollView>
			</SafeAreaView>
		</Body>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	scrollView: {
		paddingTop: 8,
	},
});

export default SettingsScreen;
