import { BrowserRouter } from 'react-router-dom';
import { useRouts } from './routes';

const App: React.FC = () => {
  const routs = useRouts(false);
  console.log(routs);
  return (
    <div className="container">
      <BrowserRouter>{routs}</BrowserRouter>
    </div>
  );
};

export default App;
