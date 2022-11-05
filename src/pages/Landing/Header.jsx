import React from 'react';
import NetflixLogo from '../../assets/logo.png';
import Form from '../../components/subComponents/Form';

const Header = () => {
  return (
    <div className="header-container">
      <header>
        <img className="netflix-logo" src={NetflixLogo} alt="Netflix Logo" />
        <button className='header-button'> Sign in</button>
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
