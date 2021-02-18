import { combineReducers } from 'redux';
import { carReducer } from './carReducer';
import { commentReducer } from './commentReducer';
import { userReducer } from './userReducer';

export const rootReducer = combineReducers({
  cars: carReducer,
  comments: commentReducer,
  user: userReducer,
});
