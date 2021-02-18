import { LOGIN_USER } from './types';

const initialState = {
  user: {},
};

export const userReducer = (
  state = initialState,
  action: { type: string; payload?: [] }
) => {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};
