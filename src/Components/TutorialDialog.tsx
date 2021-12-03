import React, { useState } from 'react'

interface TutorialDialogProps {
    header: string
    content?: string
    buttonName?: string
}

const TutorialDialog = ({header, content, buttonName} : TutorialDialogProps) => {
    
    const [IsOpen, setIsOpen] = useState({
        isOpen: false
    }) 

    let tutorialDialog = 
         (
        <div className="tutorialDialog">
            <h2>{header}</h2>
            <p>{content}</p>
        </div> 
        )    
    

    if (IsOpen.isOpen) {
        return (         
            <div>
                 <button className="tutorialDialogBtn" onClick={(e) => setIsOpen({...IsOpen, isOpen: false})}>{buttonName}</button>
                {tutorialDialog}</div>
        )
    } else {
        return (
            <div>              
                 <button className="tutorialDialogBtn" onClick={(e) => setIsOpen({...IsOpen, isOpen: true})}>{buttonName}</button>
            </div>
           
        )
    }
  }  

export default TutorialDialog