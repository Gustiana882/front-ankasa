import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	data: '',
    search: false,
};

const flashData = createSlice({
	name: 'flashData',
	initialState,
	reducers: {
		search: (state, { payload }) => {
            state.data = payload;
			state.search = true;
		},
		searchSuccess: (state) => {
            state.data = '';
			state.search = false;
		},
	},
});

const { reducer, actions } = flashData;
export const { search, searchSuccess } = actions;

export default reducer;
