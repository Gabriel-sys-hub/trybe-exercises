import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../src/Pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route to="/" component={ Home } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
