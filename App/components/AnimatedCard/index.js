import React, { useEffect } from 'react';
// import
import { useSharedValue, useAnimatedStyle, withTiming, withSpring } from 'react-native-reanimated';

import { AnimatedBox } from '../../theme';

const AnimatedCard = ({ children }) => {
	const opacity = useSharedValue(0);
	const translate = useSharedValue(20);

	const animatedStyle = useAnimatedStyle(() => {
		return {
			opacity: opacity.value,
			transform: [{ translateY: translate.value }],
		};
	});

	useEffect(() => {
		opacity.value = withSpring(1);
		translate.value = withTiming(0);
	}, [opacity, translate]);

	return <AnimatedBox style={animatedStyle}>{children}</AnimatedBox>;
};

export default AnimatedCard;
