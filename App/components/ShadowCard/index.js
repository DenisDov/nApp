import React from 'react';
import { Shadow } from 'react-native-shadow-2';
import { StyleSheet } from 'react-native';

import { theme } from '../../theme';

const SHADOW_COLOR = '#10233040';

const ShadowCard = ({ children, background = theme.colors.accent }) => {
	return (
		<Shadow
			startColor={SHADOW_COLOR}
			offset={[2, 2]}
			containerViewStyle={styles.containerView}
			viewStyle={[styles.outer, { backgroundColor: background }]}>
			{children}
		</Shadow>
	);
};

const styles = StyleSheet.create({
	containerView: {
		flex: 1,
	},
	outer: {
		flex: 1,
		alignSelf: 'stretch',
		borderRadius: theme.borderRadii.m,
		backgroundColor: theme.colors.accent,
		overflow: 'hidden',
	},
	// inner: {
	// 	backgroundColor: theme.colors.primary,
	// },
});

export default ShadowCard;
