import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
	name: 'auth',
	initialState: {
		user: null,
		loading: false,
		error: null,
		initializing: true,
	},
	reducers: {
		setUser(state, action) {
			const user = action.payload;
			return { ...state, user, initializing: false, loading: false, error: null };
		},
		loginRequest(state, action) {
			return { ...state, loading: true };
		},
		loginSuccess(state, action) {
			const user = action.payload;
			return { ...state, user, loading: false, error: null };
		},
		loginFailure(state, action) {
			const error = action.payload;
			return { ...state, loading: false, error };
		},
		logoutRequest() {},
		logoutSuccess(state) {
			return { ...state, user: null, error: null, initializing: false };
		},
	},
});

export const { setUser, loginRequest, loginSuccess, loginFailure, logoutRequest, logoutSuccess } =
	authSlice.actions;

export default authSlice.reducer;
