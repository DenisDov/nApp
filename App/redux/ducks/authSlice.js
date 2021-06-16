import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
	name: 'auth',
	initialState: {
		user: {},
		token: null,
		isAuthenticated: false,
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
		logout(state) {
			return {};
		},
	},
});

export const { setUser, loginRequest, loginSuccess, loginFailure, logout } = authSlice.actions;
console.log('authSlice.actions: ', authSlice.actions);

export default authSlice.reducer;
