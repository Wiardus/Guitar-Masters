import React, { useState } from 'react'
import Header from './Header'

interface Props {
    username: string
    password?: string
    isLoggedIn: boolean
}

let user = {
    username: 'Ynte',
    password: '123'
}

const Login: React.FC<Props> = ({username}: Props) => {
    const [userName, setUserName] = useState({
        username: ''
    })

    const [passWord, setPassWord] = useState ({
        password: ''
    })

    const [IsLoggedIn, setIsLoggedIn] = useState({
        isLoggedIn: false
    })

    function logIn () {
        if (userName.username !== user.username || passWord.password !== user.password) {
            alert('Your username or password is incorrect')
            return 
        } else {
            alert('Welcome '+ userName.username)
            setIsLoggedIn({...IsLoggedIn, isLoggedIn: true})               
        }   
    }

    if (IsLoggedIn.isLoggedIn === false) {
        document.body.style.overflowY = 'hidden'
    } else {
        document.body.style.overflowY = 'visible'
    }

    console.log(IsLoggedIn)

    return (
        <div>
            <Header title={'Guitar Masters©'} />
            <form className="login">
                <h3>Username:</h3>
                <input type="text" value={userName.username} onChange={(e) => setUserName({...userName, username: e.target.value})} placeholder="Enter your username..." />
                <input type="text" value={passWord.password} onChange={(e) => setPassWord({...passWord, password: e.target.value})} />
                <button type="button" onClick={logIn}>Login</button>
            </form>
        </div>
       
    )
}



export default Login