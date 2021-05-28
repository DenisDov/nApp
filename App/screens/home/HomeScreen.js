import React, { useEffect } from 'react';
// import { Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { getPhotosRequest } from '../../redux/ducks/photoSlice';

import Loader from '../../components/Loader';

import { Box, Text } from '../../theme';

const HomeScreen = ({ navigation }) => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getPhotosRequest());
	}, [dispatch]);

	const isFetching = useSelector(state => state.photos.fetching);
	const photos = useSelector(state => state.photos.photos);

	if (isFetching) {
		return <Loader />;
	}

	return (
		<Box flex={1} justifyContent="center" alignItems="center" backgroundColor="background">
			<Text variant="header">HOME HERE</Text>
			<Text variant="subheader" onPress={() => navigation.navigate('Settings')}>
				GO TO SETTINGS
			</Text>
		</Box>
	);
};

export default HomeScreen;
