import { useState } from 'react'
import './App.css'
import {BrowserRouter, Routes , Route} from 'react-router-dom';

import Home from './pages/Home';
import Details from './pages/Details';
import LandingPage from './pages/Landing/LandingPage';
import SignIn from './pages/SignIn/SignIn';
import VideoPlayer from './pages/VideoPlayer/VideoPlayer';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
       <BrowserRouter>
            <Routes >
                <Route path="/"  element={<LandingPage/>} />
                <Route path="/home"  element={ <Home/> } />
                <Route path="/details/:type/:id"  element={<Details/>} />
                <Route path="/signIn" element={<SignIn/>} />
                <Route path="/VideoPlayer" element={<VideoPlayer/>} />
            </Routes >        
        </BrowserRouter>
    </div>
  )
}

export default App
