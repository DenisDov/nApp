import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Body from '../../components/Body';

import { Box, Text, ImageBox } from '../../theme';

const DetailScreen = ({ route }) => {
	const { item } = route.params;
	return (
		<Body>
			<SafeAreaView style={styles.container} edges={['right', 'bottom', 'left']}>
				<ScrollView style={styles.scrollView}>
					<Box>
						<ImageBox
							source={{
								uri: item.url,
							}}
							width="100%"
							aspectRatio={1}
						/>
						<Box padding="m">
							<Text>{item.title}</Text>
						</Box>
					</Box>
				</ScrollView>
			</SafeAreaView>
		</Body>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	scrollView: {
		flex: 1,
	},
});

export default DetailScreen;
