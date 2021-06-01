import React, { useEffect } from 'react';
import { FlatList, StyleSheet, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';

import { getPhotosRequest } from '../../redux/ducks/photoSlice';

import Loader from '../../components/Loader';
import Body from '../../components/Body';

import { Box, Text, ImageBox } from '../../theme';

const HomeScreen = ({ navigation }) => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getPhotosRequest());
	}, [dispatch]);

	const isFetching = useSelector(state => state.photos.fetching);
	const photos = useSelector(state => state.photos.photos);

	const renderItem = ({ item }) => (
		<Pressable
			onPress={() => navigation.navigate('Detail', { item })}
			android_ripple
			style={({ pressed }) => [
				{
					opacity: pressed ? 0.5 : 1,
				},
				styles.item,
			]}>
			<Box backgroundColor="surface" margin="xs" padding="m" borderRadius="s">
				<ImageBox
					source={{
						uri: item.thumbnailUrl,
					}}
					width={100}
					height={100}
					marginBottom="s"
					resizeMode="contain"
				/>
				<Text numberOfLines={2}>{item.title}</Text>
			</Box>
		</Pressable>
	);

	if (isFetching) {
		return <Loader />;
	}

	return (
		<Body>
			<SafeAreaView style={styles.container} edges={['right', 'bottom', 'left']}>
				<FlatList
					numColumns={2}
					contentContainerStyle={styles.flatlist}
					data={photos}
					renderItem={renderItem}
					keyExtractor={item => item.id}
				/>
			</SafeAreaView>
		</Body>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	flatlist: {
		marginHorizontal: 8,
	},
	item: {
		flex: 0.5,
	},
});

export default HomeScreen;
