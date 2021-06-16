import { configureStore, combineReducers, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { watcherSaga } from './sagas/rootSaga';

import authReducer from './ducks/authSlice';
import photosReducer from './ducks/photoSlice';

const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
	auth: authReducer,
	photos: photosReducer,
});
// TODO: fix serializableCheck
const middleware = [
	...getDefaultMiddleware({ thunk: false, serializableCheck: false }),
	sagaMiddleware,
];

if (process.env.NODE_ENV === 'development') {
	const { createLogger } = require('redux-logger');
	middleware.push(createLogger({ collapsed: true }));
}

const store = configureStore({
	reducer,
	middleware,
});

sagaMiddleware.run(watcherSaga);

export default store;
