import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {BrowserRouter, Routes , Route} from 'react-router-dom';

import Home from './pages/Home';
import Details from './pages/Details';
import LandingPage from './pages/Landing/LandingPage';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
       <BrowserRouter>
            <Routes >
                <Route path="/"  element={<Home/>} />
                <Route path="/landing"  element={ <LandingPage/> } />
                <Route path="/details/:type/:id"  element={<Details/>} />
            </Routes >        
        </BrowserRouter>
    </div>
  )
}

export default App
