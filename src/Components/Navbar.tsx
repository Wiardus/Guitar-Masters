import GMDialog from './GMDialog';
import './Navbar.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  


const Navbar = () => {

    return (
        <Router>
        <div className="navbar">
            <ul>
                <li>
                    <Link to="/HomePage">
                        Home
                    </Link>
                </li>
            </ul>
            
            <button>Profile</button>
            <button>Community</button>
            <button>Settings</button>           
            <GMDialog />
        </div>
        </Router>
    )
}

export default Navbar

//onChange={(e) => setUserName({...userName, username: e.target.value})}