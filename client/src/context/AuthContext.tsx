import { createContext } from 'react';
// function a() {}
export const AuthContext = createContext({
  token: null,
  email: null,
  logOut() {},
  logIn(jwtToken?: any, email?: any) {},
  isAuthenticated: false,
});
