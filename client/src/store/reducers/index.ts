import { userReducer } from './usersReducer';
import { combineReducers } from 'redux';
import { carsReducer } from './carsReducer';
export const rootReducer = combineReducers({
  cars: carsReducer,
  user: userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
