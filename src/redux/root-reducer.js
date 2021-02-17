import {combineReducers} from 'redux';

import userReducer from '../redux/user-reducer/user.reducers';

export default combineReducers({
  user: userReducer
});