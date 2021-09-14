import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  isAuth: false,
  error: '',
  token: '',
  email: '',
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    loginPending: (state) => {
      state.isLoading = true;
    },
    loginSuccess: (state) => {
      state.isLoading = false;
      state.isAuth = true;
      state.error = '';
    },
    getEmail: (state, { payload }) => {
        state.email = payload;
    },
    loginFail: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    logout: (state) => {
        state.isAuth = false;
        state.token = '';
    },
  },
});

const { reducer, actions } = loginSlice;

export const { loginPending, loginSuccess, loginFail, getEmail, logout } = actions;

export default reducer;