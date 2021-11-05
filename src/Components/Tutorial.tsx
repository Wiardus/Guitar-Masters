import Header from "./Header"
import Navbar from "./Navbar"
import Dialog from "./Dialog"
import TutorialDialog from "./TutorialDialog"

// functie schrijven of statehook om knop van volgende tutorial dialog uit te schakelen totdat de eerste is aangeklikt

const Tutorial = () => {
    return (
        
        <div className="tutorial">
            <Header title={'Tutorial'}/>
            <Navbar />
            <h1>Welcome</h1>
            <TutorialDialog header={'Welcome to Guitar Masters!'} content={'Guitar Masters is a platform for learning guitar in a modern, exciting way.'} buttonName={'Click here to get started'}/>
            <TutorialDialog header={'Tutorial'} buttonName={'Next'} />
            
        </div>
       
    )
}

export default Tutorial
