import {
  GET_CARS,
  GET_COMMENTS,
  CARS_LOADING,
  CHANGE_COMMENT_INPUT,
  LOGIN_USER,
  ADD_COMMENT,
} from './types';

import { IComment } from './../interfaces/interfaces';

import { useStore } from 'react-redux';

export function getCarAction() {
  return async (dispatch: (arg0: { type: string; payload?: any }) => void) => {
    dispatch({ type: CARS_LOADING });
    const response = await fetch(`${window.location.href}`);
    const json = await response.json();
    dispatch({ type: GET_CARS, payload: json });
  };
}

export function getCommentsAction() {
  return async (
    dispatch: (arg0: { type: string; payload: IComment[] }) => void
  ) => {
    const response = await fetch(`${window.location.origin}/comments`);
    const data = await response.json();

    for (const item of data) {
      const userData = await fetch(
        `${window.location.origin}/users/${item.user}`
      );
      const user = await userData.json();
      item.user = `${user.firstName} ${user.lastName}`;
    }
    dispatch({ type: GET_COMMENTS, payload: data });
  };
}

export function commentInputAction(newValue: string) {
  return (dispatch: (arg0: { type: string; payload: string }) => void) => {
    dispatch({ type: CHANGE_COMMENT_INPUT, payload: newValue });
  };
}

export function addNewComment(newComment: IComment, user: string) {
  return (dispatch: (arg0: any) => void) => {
    return fetch('http://localhost:3000/comments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(newComment),
    })
      .then((resp) => resp.json())
      .then((data) => {
        dispatch({ type: ADD_COMMENT, payload: { ...data, user: user } });
        dispatch({ type: CHANGE_COMMENT_INPUT, payload: '' });
      });
  };
}

export function userPostFetch(user: {}) {
  return (dispatch: (arg0: any) => void) => {
    return fetch('http://localhost:3000/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then((resp) => resp.json())
      .then((data) => {
        localStorage.setItem('token', data.accessToken);
        dispatch(loginUser(data));
      });
  };
}

export function loginUser(newValue: {}) {
  return (dispatch: (arg0: { type: string; payload: any }) => void) => {
    dispatch({ type: LOGIN_USER, payload: newValue });
  };
}
