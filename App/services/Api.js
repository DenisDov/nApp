// a library to wrap and simplify api calls
import apisauce from 'apisauce';
import Config from 'react-native-config';

const create = (baseURL = Config.API_URL) => {
	const api = apisauce.create({
		baseURL,
		headers: {
			'Cache-Control': 'no-cache',
			'Content-Type': 'application/json',
		},
	});

	const getPhotos = () => api.get('/photos?albumId=1');

	const getUser = token => api.get('/user', {}, { headers: { authorization: `Bearer ${token}` } });

	return {
		getPhotos,
		getUser,
	};
};

export default {
	create,
};
