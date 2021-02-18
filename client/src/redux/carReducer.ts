import { GET_CARS, CARS_LOADING } from './types';

const initialState = {
  loading: false,
  cars: [],
};

export const carReducer = (
  state = initialState,
  action: { type: string; payload?: [] }
) => {
  switch (action.type) {
    case GET_CARS:
      return { ...state, loading: false, cars: action.payload };

    case CARS_LOADING:
      return { ...state, loading: true };

    default:
      return state;
  }
};
