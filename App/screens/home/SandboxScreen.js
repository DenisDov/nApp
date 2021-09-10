import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, Alert, Image, ActivityIndicator, FlatList } from 'react-native';
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';
import { Card, Box, Text, ImageBox, ScrollBox } from '../../theme';

import Body from '../../components/Body';
import NeoButton from '../../components/NeoButton';

// function listFilesAndDirectories(reference, pageToken) {
// 	return reference.list({ pageToken }).then(result => {
// 		// Loop over each item
// 		result.items.forEach(ref => {
// 			console.log(ref.fullPath);
// 		});

// 		if (result.nextPageToken) {
// 			return listFilesAndDirectories(reference, result.nextPageToken);
// 		}

// 		return Promise.resolve();
// 	});
// }

const SandboxScreen = () => {
	const [image, setImage] = useState();

	const [loading, setLoading] = useState(true); // Set loading to true on component mount
	const [users, setUsers] = useState([]);

	useEffect(() => {
		const subscriber = firestore()
			.collection('Palettes')
			.onSnapshot(querySnapshot => {
				const users = [];

				querySnapshot.forEach(documentSnapshot => {
					users.push({
						...documentSnapshot.data(),
						key: documentSnapshot.id,
					});
				});

				setUsers(users);
				setLoading(false);
			});

		// Unsubscribe from events when no longer in use
		return () => subscriber();
	}, []);

	useEffect(() => {
		const reference = storage().ref('Photos');
		// const getImage = async () => {
		// 	const url = await storage().ref('Photos/volcano.jpeg').getDownloadURL();
		// 	console.log('url: ', url);
		// 	setImage(url);
		// };
		// // const path = storage().ref('/Photos/Volcano.jpeg');
		// getImage();
		reference.list({}).then(result => {
			console.log('result: ', result);
			// Loop over each item
			result.items.forEach(ref => {
				console.log('FULL', ref.fullPath);
			});
			// listFilesAndDirectories(reference).then(() => {
			// 	console.log('Finished listing');
			// });
		});
	}, []);
	// console.log('image: ', image);
	if (loading) {
		return <ActivityIndicator />;
	}
	return (
		<Body>
			<FlatList
				data={users}
				renderItem={({ item }) => (
					<Box style={{ height: 50, flex: 1, alignItems: 'center', justifyContent: 'center' }}>
						<Text>User ID: {item.id}</Text>
						<Text>User Name: {item.title}</Text>
					</Box>
				)}
			/>
			{/* <ScrollBox padding="m">
				<Box flexDirection="row">
					<Text>TEST</Text>
					

					<Image
						style={styles.tinyLogo}
						source={{
							uri: 'https://reactnative.dev/img/tiny_logo.png',
						}}
					/>
				</Box>
			</ScrollBox> */}
		</Body>
	);
};

const styles = StyleSheet.create({
	tinyLogo: {
		width: 50,
		height: 50,
	},
});

export default SandboxScreen;
