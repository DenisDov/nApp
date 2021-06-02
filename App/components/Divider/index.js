import React from 'react';
import { StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';
import { Box, Text } from '../../theme';

const Divider = () => {
	const { t } = useTranslation();
	return (
		<Box height={40} flexDirection="row" justifyContent="center" alignItems="center">
			<Box flex={1} backgroundColor="text" height={StyleSheet.hairlineWidth} />
			<Text paddingHorizontal="m">{t('or')}</Text>
			<Box flex={1} backgroundColor="text" height={StyleSheet.hairlineWidth} />
		</Box>
	);
};

export default Divider;
