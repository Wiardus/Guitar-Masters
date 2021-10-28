import GMDialog from './GMDialog';
import './Navbar.css';


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