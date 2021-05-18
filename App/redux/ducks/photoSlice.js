import { createSlice } from '@reduxjs/toolkit';

const photoSlice = createSlice({
	name: 'photos',
	initialState: {
		photos: [],
		fetching: false,
		error: null,
	},
	reducers: {
		getPhotosRequest(state, action) {
			return {
				...state,
				fetching: true,
			};
		},
		getPhotosSuccess(state, action) {
			const photos = action.payload;
			return { ...state, photos, error: null };
		},
		getPhotosFail(state, action) {
			return { ...state, error: action.payload };
		},
	},
});

export const { getPhotosRequest, getPhotosSuccess, getPhotosFail } = photoSlice.actions;

export default photoSlice.reducer;
