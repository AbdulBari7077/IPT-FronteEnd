import React, { useState } from 'react';
import './styles.css';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { GenreOptions } from '../../utils';
import { Link, useNavigate } from 'react-router-dom';

function Header({ black }) {
  const navigate = useNavigate();
  function handleLogout(){
    localStorage.clear();
    navigate('/login');

  }
  const top100Films = [
    { label: 'The Shawshank Redemption', year: 1994 },
    { label: 'The Godfather', year: 1972 },
    { label: 'The Godfather: Part II', year: 1974 },
    { label: 'The Dark Knight', year: 2008 },
    { label: '12 Angry Men', year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: 'Pulp Fiction', year: 1994 },
    {
      label: 'The Lord of the Rings: The Return of the King',
      year: 2003,
    },
    { label: 'The Good, the Bad and the Ugly', year: 1966 },
    { label: 'Fight Club', year: 1999 },
    {
      label: 'The Lord of the Rings: The Fellowship of the Ring',
      year: 2001,
    },
    {
      label: 'Star Wars: Episode V - The Empire Strikes Back',
      year: 1980,
    },
    { label: 'Forrest Gump', year: 1994 },
    { label: 'Inception', year: 2010 },
    {
      label: 'The Lord of the Rings: The Two Towers',
      year: 2002,
    },
    { label: "One Flew Over the Cuckoo's Nest", year: 1975 },
    { label: 'Goodfellas', year: 1990 },
    { label: 'The Matrix', year: 1999 },
    { label: 'Seven Samurai', year: 1954 },
    {
      label: 'Star Wars: Episode IV - A New Hope',
      year: 1977,
    }
  ]
  const [movieValue, setMovieValue] = useState('');
  const [genereValue, setGenereValue] = useState('');
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
            options={top100Films}
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
