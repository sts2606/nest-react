export const LOGIN_USER = 'LOGIN_USER';

export interface UserState {
  user: {
    awatar: string;
    email: string;
    firstName: string;
    lastName: string;
    _id: string;
    password: null;
    gender: string;
  };
}
