import React, { useEffect, useState } from 'react';
import './styles.css';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Link } from 'react-router-dom';
import { getFavListMovies } from '../../api/Api';

function MovieRow({ title, items }) {
  const [favList, setFavList] = useState([]);
  
    
  useEffect(() => {
    if(title === "Fav List"){
      (async()=>{
        const response = await getFavListMovies(items);
        setFavList(response?.data.data.Movies);
      })();
      // console.log(response,"getFavListMovies");
    }
  }, [title]);

  const [scrollX, setScrollX] = useState(0);
  const handleLeftArrow = () => {
    let x = scrollX + Math.round(window.innerWidth / 2);
    if (x > 0) {
      x = 0;
    }
    setScrollX(x);
  }

  const handleRightArrow = () => {
    let x = scrollX - Math.round(window.innerWidth / 2);
    let listW = items.length * 400;
    if ((window.innerWidth - listW) > x) {
      x = (window.innerWidth - listW) - 80;
    }
    setScrollX(x);
  }
  // console.log(title,items,"MOVIE ROW")
  return (
    <div className="movieRow">
      <h2>{title}</h2>

      <div className="movieRow--left" onClick={handleLeftArrow}>
        <NavigateBeforeIcon style={{ fontSize: 50 }} />
      </div>

      <div className="movieRow--right" onClick={handleRightArrow}>
        <NavigateNextIcon style={{ fontSize: 50 }} />
      </div>

      <div className="movieRow--listarea">
        <div className="movieRow--list" style={{ marginLeft: scrollX, width: items?.length * 200 }}>
          {
            (favList.length>0?favList:items).map((item, key) => {
              return(
              // console.log(item.title, item.posterUrl, "itemsMap")
              <div key={key} className="movieRow--item">
                <Link to={`/details/${item.movieId}`}>
                  <img alt={item.title} src={`${item.posterUrl}`} style={{height:"200px"}}/>
                </Link>
              </div>
              )
            })
          }

        </div>
      </div>
    </div>
  );
}

export default MovieRow;
