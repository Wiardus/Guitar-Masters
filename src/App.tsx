import './App.scss';
import HomePage from './Components/HomePage'
import Tutorial from './Components/Tutorial';
import Login from './Components/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";




function App() {
  return (
    <div>    
      <Login username={''} isLoggedIn={false} />
      <Router>
        <Switch>
          <Route path="/HomePage">
          <HomePage />
          </Route>
        </Switch>
      </Router>
      
      <Tutorial />
    </div>
  );
}

export default App;
