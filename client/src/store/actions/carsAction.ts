import axios from 'axios';
import { CarActionTypes, ICar } from './../types/car';

export function carsGetFetch() {
  return (dispatch: (arg0: any) => void) => {
    dispatch(carsGetFetchStarted());
    axios
      .get(`${window.location.href}`)
      .then((data) => {
        dispatch(carsGetFetchSuccess(data.data));
      })
      .catch((e) => dispatch(carsGetFetchError()));
  };
}

function carsGetFetchStarted() {
  return { type: CarActionTypes.FETCH_CARS_START };
}

function carsGetFetchSuccess(cars: []) {
  return { type: CarActionTypes.FETCH_CARS_SUCCESS, payload: cars };
}

function carsGetFetchError() {
  return {
    type: CarActionTypes.FETCH_CARS_ERROR,
    payload: 'Что-то пошло не так. Попробуйте позже!',
  };
}

export function getAllCommentsOfCar(carId: string) {
  return (dispatch: (arg0: any) => void) => {
    dispatch(getFetchAllCOmmentsOfCArStarted(carId));
    const car = window.location.href.split('/').pop()!;
    axios
      .get(`${window.location.href}`)
      .then((data) => {
        dispatch(getFetchAllCommentsOfCArsSuccess(car, data.data));
      })
      .catch((e) => dispatch(carsGetFetchError()));
  };
}

function getFetchAllCOmmentsOfCArStarted(carId: string) {
  return {
    type: CarActionTypes.GET_ALL_COMMENTS_OF_CAR_STARTS,
    payload: carId,
  };
}

function getFetchAllCommentsOfCArsSuccess(
  carId: string,
  data: { comments: [] }
) {
  return {
    type: CarActionTypes.GET_ALL_COMMENTS_OF_CAR_SUCCESS,
    payload: { carId, comments: data.comments },
  };
}
