import React from 'react';
import { ScrollView, StyleSheet, Alert } from 'react-native';
import { Card, Box, Text, ImageBox, ScrollBox } from '../../theme';

import Body from '../../components/Body';
import NeoButton from '../../components/NeoButton';
import ToggleCard from '../../components/ToggleCard';

const SandboxScreen = () => {
	return (
		<Body>
			<ScrollView style={{ flex: 1 }}>
				<Box padding="m">
					<ToggleCard />
					<Box height={20}></Box>
					<ToggleCard />
					<Box height={20}></Box>
					<ToggleCard />
					<Box height={20}></Box>
					<ToggleCard />
					<Box height={20}></Box>
					<ToggleCard />
					<Box height={20}></Box>
					<ToggleCard />
					<Box height={20}></Box>
					<ToggleCard />
					<Box height={20}></Box>
					<ToggleCard />
					<Box height={20}></Box>
					<ToggleCard />
					<Box height={20}></Box>
					<ToggleCard />
					<Box height={20}></Box>
					<ToggleCard />
					<Box height={20}></Box>
					<ToggleCard />
					<Box height={20}></Box>
					<ToggleCard />
					<Box height={20}></Box>
					<ToggleCard />
					<Box height={20}></Box>
					<ToggleCard />
					<Box height={20}></Box>
					<ToggleCard />
					<Box height={20}></Box>
					<ToggleCard />
				</Box>
				{/* <Box flexDirection="row">
					<NeoButton label="Main Button" variant="primary" />
					<Box width={8} />
					<NeoButton label="Error Button" variant="error" />
				</Box> */}
			</ScrollView>
		</Body>
	);
};

// const styles = StyleSheet.create({
// 	scrollView: {
// 		// paddingTop: 8,
// 	},
// });

export default SandboxScreen;
