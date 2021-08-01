import { put } from 'redux-saga/effects';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { showMessage } from 'react-native-flash-message';
import Config from 'react-native-config';

import { loginFailure, registerFailure, logoutSuccess } from '../../ducks/authSlice';

export function* loginSaga({ payload }) {
	const { email, password } = payload;
	try {
		yield auth().signInWithEmailAndPassword(email, password);
	} catch (error) {
		let message;
		switch (error.code) {
			case 'auth/user-not-found':
				message = 'Account not exist, please sign up';
				break;
			default:
				message = null;
		}

		yield showMessage({
			message,
			type: 'danger',
			icon: 'warning',
		});
		yield put(loginFailure(message));
	}
}

export function* registerSaga({ payload }) {
	const { email, password } = payload;
	try {
		yield auth().createUserWithEmailAndPassword(email, password);
	} catch (error) {
		let message;
		switch (error.code) {
			case 'auth/email-already-in-use':
				message = 'That email address is already in use, please login';
				break;
			default:
				message = null;
		}

		yield showMessage({
			message,
			type: 'danger',
			icon: 'warning',
		});
		yield put(registerFailure(message));
	}
}

export function* socialSaga() {
	try {
		yield GoogleSignin.configure({
			webClientId: Config.FIREBASE_CLIENT_ID,
		});

		const { idToken } = yield GoogleSignin.signIn();
		// Create a Google credential with the token
		const googleCredential = auth.GoogleAuthProvider.credential(idToken);
		// Sign-in the user with the credential
		yield auth().signInWithCredential(googleCredential);
	} catch (error) {
		console.log('errorGOOGLE: ', error);
		// yield put(loginFailure(error.message));
	}
}

export function* logoutSaga() {
	try {
		yield auth().signOut();
		yield put(logoutSuccess());
	} catch (e) {
		console.log('e: ', e);
	}
}
