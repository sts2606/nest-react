import { BrowserRouter } from 'react-router-dom';
import { AuthContext } from './context/AuthContext';
import { useAuth } from './hooks/auth.hook';
import { useRouts } from './routes';

const App: React.FC = () => {
  const { token, email, logIn, logOut } = useAuth();
  const isAuthenticated = !!token;
  const routs = useRouts(isAuthenticated);
  return (
    <AuthContext.Provider
      value={{ token, email, logOut, isAuthenticated, logIn }}
    >
      <BrowserRouter>
        <div className="container flex-center">{routs}</div>
      </BrowserRouter>
    </AuthContext.Provider>
  );
};

export default App;
