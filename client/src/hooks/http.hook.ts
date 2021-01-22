import { useState, useCallback } from 'react';

export const useHttp = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const request = useCallback(
    async (url, method = 'GET', body = null, headers = {}) => {
      setLoading(true);
      try {
        if (body) {
          body = JSON.stringify(body);
          console.log(body);
          headers['Content-Type'] = 'application/json';
        }
        const responce = await fetch(url, {
          method,
          body,
          headers,
        });
        const data = await responce.json();
        if (!responce.ok) {
          console.log(headers);
          throw new Error(data.message || 'Something bad');
        }
        setLoading(false);
        return data;
      } catch (err) {
        setLoading(false);
        setError(err.message);
        throw err;
      }
    },
    []
  );
  const setClear = () => setError(null);
  return { loading, request, error, setClear };
};
