import { GET_COMMENTS, CHANGE_COMMENT_INPUT, ADD_COMMENT } from './types';

const initialState = {
  comments: [],
  newCommentField: '',
};

export const commentReducer = (
  state = initialState,
  action: { type: string; payload?: [] }
) => {
  switch (action.type) {
    case GET_COMMENTS:
      return { ...state, comments: action.payload };

    case ADD_COMMENT:
      console.log(action);
      return { ...state, comments: [...state.comments, action.payload] };

    case CHANGE_COMMENT_INPUT:
      return { ...state, newCommentField: action.payload };

    default:
      return state;
  }
};
