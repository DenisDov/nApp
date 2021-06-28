import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
	name: 'auth',
	initialState: {
		user: null,
		loading: false,
		error: null,
	},
	reducers: {
		setUser(state, action) {
			const user = action.payload;
			return { ...state, user, loading: false, error: null };
		},

		loginRequest(state, action) {
			return { ...state, loading: true, error: null };
		},
		loginFailure(state, action) {
			const error = action.payload;
			return { ...state, loading: false, error };
		},

		registerRequest(state, action) {
			return { ...state, loading: true, error: null };
		},
		registerFailure(state, action) {
			const error = action.payload;
			return { ...state, loading: false, error };
		},

		socialRequest(state, action) {
			return { ...state, loading: true, error: null };
		},
		socialFailure(state, action) {
			const error = action.payload;
			return { ...state, loading: false, error };
		},

		logoutRequest() {},
		logoutSuccess(state) {
			return { ...state, user: null, error: null };
		},
	},
});

export const {
	setUser,

	loginRequest,
	loginFailure,

	registerRequest,
	registerFailure,

	socialRequest,
	socialFailure,

	logoutRequest,
	logoutSuccess,
} = authSlice.actions;

export default authSlice.reducer;
