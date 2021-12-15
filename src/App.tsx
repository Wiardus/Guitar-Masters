import './App.scss';
import HomePage from './Components/HomePage'
import Tutorial from './Components/Tutorial';
import Login from './Components/Login';

function App() {
  return (
    <div>    
      <Login username={''} isLoggedIn={false} />              
      <HomePage />            
      <Tutorial />  

    </div>
  );
}

export default App;
