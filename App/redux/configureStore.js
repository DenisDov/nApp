import { configureStore, combineReducers, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { watcherSaga } from './sagas/rootSaga';

import photosReducer from './ducks/photoSlice';

const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
	photos: photosReducer,
});

const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware];

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
