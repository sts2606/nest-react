import { GET_CARS } from './types';

export function getCarAction() {
  console.log('getCarAction');
  return async (dispatch: Function) => {
    console.log('fetch');
    const response = await fetch(`${window.location.href}`);
    const json = await response.json();
    dispatch({ type: GET_CARS, payload: json });
  };
}
