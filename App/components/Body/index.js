import React from 'react';
import { Box } from '../../theme';

const Body = ({ children }) => {
	return (
		<Box backgroundColor="background" flex={1}>
			{children}
		</Box>
	);
};

export default Body;
