import { createStore, combineReducers, applyMiddleware } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeL2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import users from './Reducers/Users';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import loginReducer from '../Storages/Slices/loginSlice';
import profileReducer from '../Storages/Slices/profileSlice';
import search from '../Storages/Slices/flashData';

const reducer = combineReducers({
	users,
	loginReducer,
	profileReducer,
	search,
});

const persistConfig = {
	key: 'root',
	storage,
	stateReconciler: autoMergeL2,
};

const rootReducer = (state, action) => {
	if (action.type === 'UNSET_AUTH') {
		state = undefined;
	}
	return reducer(state, action);
};

const persistReduser = persistReducer(persistConfig, rootReducer);
const configStore = () =>
	createStore(persistReduser, composeWithDevTools(applyMiddleware(logger)));

export default configStore;
