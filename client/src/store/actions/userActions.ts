import axios from 'axios';
import { LOGIN_USER } from './../types/user';
import { IUser } from '../../interfaces/interfaces';

export function userPostFetch(user: IUser) {
  return (dispatch: (arg0: any) => void) => {
    return axios
      .post(`${window.location.href}`, user)
      .then((data) => {
        localStorage.setItem('token', data.data.token.access_token);
        dispatch(loginUser(data.data.user));
      })
      .catch((e) => console.log('Error'));
  };
}

export function loginUser(newValue: IUser) {
  return { type: LOGIN_USER, payload: newValue };
}
