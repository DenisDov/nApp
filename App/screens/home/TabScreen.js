import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import TabBar from './tabs';

const TabScreen = () => {
	const [selectedTab, setSelectedTab] = useState('Color Wheel');

	const TABS = {
		'Color Wheel': (
			<View style={styles.content}>
				<View style={{ height: 100 }}>
					<Text style={styles.header}>Welcome to React Native1</Text>
				</View>
				<View style={{ height: 100 }}>
					<Text style={styles.header}>Welcome to React Native</Text>
				</View>
				<View style={{ height: 100 }}>
					<Text style={styles.header}>Welcome to React Native</Text>
				</View>
				<View style={{ height: 100 }}>
					<Text style={styles.header}>Welcome to React Native</Text>
				</View>
				<View style={{ height: 100 }}>
					<Text style={styles.header}>Welcome to React Native</Text>
				</View>
				<View style={{ height: 100 }}>
					<Text style={styles.header}>Welcome to React Native</Text>
				</View>
				<View style={{ height: 100 }}>
					<Text style={styles.header}>Welcome to React Native</Text>
				</View>
				<View style={{ height: 100 }}>
					<Text style={styles.header}>Welcome to React Native</Text>
				</View>
				<View style={{ height: 100 }}>
					<Text style={styles.header}>Welcome to React Native</Text>
				</View>
				<View style={{ height: 100 }}>
					<Text style={styles.header}>Welcome to React Native</Text>
				</View>
				<View style={{ height: 100 }}>
					<Text style={styles.header}>Welcome to React Native</Text>
				</View>
				<View style={{ height: 100 }}>
					<Text style={styles.header}>Welcome to React Native</Text>
				</View>
				<View style={{ height: 100 }}>
					<Text style={styles.header}>Welcome to React Native</Text>
				</View>
				<View style={{ height: 100 }}>
					<Text style={styles.header}>Welcome to React Native</Text>
				</View>
			</View>
		),
		'Color Palettes': (
			<View style={styles.content}>
				<View style={{ height: 100 }}>
					<Text style={styles.header}>Welcome to React Native2</Text>
				</View>
				<View style={{ height: 100 }}>
					<Text style={styles.header}>Welcome to React Native</Text>
				</View>
				<View style={{ height: 100 }}>
					<Text style={styles.header}>Welcome to React Native</Text>
				</View>
				<View style={{ height: 100 }}>
					<Text style={styles.header}>Welcome to React Native</Text>
				</View>
				<View style={{ height: 100 }}>
					<Text style={styles.header}>Welcome to React Native</Text>
				</View>
				<View style={{ height: 100 }}>
					<Text style={styles.header}>Welcome to React Native</Text>
				</View>
				<View style={{ height: 100 }}>
					<Text style={styles.header}>Welcome to React Native</Text>
				</View>
				<View style={{ height: 100 }}>
					<Text style={styles.header}>Welcome to React Native</Text>
				</View>
				<View style={{ height: 100 }}>
					<Text style={styles.header}>Welcome to React Native</Text>
				</View>
				<View style={{ height: 100 }}>
					<Text style={styles.header}>Welcome to React Native</Text>
				</View>
				<View style={{ height: 100 }}>
					<Text style={styles.header}>Welcome to React Native</Text>
				</View>
				<View style={{ height: 100 }}>
					<Text style={styles.header}>Welcome to React Native</Text>
				</View>
				<View style={{ height: 100 }}>
					<Text style={styles.header}>Welcome to React Native</Text>
				</View>
				<View style={{ height: 100 }}>
					<Text style={styles.header}>Welcome to React Native</Text>
				</View>
			</View>
		),
		Presets: (
			<View style={styles.content}>
				<View style={{ height: 100 }}>
					<Text style={styles.header}>Welcome to React Native3</Text>
				</View>
				<View style={{ height: 100 }}>
					<Text style={styles.header}>Welcome to React Native</Text>
				</View>
				<View style={{ height: 100 }}>
					<Text style={styles.header}>Welcome to React Native</Text>
				</View>
				<View style={{ height: 100 }}>
					<Text style={styles.header}>Welcome to React Native</Text>
				</View>
				<View style={{ height: 100 }}>
					<Text style={styles.header}>Welcome to React Native</Text>
				</View>
				<View style={{ height: 100 }}>
					<Text style={styles.header}>Welcome to React Native</Text>
				</View>
				<View style={{ height: 100 }}>
					<Text style={styles.header}>Welcome to React Native</Text>
				</View>
				<View style={{ height: 100 }}>
					<Text style={styles.header}>Welcome to React Native</Text>
				</View>
				<View style={{ height: 100 }}>
					<Text style={styles.header}>Welcome to React Native</Text>
				</View>
				<View style={{ height: 100 }}>
					<Text style={styles.header}>Welcome to React Native</Text>
				</View>
				<View style={{ height: 100 }}>
					<Text style={styles.header}>Welcome to React Native</Text>
				</View>
				<View style={{ height: 100 }}>
					<Text style={styles.header}>Welcome to React Native</Text>
				</View>
				<View style={{ height: 100 }}>
					<Text style={styles.header}>Welcome to React Native</Text>
				</View>
				<View style={{ height: 100 }}>
					<Text style={styles.header}>Welcome to React Native</Text>
				</View>
			</View>
		),
	};

	console.log('selectedTab: ', selectedTab);

	return (
		<View style={styles.container}>
			<TabBar tabs={Object.keys(TABS)} selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
			<ScrollView
				scrollEnabled={selectedTab !== 'Color Wheel'}
				contentContainerStyle={{ flexGrow: 1 }}>
				{TABS[selectedTab]}
			</ScrollView>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
	},
	haader: {
		marginBottom: 40,
	},
	content: {
		flex: 1,
		// justifyContent: 'center',
		// alignItems: 'center',
		backgroundColor: '#C2185B',
		padding: 16,
	},
});

export default TabScreen;
