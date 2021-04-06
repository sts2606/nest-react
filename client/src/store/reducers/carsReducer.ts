import { act } from '@testing-library/react';
import { CarAction, CarState, CarActionTypes } from '../types/car';

const initialState: CarState = {
  cars: [{ comments: [] }],
  loading: false,
  error: null,
  commentLoading: false,
};

export const carsReducer = (
  state: CarState = initialState,
  action: CarAction
): CarState => {
  switch (action.type) {
    case CarActionTypes.FETCH_CARS_START:
      return { ...state, loading: true };
    case CarActionTypes.FETCH_CARS_SUCCESS:
      return { ...state, cars: action.payload, loading: false };
    case CarActionTypes.FETCH_CARS_ERROR:
      return { ...state, error: action.payload, loading: false };
    case CarActionTypes.GET_ALL_COMMENTS_OF_CAR_STARTS:
      return {
        ...state,
        cars: state.cars.map((car) => {
          if (car._id === action.payload) {
            return { ...car };
          }
          return car;
        }),
      };
    case CarActionTypes.GET_ALL_COMMENTS_OF_CAR_SUCCESS:
      return {
        ...state,
        cars: state.cars.map((car) => {
          if (car._id === action.payload.carId) {
            return {
              ...car,
              comments: [...action.payload.comments],
            };
          }
          return car;
        }),
      };
    case CarActionTypes.COMMENT_POST_FETCH_START:
      return { ...state, commentLoading: true };
    case CarActionTypes.COMMENT_POST_FETCH_SUCCESS:
      return {
        ...state,
        commentLoading: false,
        cars: state.cars.map((car) => {
          if (car._id === action.payload.car) {
            return {
              ...car,
              comments: [...car.comments, action.payload],
            };
          }
          return car;
        }),
      };
    default:
      return state;
  }
};
