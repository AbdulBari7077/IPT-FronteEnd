import { useState } from 'react'
import './App.css'
import 'react-toastify/dist/ReactToastify.css';
import {BrowserRouter, Routes , Route} from 'react-router-dom';
import Home from './pages/Home';
import Details from './pages/Details';
import LandingPage from './pages/Landing/LandingPage.jsx';
import SignIn from '../src/pages/Login/SignIn.jsx';
import SignUp from './pages/SignUp/SignUp.jsx';
import ChoosePlan from './pages/ChoosePlan/ChoosePlan.jsx';
import CreditCard from './pages/CreditCard/CreditCard.jsx';
import ManageProfile from './pages/ManageProfile/ManageProfile.jsx';
import ForgetPassword from './pages/ForgetPassword/ForgetPassword.jsx';



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
       <BrowserRouter>
            <Routes >
                <Route path="/"  element={<LandingPage/>} />
                <Route path="/home"  element={ <Home/> } />
                <Route path="/details/:id"  element={<Details/>} />
                <Route path="/login" element={<SignIn/>} />
                <Route path="/register"  element={<SignUp/>} />
                <Route path="/choosePlan"  element={<ChoosePlan/>} />
                <Route path="/creditCard"  forceRefresh={true}>
                  <Route path=":selectPlan" element={<CreditCard/>} />
                </Route>
                <Route path="/manageProfile"  element={<ManageProfile/>} />
                <Route path="/forgetPassword/:email"  element={<ForgetPassword/>} />
            </Routes >        
        </BrowserRouter>
    </div>
  )
}

export default App
