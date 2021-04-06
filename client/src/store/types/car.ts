import { IComment } from '../../interfaces/interfaces';

export enum CarActionTypes {
  FETCH_CARS_START = 'FETCH_CARS_START',
  FETCH_CARS_SUCCESS = 'FETCH_CARS_SUCCESS',
  FETCH_CARS_ERROR = 'FETCH_CARS_ERROR',
  GET_ALL_COMMENTS_OF_CAR_STARTS = 'GET_ALL_COMMENTS_OF_CAR_STARTS',
  GET_ALL_COMMENTS_OF_CAR_SUCCESS = 'GET_ALL_COMMENTS_OF_CAR_SUCCESS',
  GET_ALL_COMMENTS_OF_CAR_ERROR = 'GET_ALL_COMMENTS_OF_CAR_ERROR',
  COMMENT_POST_FETCH_START = 'COMMENT_POST_FETCH_START',
  COMMENT_POST_FETCH_SUCCESS = 'COMMENT_POST_FETCH_SUCCESS',
}
export interface CarState {
  cars: any[];
  loading: boolean;
  error: null | string;
  commentLoading: boolean;
}

interface FetchCarAction {
  type: CarActionTypes.FETCH_CARS_START;
}

interface FetchCarSuccessAction {
  type: CarActionTypes.FETCH_CARS_SUCCESS;
  payload: any[];
}

interface FetchCarErrorAction {
  type: CarActionTypes.FETCH_CARS_ERROR;
  payload: string;
}

interface GetAllCommentsOfCarStart {
  type: CarActionTypes.GET_ALL_COMMENTS_OF_CAR_STARTS;
  payload: { carId: string; car: object };
}

interface GetAllCommentsOfCarSuccess {
  type: CarActionTypes.GET_ALL_COMMENTS_OF_CAR_SUCCESS;
  payload: { carId: string; comments: [] };
}

interface GetAllCommentsOfCarError {
  type: CarActionTypes.GET_ALL_COMMENTS_OF_CAR_ERROR;
  payload: string;
}

interface PostNewCommentFetchStart {
  type: CarActionTypes.COMMENT_POST_FETCH_START;
}

interface PostNewCommentFetchSuccess {
  type: CarActionTypes.COMMENT_POST_FETCH_SUCCESS;
  payload: IComment;
}

export type CarAction =
  | FetchCarAction
  | FetchCarErrorAction
  | FetchCarSuccessAction
  | GetAllCommentsOfCarStart
  | GetAllCommentsOfCarSuccess
  | GetAllCommentsOfCarError
  | PostNewCommentFetchStart
  | PostNewCommentFetchSuccess;
