import { localStorageAPI } from '../../services/localStorageService';
import { usersAPI } from './../../services/api';
import { LOGIN_USER } from './../types/user';
import { IUser } from '../../interfaces/interfaces';

export function userPostFetch(user: IUser) {
  return (dispatch: (arg0: any) => void) => {
    usersAPI
      .register(user)
      .then((data) => {
        localStorageAPI.setJwtToken(data.token.access_token);
        dispatch(loginUser(data.user));
      })
      .catch((e) => console.log('Error'));
  };
}

export function userLoginFetch(user: { email: string; password: string }) {
  return (dispatch: (arg0: any) => void) => {
    usersAPI
      .login(user)
      .then((data) => {
        localStorageAPI.setJwtToken(data.token.access_token);
        dispatch(loginUser(data.user));
      })
      .catch((e) => console.log('Error'));
  };
}

export function getProfileFetch() {
  return (dispatch: (arg0: any) => void) => {
    usersAPI
      .getProfile()
      .then((response) => {
        dispatch(loginUser(response));
      })
      .catch((e) => console.log(e));
  };
}

export function loginUser(newValue: IUser) {
  return { type: LOGIN_USER, payload: newValue };
}
