import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	isLoading: false,
	isAuth: false,
	error: '',
	token: '',
	email: '',
	user: '',
};

const loginSlice = createSlice({
	name: 'login',
	initialState,
	reducers: {
		loginPending: (state) => {
			state.isLoading = true;
		},
		loginSuccess: (state) => {
			state.isAuth = true;
			state.isLoading = false;
			state.error = '';
		},
		getEmail: (state, { payload }) => {
			state.email = payload;
		},
		getToken: (state, { payload }) => {
			state.token = payload;
		},
		loginFail: (state, { payload }) => {
			state.isLoading = false;
			state.error = payload;
		},
		logout: (state) => {
			state.isAuth = false;
			state.token = '';
		},
		getUser: (state, { payload }) => {
			state.user = payload;
		},
	},
});

const { reducer, actions } = loginSlice;
export const {
	loginPending,
	loginSuccess,
	loginFail,
	logout,
	getEmail,
	getToken,
	getUser,
} = actions;

export default reducer;
