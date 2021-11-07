import GMDialog from './GMDialog';
import './Navbar.scss';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  


const Navbar = () => {

    return (
      
        <div className="navbar">
            <button>Home</button>
            <button>Profile</button>
            <button>Community</button>
            <button>Settings</button>           
            <GMDialog />  
        </div>
    )
}

export default Navbar

//onChange={(e) => setUserName({...userName, username: e.target.value})}