import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home } from './Pages/Home';
import { Login } from './Pages/Login';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/login" component={ Login } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
