export const localStorageAPI = {
  getJwtToken(): string | null {
    return localStorage.getItem('token');
  },

  setJwtToken(token: string): void {
    localStorage.setItem('token', token);
  },
};
