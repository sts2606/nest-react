export interface IComment {
  userId: string;
  carId: string;
  commentText: string;
}

export interface IUser {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  gender: string;
}

export interface IUserFromServer {
  user: {
    email: string;
    firstName: string;
    lastName: string;
    password: null;
    gender: string;
    _id: string;
  };
}

export interface RouterParams {
  id: string;
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
  _id?: string;
  userId: string;
  userFullName?: string;
  car: string;
  commentText: string;
}
