import { BrowserRouter } from 'react-router-dom';
import { useRouts } from './routes';
import { Header } from './components/Header';
import { useTypedSelector } from './hooks/useTypedSelector';
import { IUserFromServer } from './interfaces/interfaces';

const App: React.FC = () => {
  const user: IUserFromServer = useTypedSelector((state) => state.userReducer);
  const accessToken = user.user._id;
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
