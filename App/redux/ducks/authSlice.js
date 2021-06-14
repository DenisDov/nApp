import { createSlice } from '@reduxjs/toolkit';

const photoSlice = createSlice({
	name: 'auth',
	initialState: {
		user: {},
		token: null,
		isAuthenticated: false,
		fetching: true,
		error: null,
	},
	reducers: {},
});

export default photoSlice.reducer;
