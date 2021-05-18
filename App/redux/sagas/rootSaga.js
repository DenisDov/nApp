import { all, takeLatest } from 'redux-saga/effects';

import { getPhotosRequest } from '../ducks/photoSlice';
import { getPhotosSaga } from './handlers/photos';

import API from '../../services/Api';

const api = API.create();

export function* watcherSaga() {
	yield all([takeLatest(getPhotosRequest.type, getPhotosSaga, api)]);
}
