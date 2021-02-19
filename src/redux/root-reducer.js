import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage/'

import userReducer from '../redux/user-reducer/user.reducers';
import cartReducer from '../redux/cart-reducer/cart.reducer';
import directoryReducer from '../redux/directory/directory.reducer';
import shopReducer from './shop/shop.reducer';


const persistConfig={
  key: 'root',
  storage,
  whitelist: ['cart']
}

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer
})

export default persistReducer(persistConfig, rootReducer);