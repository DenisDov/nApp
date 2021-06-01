import React, { useState, useEffect } from 'react';
import { Image, StyleSheet } from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import { useTranslation } from 'react-i18next';

import { Box, Text } from '../../theme';
import Body from '../../components/Body';

const Network = ({ children }) => {
	const [status, changeStatus] = useState(true);
	const { t } = useTranslation();

	useEffect(() => {
		const unsubscribe = NetInfo.addEventListener(state => changeStatus(state.isConnected));
		return () => {
			unsubscribe();
		};
	});

	if (!status) {
		return (
			<Body>
				<Box flex={1} justifyContent="center" alignItems="center" padding="m">
					<Image source={require('./lost.png')} resizeMode="contain" style={styles.image} />
					<Box>
						<Text variant="header">{t('Oops')}</Text>
						<Text variant="subheader">{t('No internet connection')}</Text>
					</Box>
				</Box>
			</Body>
		);
	}
	return children;
};

const styles = StyleSheet.create({
	image: {
		width: '100%',
		height: 300,
	},
});

export default Network;
