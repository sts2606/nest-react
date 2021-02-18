import { createContext } from 'react';
// function a() {}
export const AuthContext = createContext({
  isAuthenticated: false,
});
