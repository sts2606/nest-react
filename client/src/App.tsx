import { BrowserRouter } from 'react-router-dom';
import { useRouts } from './routes';
import { Header } from './components/Header';
import { useTypedSelector } from './hooks/useTypedSelector';
import { IUserFromServer } from './interfaces/interfaces';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getProfileFetch } from './store/actions/userActions';

const App: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProfileFetch());
  }, []);

  const user: IUserFromServer = useTypedSelector((state) => state.user);
  const accessToken = user.user && user.user._id;
  const isAuthenticated = !!accessToken;
  const routs = useRouts(isAuthenticated);
  return (
    <BrowserRouter>
      <Header />
      <div className="container flex-center">{routs}</div>
    </BrowserRouter>
  );
};

export default App;
