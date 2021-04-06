import axios from 'axios';
import { IUser, ICar } from '../interfaces/interfaces';
import { localStorageAPI } from './localStorageService';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000/',
});

export const carsAPI = {
  getCars(): Promise<Array<ICar>> {
    return axiosInstance.get(`cars`).then((res) => res.data);
  },

  getCarDetail(id: string): Promise<ICar> {
    return axiosInstance.get(`cars/${id}`).then((res) => res.data);
  },

  addNewComment(comment: {
    userId: string;
    commentText: string;
    car: string;
  }): Promise<any> {
    return axiosInstance.post('cars/comment', comment);
  },
};

export const usersAPI = {
  getProfile(): Promise<IUser> {
    const token = localStorageAPI.getJwtToken();
    return axiosInstance
      .get(`auth/profile`, {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      })
      .then((res) => res.data);
  },

  login(user: { email: string; password: string }) {
    return axiosInstance.post('/auth/login', user).then((res) => res.data);
  },

  register(user: IUser) {
    return axiosInstance.post('/auth/register', user).then((res) => res.data);
  },
};
