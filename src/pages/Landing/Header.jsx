import React from 'react';
import NetflixLogo from '../../assets/logo.png';
import Form from '../../components/subComponents/Form';
import SignIn from '../SignIn/SignIn';
import {Routes, Route, useNavigate} from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const navigateSignIn = () => {
    navigate('/signIn');
  };
  return (
    <div className="header-container">
      <header>
        <img className="netflix-logo" src={NetflixLogo} alt="Netflix Logo" />
        <button className='header-button'  onClick={navigateSignIn}> Sign in</button>
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
