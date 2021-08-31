import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';

const TabBar = ({ tabs, selectedTab, setSelectedTab }) => {
	return (
		<View style={styles.tabsContainer}>
			{tabs.map(tab => {
				return (
					<Pressable
						onPress={() => setSelectedTab(tab)}
						key={tab}
						style={({ pressed }) => [
							{
								opacity: pressed ? 0.5 : 1,
							},
							styles.tabContainer,
							tab === selectedTab ? styles.tabContainerActive : [],
						]}>
						<Text style={[styles.tabText, tab === selectedTab ? styles.tabTextActive : []]}>
							{tab}
						</Text>
					</Pressable>
				);
			})}
		</View>
	);
};

const styles = StyleSheet.create({
	tabsContainer: {
		flexDirection: 'row',
	},
	tabContainer: {
		flex: 1,
		paddingVertical: 16,
		borderRadius: 16,
	},
	tabContainerActive: {
		backgroundColor: '#B9BF04',
	},
	tabText: {
		color: '#FFFFFF',
		fontFamily: 'Avenir',
		fontWeight: 'bold',
		textAlign: 'center',
		opacity: 0.5,
	},
	tabTextActive: {
		opacity: 1,
	},
});

export default TabBar;
