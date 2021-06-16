import { all, takeLatest } from 'redux-saga/effects';

import { getPhotosRequest } from '../ducks/photoSlice';
import { getPhotosSaga } from './handlers/photos';

import { loginRequest, logout } from '../ducks/authSlice';
import { loginSaga, logoutSaga } from './handlers/auth';

import API from '../../services/Api';

const api = API.create();

export function* watcherSaga() {
	yield all([
		takeLatest(loginRequest.type, loginSaga),
		takeLatest(logout.type, logoutSaga),
		takeLatest(getPhotosRequest.type, getPhotosSaga, api),
	]);
}
