import React, { useEffect, useState } from 'react';
import './styles.css';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';

import DoneIcon from '@mui/icons-material/Done';

function FeaturedMovie({ item , HandleAddFavlist, inFavList}) {
  let description = item.description.length > 200 ? item.description.substring(0, 200) + '...' : item.description;
  function handleSubmit(){
    HandleAddFavlist();
    // console.log("handleSubmit");
  }
  return (
    <section
      className="featured"
      style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: `url(${item.thumbnailUrl})`
      }}
    >
      <div className="featured--vertical">
        <div className="featured--horizontal">
          <div className="featured--name">{item.title}</div>

          <div className="featured--info">
            <div className="featured--points">{item.imdb} points</div>
            <div className="featured--year">{item.year}</div>
            <div className="featured--seasons">Maturity : {item.movieRating}</div>
          </div>

          <div className="featured--description">{description}</div>
          <div className="featured--buttons">
            <Link to={`/details/${item.movieId}`} className="featured--watchbutton"><div><PlayArrowIcon /> Play Now</div></Link>
            <button onClick={handleSubmit} className="featured--mylistbutton"><div>{inFavList?<DoneIcon style={{color:"green"}}/>:<AddIcon />}My List</div></button>
          </div>
          <div className="featured--genres"><strong>Genere:</strong> {item.genres.join(', ')}</div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedMovie;
