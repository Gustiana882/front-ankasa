import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	isLoading: false,
	userLoading: false,
};

const profileSlice = createSlice({
	name: 'updateProfile',
	initialState,
	reducers: {
		updatePending: (state) => {
			state.isLoading = true;
		},
		updateSuccess: (state) => {
			state.isLoading = false;
		},
	},
});

const { reducer, actions } = profileSlice;
export const { updatePending, updateSuccess } = actions;

export default reducer;
