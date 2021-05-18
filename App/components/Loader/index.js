import React from 'react';
import { View, ActivityIndicator } from 'react-native';

import styles from './style';

const Loader = () => {
	return (
		<View style={styles.container}>
			<ActivityIndicator size="large" color="tomato" />
		</View>
	);
};

export default Loader;
