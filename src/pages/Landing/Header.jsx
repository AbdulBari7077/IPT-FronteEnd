import React, { useEffect } from 'react';
import NetflixLogo from '../../assets/logo.png';
import Form from '../../components/subComponents/Form';
import {Routes, Route, useNavigate} from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('userData'));
    // console.log("USERDATA: " ,userData)
    if(!userData){
        return navigate('/');
    }
    else
    {
        // const isSubscribed = await checkUserSubscribed(userData.uid,userData.token);
        // return isSubscribed.data.message?navigate('/home'):navigate('/choosePlan');
        return navigate('/home');
    }
  }, []);
  return (
    <div className="header-container">
      <header>
        <img className="netflix-logo" src={NetflixLogo} alt="Netflix Logo" />
        <button className='header-button'  onClick={()=>{ navigate('/login');}}> Sign in</button>
      </header>
      <div className="showcase-wrapper">
        <div className="showcase">
          <h1 className="showcase-title">
            Unlimited movies, TV shows and more.
          </h1>
          <h2 className="showcase-sub-title">
            Watch anywhere. Cancel anytime.
          </h2>
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Header;
