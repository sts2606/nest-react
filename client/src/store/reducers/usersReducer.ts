import { LOGIN_USER, UserState } from './../types/user';

const initialState: UserState = {
  user: {
    awatar: '',
    email: '',
    firstName: '',
    lastName: '',
    _id: '',
    password: null,
    gender: '',
  },
};

export const userReducer = (
  state: UserState = initialState,
  action: { type: string; payload?: [] }
) => {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};
