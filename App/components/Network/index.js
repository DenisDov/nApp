import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
// import { withTranslation } from 'react-i18next';

import NetInfo from '@react-native-community/netinfo';

import styles from './style';

const Network = ({ t, children }) => {
	const [status, changeStatus] = useState(true);

	useEffect(() => {
		const subscribe = NetInfo.addEventListener(state => changeStatus(state.isConnected));
		return () => {
			subscribe();
		};
	});

	if (!status) {
		return (
			<View style={styles.container}>
				{/* <Text>{t('components.network.error')}</Text> */}
				<Text>\ERR NETWORK</Text>
			</View>
		);
	}
	return children;
};

// export default withTranslation()(Network);
export default Network;
