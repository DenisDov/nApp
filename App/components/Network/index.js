import React, { useState, useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import NetInfo from '@react-native-community/netinfo';

import styles from './style';

const Network = ({ children }) => {
	const [status, changeStatus] = useState(true);

	useEffect(() => {
		const unsubscribe = NetInfo.addEventListener(state => changeStatus(state.isConnected));
		return () => {
			unsubscribe();
		};
	});

	if (!status) {
		return (
			<View style={styles.container}>
				<Image source={require('./lost.png')} resizeMode="contain" style={styles.image} />
				<View>
					<Text style={styles.header}>Oops...</Text>
					<Text style={styles.subheader}>No internet connection</Text>
				</View>
			</View>
		);
	}
	return children;
};

export default Network;
