import Header from './Header'
import Navbar from './Navbar'

function start () {
    alert('Congratulations on starting your journey to become a guitar master!')
}

const HomePage = () => {
    return (
        <div className="homePage">
            <Header title={'Guitar Masters©'} />
            <Navbar />
            <div className="container">
                <button id="startBtn" onClick={start}>Start</button>
                <div className="guitarAnimation">
                    <img id="guitarSvg" src='https://upload.wikimedia.org/wikipedia/commons/5/53/LP_Guitar_black.svg' alt="Guitar Animation"/>
                </div>
            </div>
          

        </div>
      
    )
}

export default HomePage