import { configureStore } from '@reduxjs/toolkit';
import loginReducer from '../Pages/Login/loginSlice';
import {
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import userReducer from '../components/Home/userSlice';
import searchReducer from '../components/Navbar/searchSlice';
const reducers = combineReducers({
	login: loginReducer,
	user: userReducer,
	search: searchReducer,
});

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['login', 'user'],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
	reducer: persistedReducer,

	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
});

export default store;