import React, { useState } from 'react';
import './styles.css';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';
import VideoPlayer from '../../pages/VideoPlayer/VideoPlayer';
import AspectRatioIcon from '@mui/icons-material/AspectRatio';
function FeaturedMovie({ item }) {

  const [urlVideo, setUrlVideo] = useState();
  // const [videoFullScreen, setVideoFullScreen] = useState(false);
  let description = item.description.length > 200 ? item.description.substring(0, 200) + '...' : item.description;
  function handleShowTrailer() {
    setUrlVideo(item.trailerUrl);
  }
  // function handleVideoFullScreen() {
  //   setVideoFullScreen(!videoFullScreen);
  // }
  return (
    <section
      className="featured"

      style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: `url(${item.posterUrl})`
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
            <Link to={`/details/dasdas/${item.movieId}`} className="featured--watchbutton"><div><PlayArrowIcon /> Play Now</div></Link>
            <a href="/" disabled className="featured--mylistbutton"><div><AddIcon />My List</div></a>
          </div>
          <div className="featured--genres"><strong>Genere:</strong> {item.genres.join(', ')}</div>
        </div>
      </div>
      {/* {
        urlVideo !== undefined
        &&
        <aside className={ videoFullScreen ? 'video--fullscreen' : ''}>
          <div>
            <button onClick={() => handleVideoFullScreen()}><AspectRatioIcon /></button>
          </div>
          <iframe frameBorder="0" height="100%" width="100%" title="1"
            src={urlVideo}>
          </iframe>
        </aside>
      } */}
    </section>
  );
}

export default FeaturedMovie;
