import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	isLoading: false,
	imageUpload: '',
	imagePreview: '',
	randomImage: '',
};

const profileSlice = createSlice({
	name: 'updateProfile',
	initialState,
	reducers: {
		updatePending: (state) => {
			state.isLoading = false;
		},
		updateSuccess: (state) => {
			state.isLoading = false;
		},
		updateImage: (state, { payload }) => {
			state.imageUpload = payload;
		},
		previewImage: (state, { payload }) => {
			state.imagePreview = payload;
		},
	},
});

const { reducer, actions } = profileSlice;
export const {
	updatePending,
	updateSuccess,
	updateImage,
	previewImage,
	randomImage,
} = actions;

export default reducer;
