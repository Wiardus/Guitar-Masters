import { useState } from 'react'

 const Community = () => {

    const [IsOpen, setIsOpen] =  useState({
        isOpen: false
    })

    let community = (
        <div className="community">
            <h2>Community</h2>
            <ul><b>Friends: </b>
                <li>friend</li>

            </ul>
        </div>
    )

    if (IsOpen.isOpen) {
        return (         
            <div>
                 <button onClick={(e) => setIsOpen({...IsOpen, isOpen: false})}>Community</button>
                {community}</div>
        )
    } else {
        return (
            <div>              
                 <button onClick={(e) => setIsOpen({...IsOpen, isOpen: true})}>Community</button>
            </div>
           
        )
    }
}

export default Community