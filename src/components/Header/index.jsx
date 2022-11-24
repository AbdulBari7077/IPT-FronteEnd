import React, { useState } from 'react';
import './styles.css';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { GenreOptions, topFilms } from '../../utils';
import { Link, useNavigate } from 'react-router-dom';

function Header({ black }) {
  const navigate = useNavigate();
  const [movieValue, setMovieValue] = useState('');
  const [genereValue, setGenereValue] = useState('');


  function handleLogout(){
    localStorage.clear();
    navigate('/login');

  }
  function handleDropdownMovie(event,newValue) {
    setMovieValue(newValue);
    console.log(newValue)
  }
  function handleDropdownGenere(event,newValue) {
    setGenereValue(newValue);
    console.log(newValue)
  }
  
  return (
    <header className={black ? 'black' : ''}>
      <div className='mono-search-header'>
        <div className="header--logo">
          <a href="/">
            <img alt="Netflix" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png" />
          </a>
        </div>
        <div>
          <Autocomplete
            onChange={handleDropdownMovie}
            value={movieValue}
            // inputValue={inputValue}
            // onInputChange={handleDropdownInputMovie}
            className='search-autocomplete'
            size="small"
            id="controllable-states-demo"
            options={topFilms}
            sx={{
              '& .MuiTextField-root': { m: 1, width: '300px' },
            }}
            renderInput={(params) => <TextField color='error' className='search-autocomplete-textfield' {...params} placeholder='Search Movie' />}
          />
        </div>
        <div className='header-dropdown'>
          <Autocomplete
              onChange={handleDropdownGenere}
              value={genereValue}
              size="small"
              id="combo-box-demo"
              options={GenreOptions}
              sx={{
                '& .MuiTextField-root': { m: 1, width: '200px' },
              }}
              renderInput={(params) => <TextField color='error' className='search-autocomplete-textfield' {...params} placeholder='Select Genere' />}
            />
        </div>
      </div>
      <div className="dropdown">
        <div className="dropbtn">
          <img alt="" src="https://learning.royalbcmuseum.bc.ca/wp-content/uploads/2014/07/netflix-face.jpg" />
        </div>
        <div className="dropdown-content">
          <Link to='/manageProfile'>Manage Profile</Link>
          <a onClick={handleLogout}>Sign out of netflix</a>
        </div>
      </div>
    </header>

  );
}

export default Header;
