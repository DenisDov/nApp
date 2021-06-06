import { createSlice } from '@reduxjs/toolkit';

const photoSlice = createSlice({
	name: 'auth',
	initialState: {
		user: {},
		token: null,
		isAuthenticated: true,
		fetching: true,
		error: null,
	},
	reducers: {},
});

export default photoSlice.reducer;
