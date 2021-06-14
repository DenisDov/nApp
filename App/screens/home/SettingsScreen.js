import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Card, Box, Text } from '../../theme';

import Body from '../../components/Body';

const SettingsScreen = () => {
	return (
		<Body>
			<ScrollView style={styles.scrollView}>
				<Card variant="elevated" marginHorizontal="s" marginBottom="s">
					<Box padding="s">
						<Text variant="title" marginBottom="m">
							Units
						</Text>
						<Box flexDirection="row" alignItems="center" justifyContent="space-between">
							<Text>Speed</Text>
							<Text>km/h</Text>
						</Box>
					</Box>
				</Card>
				<Card variant="elevated" marginHorizontal="s" marginBottom="s">
					<Box padding="s">
						<Text variant="title" marginBottom="m">
							Weather
						</Text>
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
		</Body>
	);
};

const styles = StyleSheet.create({
	scrollView: {
		paddingTop: 8,
	},
});

export default SettingsScreen;
