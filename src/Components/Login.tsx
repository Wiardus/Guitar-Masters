import React, { useState } from 'react'
import Header from './Header'



interface Props {
    username: string
    isLoggedIn: boolean
}

const Login: React.FC<Props> = ({username}: Props) => {
    const [userName, setUserName] = useState({
        username: ''
    })

    const [IsLoggedIn, setIsLoggedIn] = useState({
        isLoggedIn: false
    })

    function logIn () {
        if (userName.username !== 'Ynte') {
            alert('Your username is incorrect')
            return 
        } else {
            alert('Welcome '+ userName.username)
            setIsLoggedIn({...IsLoggedIn, isLoggedIn: true})
           
        }
    
    }

    console.log(IsLoggedIn)

    return (
        <div>
            <Header title={'Guitar Masters©'} />
            <form className="login">
                <h3>Username:</h3>
                <input type="text" value={userName.username} onChange={(e) => setUserName({...userName, username: e.target.value})} placeholder="Enter your username..." />
                <button type="button" onClick={logIn}>Login</button>
            </form>
        </div>
       
    )
}



export default Login