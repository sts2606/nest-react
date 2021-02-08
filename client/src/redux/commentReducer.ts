import { GET_COMMENTS } from './types';

const initialState = {
  comments: [],
};

export const commentReducer = (
  state: object = initialState,
  action: { type: string; payload?: [] }
) => {
  switch (action.type) {
    case GET_COMMENTS:
      return { ...state, comments: action.payload };

    default:
      return state;
  }
};
