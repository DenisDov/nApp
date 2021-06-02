import React from 'react';
import { ActivityIndicator } from 'react-native';
import { useTheme } from '@shopify/restyle';

import { Box } from '../../theme';

const Loader = () => {
	const theme = useTheme();
	return (
		<Box flex={1} backgroundColor="background" justifyContent="center" alignItems="center">
			<ActivityIndicator size="large" color={theme.colors.primary} />
		</Box>
	);
};

export default Loader;
