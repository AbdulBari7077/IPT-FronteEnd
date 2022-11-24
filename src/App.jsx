import { useState } from 'react'
import './App.css'
import {BrowserRouter, Routes , Route} from 'react-router-dom';
import Home from './pages/Home';
import Details from './pages/Details';
import LandingPage from './pages/Landing/LandingPage';
import VideoPlayer from './pages/VideoPlayer/VideoPlayer';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import ChoosePlan from './pages/ChoosePlan/ChoosePlan';
import CreditCard from './pages/CreditCard/CreditCard';
import ManageProfile from './pages/ManageProfile/ManageProfile';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
       <BrowserRouter>
            <Routes >
                <Route path="/"  element={<LandingPage/>} />
                <Route path="/home"  element={ <Home/> } />
                <Route path="/details/:type/:id"  element={<Details/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/videoPlayer" element={<VideoPlayer/>} />
                <Route path="/register"  element={<SignUp/>} />
                <Route path="/choosePlan"  element={<ChoosePlan/>} />
                <Route path="/creditCard"  element={<CreditCard/>} forceRefresh={true}/>
                <Route path="/manageProfile"  element={<ManageProfile/>} />
            </Routes >        
        </BrowserRouter>
    </div>
  )
}

export default App
