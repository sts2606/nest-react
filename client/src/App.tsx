import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { AuthContext } from './context/AuthContext';
import { useAuth } from './hooks/auth.hook';
import { useRouts } from './routes';
// import { getProfileFetch } from './redux/actions';

const App: React.FC = () => {
  const user = useSelector(
    (state: { user: { user: { accessToken: string } } }) => state.user.user
  );

  const dispatch = useDispatch();

  //   useEffect(() => {
  //     dispatch(getProfileFetch());
  //   }, []);

  const accessToken = user.accessToken;
  const isAuthenticated = !!accessToken;
  const routs = useRouts(isAuthenticated);
  return (
    <AuthContext.Provider value={{ isAuthenticated }}>
      <BrowserRouter>
        <div className="container flex-center">{routs}</div>
      </BrowserRouter>
    </AuthContext.Provider>
  );
};

export default App;
