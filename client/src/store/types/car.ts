export enum CarActionTypes {
  FETCH_CARS_START = 'FETCH_CARS_START',
  FETCH_CARS_SUCCESS = 'FETCH_CARS_SUCCESS',
  FETCH_CARS_ERROR = 'FETCH_CARS_ERROR',
  GET_ALL_COMMENTS_OF_CAR_STARTS = 'GET_ALL_COMMENTS_OF_CAR_STARTS',
  GET_ALL_COMMENTS_OF_CAR_SUCCESS = 'GET_ALL_COMMENTS_OF_CAR_SUCCESS',
  GET_ALL_COMMENTS_OF_CAR_ERROR = 'GET_ALL_COMMENTS_OF_CAR_ERROR',
}

export interface ICar {
  _id: string;
  brand: string;
  model: string;
  year: number;
  image: string;
  comments: IComment[];
}

export interface IComment {
  userId: string;
  userFullName: string;
  car: string;
  commentText: string;
}

export interface CarState {
  cars: any[];
  loading: boolean;
  error: null | string;
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

export type CarAction =
  | FetchCarAction
  | FetchCarErrorAction
  | FetchCarSuccessAction
  | GetAllCommentsOfCarStart
  | GetAllCommentsOfCarSuccess
  | GetAllCommentsOfCarError;
