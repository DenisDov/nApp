import { createSlice } from '@reduxjs/toolkit';

const photoSlice = createSlice({
	name: 'photos',
	initialState: {
		photos: [],
		fetching: true,
		error: null,
	},
	reducers: {
		getPhotosRequest() {},
		getPhotosSuccess(state, action) {
			const photos = action.payload;
			return { ...state, photos, fetching: false, error: null };
		},
		getPhotosFail(state, action) {
			return { ...state, error: action.payload };
		},
	},
});

export const { getPhotosRequest, getPhotosSuccess, getPhotosFail } = photoSlice.actions;

export default photoSlice.reducer;
