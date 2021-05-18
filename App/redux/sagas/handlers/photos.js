import { call, put, delay } from 'redux-saga/effects';

import { getPhotosSuccess, getPhotosFail } from '../../ducks/photoSlice';

export function* getPhotosSaga(api) {
	try {
		const response = yield call(api.getPhotos);
		yield delay(300); // TODO: remove
		if (response.ok) {
			yield put(getPhotosSuccess(response.data));
		} else {
			yield put(getPhotosFail({ message: 'NETWORK ERROR' }));
		}
	} catch (e) {
		yield put(getPhotosFail({ message: e.message }));
	}
}
