import './App.scss';
import HomePage from './Components/HomePage'
import Tutorial from './Components/Tutorial';
import Login from './Components/Login';
import {
  BrowserRouter as Router, Route, Link, Switch, BrowserRouter
} from 'react-router-dom';

function App() {
  return (
    <div>    
      <Login username={''} isLoggedIn={false} />   
      <BrowserRouter>    
        <Switch>
          <Route path="/home">  
            <HomePage />
          </Route>
          <Route path="/tutorial">        
            <Tutorial />  
          </Route>
        </Switch>
    </BrowserRouter>  
    </div>
  );
}

export default App;
