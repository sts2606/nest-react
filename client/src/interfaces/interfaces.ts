export interface IComment {
  user: string;
  car: string;
  date: string;
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
