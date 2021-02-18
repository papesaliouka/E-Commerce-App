import {combineReducers} from 'redux';

import userReducer from '../redux/user-reducer/user.reducers';
import cartReducer from '../redux/cart-reducer/cart.reducer';

export default combineReducers({
  user: userReducer,
  cart: cartReducer
});