import React from 'react';
import { ImageBackground, useColorScheme, StyleSheet } from 'react-native';
import assets from '../../assets';

const BackgroundImage = ({ children }) => {
	const isDarkMode = useColorScheme() === 'dark';
	return isDarkMode ? (
		<ImageBackground source={assets.images.DARK_BACKGROUND} style={styles.image}>
			{children}
		</ImageBackground>
	) : (
		<ImageBackground source={assets.images.LIGHT_BACKGROUND} style={styles.image}>
			{children}
		</ImageBackground>
	);
};

const styles = StyleSheet.create({
	image: {
		flex: 1,
		resizeMode: 'cover',
	},
	container: {
		flex: 1,
	},
});

export default BackgroundImage;
