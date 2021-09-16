import React from 'react';

import { Box, Text, TouchBox, theme } from '../../theme';

import ShadowCard from '../ShadowCard';

const ToggleCard = () => {
	return (
		<ShadowCard>
			<Box height={90} flexDirection="row">
				<ShadowCard background={theme.colors.primary}>
					<Box padding="m">
						<Text>INNER</Text>
					</Box>
				</ShadowCard>
				<TouchBox justifyContent="center" alignItems="center" padding="m">
					<Text>Button</Text>
				</TouchBox>
			</Box>
		</ShadowCard>
	);
};

export default ToggleCard;
