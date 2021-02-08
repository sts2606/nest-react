import { GET_CARS, GET_COMMENTS } from './types';

export function getCarAction(): Function {
  return async (dispatch: Function) => {
    const response = await fetch(`${window.location.href}`);
    const json = await response.json();
    dispatch({ type: GET_CARS, payload: json });
  };
}

export function getCommentsAction(carId: string) {
  return async (dispatch: Function) => {
    const response = await fetch(`${window.location.origin}/comments/${carId}`);
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
