import React, { useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { getPhotosRequest } from '../../redux/ducks/photoSlice';

import Loader from '../../components/Loader';

const HomeScreen = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getPhotosRequest());
	}, [dispatch]);

	const isFetching = useSelector(state => state.photos.fetching);

	if (isFetching) {
		return <Loader />;
	}

	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Text>HOME HERE</Text>
		</View>
	);
};

export default HomeScreen;
