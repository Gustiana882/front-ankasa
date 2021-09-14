import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	search: '',
};

const userSlice = createSlice({
	name: 'search',
	initialState,
	reducers: {
		searchSuccess: (state, { payload }) => {
			state.search = payload;
		},
		searchFailed: (state, { payload }) => {
			state.error = payload;
		},
		searchClear: (state) => {
			state.search = '';
		},
	},
});

const { reducer, actions } = userSlice;
export const { searchSuccess, searchFailed, searchClear } = actions;

export default reducer;
