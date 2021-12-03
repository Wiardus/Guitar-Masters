import { useState } from 'react'
import { user } from './Login'

 const Profile = () => {

    const [IsOpen, setIsOpen] =  useState({
        isOpen: false
    })

    let profile = (
        <div className="community">
            <h2>Naam: {user.username}</h2>
        </div>
    )

    if (IsOpen.isOpen) {
        return (         
            <div>
                 <button onClick={(e) => setIsOpen({...IsOpen, isOpen: false})}>Profile</button>
                {profile}</div>
        )
    } else {
        return (
            <div>              
                 <button onClick={(e) => setIsOpen({...IsOpen, isOpen: true})}>Profile</button>
            </div>
           
        )
    }
}

export default Profile