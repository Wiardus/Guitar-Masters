import Header from "./Header"
import Navbar from "./Navbar"
import TutorialDialog from "./TutorialDialog"

// functie schrijven of statehook om knop van volgende tutorial dialog uit te schakelen totdat de eerste is aangeklikt
//Wellicht boolean en dan opacity op 0 bij false

const Tutorial = () => {
    return (
        
        <div className="tutorial">
            <Header title={'Tutorial'}/>
            <Navbar />
            <h1>Welcome</h1>
            <TutorialDialog header={'Welcome to Guitar Masters!'} content={'Guitar Masters is a platform for learning guitar in a modern, exciting way.'} buttonName={'Click here to get started'}/>           
        </div>
       
    )
}

export default Tutorial
