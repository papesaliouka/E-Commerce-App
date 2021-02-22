import { takeLatest, call, put, all} from 'redux-saga/effects';

import UserActionsTypes from './user.types';
import {signInSuccess, signInFailure, signOutSuccess, signOutFailure, signUpSuccess, signUpFailure} from '../user-reducer/user.actions';

import {
  createUserProfileDocument,
  googleProvider,
  auth,
  getUserSession
} 
from '../../firebase/firebase.utils';




export function* getUserSnapshot (user, additionalData){
  const userRef = yield call(createUserProfileDocument, user, additionalData);
  const userSnapshot = yield userRef.get();
  yield put( 
    signInSuccess({ id : userSnapshot.id, ...userSnapshot.data()}));
};

export function* emailSignIn({payload: {email, password}}) {
  try{
    const {user} = yield auth.signInWithEmailAndPassword(email, password);
   yield  getUserSnapshot(user)
  }catch(error){
  yield put(signInFailure(error));
  }
};

export function* signInWithGoogle()  {
  try{ 
    const {user} = yield auth.signInWithPopup(googleProvider);
   yield  getUserSnapshot(user)
  }catch(error){
  yield put(signOutFailure(error));
  }
};

export function* isUserAuthenticated() {
  try{
  const userAuth= yield getUserSession();
  if (!userAuth) return;
  yield  getUserSnapshot(userAuth);
  }catch (error){
   yield put(signInFailure(error))
  }
}

export function* signOut () {
  try{
    yield auth.signOut();
    yield put (signOutSuccess());
  }catch (error){
   yield signInFailure(error)
  }
};

export function* signUp ({payload:{email, password, displayName}}) {
  try{
  const {user} =  yield auth.createUserWithEmailAndPassword(email, password);
  yield put(signUpSuccess({user, additionalData: { displayName}}));
  }catch(error){
    yield put(signUpFailure(error))
  }
};

export function* signInAfterSignUp({payload: {user, additionalData}}){
  yield getUserSnapshot(user, additionalData)
};

export function* onGoogleSignInStart () {
  yield takeLatest(UserActionsTypes.GOOGLE_SIGN_IN_START,signInWithGoogle )
};

export function* onEmailSignInStart () {
  yield takeLatest(UserActionsTypes.EMAIL_SIGN_IN_START, emailSignIn)
}


export function* onSignOut () {
  yield takeLatest(UserActionsTypes.SIGN_OUT_START, signOut)
}

export function* onCheckUserSession () {
  yield takeLatest(UserActionsTypes.CHECK_USER_SESSION, isUserAuthenticated)
}

export function* onSignUpStart () {
  yield takeLatest(UserActionsTypes.SIGN_UP_START, signUp)
}

export function* onSignUpSuccess() {
yield takeLatest(UserActionsTypes.SIGN_UP_SUCCESS, signInAfterSignUp)
}


export function* userSagas() {
  yield all([call(onGoogleSignInStart), call(onEmailSignInStart), call(onCheckUserSession), call(onSignOut), call(onSignUpStart), call(onSignUpSuccess)])
};
