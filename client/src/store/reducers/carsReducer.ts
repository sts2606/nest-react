import { CarAction, CarState, CarActionTypes } from '../types/car';

const initialState: CarState = {
  cars: [],
  loading: false,
  error: null,
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
            return { ...car, loadingComments: true };
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
              loadingComments: false,
            };
          }
          return car;
        }),
      };
    default:
      return state;
  }
};
