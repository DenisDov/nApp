import React, { useEffect } from 'react';

import { useSharedValue, useAnimatedStyle, withSpring } from 'react-native-reanimated';

import { AnimatedText } from '../../theme';

const AnimatedHeader = ({ text }) => {
	const opacity = useSharedValue(0);

	const animatedStyle = useAnimatedStyle(() => {
		return {
			opacity: opacity.value,
		};
	}, []);

	useEffect(() => {
		opacity.value = withSpring(1, {
			duration: 2000,
		});
	}, [opacity]);

	return (
		<AnimatedText variant="header" style={animatedStyle}>
			{text}
		</AnimatedText>
	);
};

export default AnimatedHeader;
