import React from 'react';
import Header from './Header';
import Footer from './Footer';
import MainBody from './MainBody'
import '../../styles/css/index.css';

const LandingPage = () => {
  return (
    <div className="App">
      <Header />
      <MainBody />
      <Footer />
    </div>
  );
}

export default LandingPage;
