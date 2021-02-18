export interface IComment {
  user: string;
  car: string;
  date: string;
  commentText: string;
}

export interface ICar {
  _id: string;
  brand: string;
  model: string;
  year: number;
  image: string;
}
