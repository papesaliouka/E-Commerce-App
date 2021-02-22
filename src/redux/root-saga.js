import { call, all} from 'redux-saga/effects';

import { shopSagas} from './shop/shop.sagas';

import { userSagas} from '../redux/user-reducer/user-sagas';

import {cartSagas} from '../redux/cart-reducer/cart-sagas';

export default function* rootSaga () {
  yield all([
    call(shopSagas),
    call(userSagas),
    call(cartSagas)
  ])
}
