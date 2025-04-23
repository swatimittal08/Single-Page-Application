import Navbar from "./Components/Navbar"
import { BrowserRouter , Routes , Route } from "react-router-dom"
import Firstpage from "./Components/Firstpage"
import Explore from "./Components/Explore"
import Hire from "./Components/Hire"
import Challenges from "./Components/Challenges"


const App = () => {
    return(
        <div>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Firstpage/>} />
                    <Route path="/explore" element={<Explore/>} />
                    <Route path="/hire" element={<Hire/>} />
                    <Route path="/challenges" element={<Challenges/>} />                  
                </Routes>
            </BrowserRouter>            
        </div>

    )
}

export default App 