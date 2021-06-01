import React, { useState, useEffect } from 'react';
import NetInfo from '@react-native-community/netinfo';
import { useTranslation } from 'react-i18next';

import { Box, Text, ImageBox } from '../../theme';
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
					<ImageBox source={require('./lost.png')} resizeMode="contain" width="100%" height={300} />
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

export default Network;
