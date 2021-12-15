import Community from './Community';
import GMDialog from './GMDialog';
import './Navbar.scss';
import Profile from './Profile';

interface Props {
    href: string
}

const Navbar = () => {
    return (
    <div>
        <nav className="navbar">
            <button className="link">Home</button>
            <button className="link">Tutorial</button>
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
