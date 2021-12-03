import Community from './Community';
import GMDialog from './GMDialog';
import './Navbar.scss';
import {
    BrowserRouter as Router, Route, Link, Switch
} from 'react-router-dom';
import Profile from './Profile';


const Navbar = () => {

    return (
    <div>
        <nav className="navbar">
            <Link to="/home" className="link">Home</Link>
            <Link to="/tutorial">Tutorial</Link>
            <Profile />
            <Community />
            <button>Settings</button>           
            <GMDialog />  
        </nav>
    </div>
  
    )
}

export default Navbar

//onChange={(e) => setUserName({...userName, username: e.target.value})}