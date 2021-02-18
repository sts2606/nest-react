import { useCallback, useState, useEffect } from 'react';

const storageName = 'userData';

export const useAuth = () => {
  const [token, setToken] = useState(null);
  const [email, setEmail] = useState(null);

  const logIn = useCallback((jwtToken, adress) => {
    setToken(jwtToken);
    setEmail(adress);
    localStorage.setItem(storageName, JSON.stringify({ adress, jwtToken }));
  }, []);
  const logOut = useCallback(() => {
    setEmail(null);
    setToken(null);
    localStorage.removeItem(storageName);
  }, []);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem(storageName)!);
    if (data && data.token) {
      logIn(data.token, data.userId);
    }
  }, [logIn]);

  return { logIn, logOut, token, email };
};
