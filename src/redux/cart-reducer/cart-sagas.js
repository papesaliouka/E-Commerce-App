import UserActionsTypes from '../user-reducer/user.types';

import {clearCart} from './cart.actions';

import { put, call, takeLatest, all} from 'redux-saga/effects';



export function* clearCartOnSignOut (){
  yield put(clearCart())
};

export function* onSignOutSucess(){
 yield takeLatest(UserActionsTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut)
};

export function* cartSagas () {
  yield all([call(onSignOutSucess)])
}