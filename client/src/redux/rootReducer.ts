import { combineReducers } from 'redux';
import { carReducer } from './carReducer';
import { commentReducer } from './commentReducer';

export const rootReducer = combineReducers({
  cars: carReducer,
  comments: commentReducer,
});
