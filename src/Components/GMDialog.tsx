import React, { useState } from 'react'

/* interface Props {
    isOpen: boolean
    setIsOpen?: (value: boolean | ((isOpen: boolean) => boolean)) => void;
} */

const styles = {
    completedSong: {
        opacity: "50%",
    }
}

const GMDialog = () => {

    const [IsOpen, setIsOpen] =  useState({
        isOpen: false
    })

    let gmdialog = (
        <div className="songList">
            <h3>Your Songs:</h3>
            <ul>
                <li className="songListItem">Smoke on the Water</li>
                <li className="songListItem" style={styles.completedSong}>CLiffs of Dover</li>
            </ul>
        </div>
    )

    if (IsOpen.isOpen) {
        return (         
            <div>
                 <button onClick={(e) => setIsOpen({...IsOpen, isOpen: false})}>Songs</button>
                {gmdialog}</div>
        )
    } else {
        return (
            <div>              
                 <button onClick={(e) => setIsOpen({...IsOpen, isOpen: true})}>Songs</button>
            </div>
           
        )
    }
}

export default GMDialog