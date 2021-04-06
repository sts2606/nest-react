import { carsAPI } from './../../services/api';
import { CarActionTypes } from './../types/car';
import { ICar, IComment } from '../../interfaces/interfaces';

export function carsGetFetch() {
  return (dispatch: (arg0: any) => void) => {
    dispatch(carsGetFetchStarted());
    carsAPI
      .getCars()
      .then((data) => {
        dispatch(carsGetFetchSuccess(data));
      })
      .catch((e) => dispatch(carsGetFetchError()));
  };
}

function carsGetFetchStarted() {
  return { type: CarActionTypes.FETCH_CARS_START };
}

function carsGetFetchSuccess(cars: Array<ICar>) {
  return { type: CarActionTypes.FETCH_CARS_SUCCESS, payload: cars };
}

function carsGetFetchError() {
  return {
    type: CarActionTypes.FETCH_CARS_ERROR,
    payload: 'Что-то пошло не так. Попробуйте позже!',
  };
}

function getFetchAllCommentsOfCArStarted(carId: string) {
  return {
    type: CarActionTypes.GET_ALL_COMMENTS_OF_CAR_STARTS,
    payload: carId,
  };
}

function getFetchAllCommentsOfCArsSuccess(carId: string, data: ICar) {
  return {
    type: CarActionTypes.GET_ALL_COMMENTS_OF_CAR_SUCCESS,
    payload: { carId, comments: data.comments },
  };
}

function PostNewCommentFetchStart() {
  return {
    type: CarActionTypes.COMMENT_POST_FETCH_START,
  };
}

function PostNewCommentFetchSuccess(comment: IComment) {
  return {
    type: CarActionTypes.COMMENT_POST_FETCH_SUCCESS,
    payload: comment,
  };
}

export function getAllCommentsOfCar(carId: string) {
  return (dispatch: (arg0: any) => void) => {
    dispatch(getFetchAllCommentsOfCArStarted(carId));
    carsAPI
      .getCarDetail(carId)
      .then((data) => {
        dispatch(getFetchAllCommentsOfCArsSuccess(carId, data));
      })
      .catch((e) => dispatch(carsGetFetchError()));
  };
}

export function addNewComment(comment: {
  userId: string;
  commentText: string;
  car: string;
}) {
  return (dispatch: (arg0: any) => void) => {
    dispatch(PostNewCommentFetchStart());
    carsAPI.addNewComment(comment).then((res) => {
      if (res.status === 201) {
        dispatch(PostNewCommentFetchSuccess(res.data));
      }
    });
  };
}
