import React, { useEffect, useState } from 'react';
import Tmdb from '../../Tmdb';
import { useParams } from 'react-router';
import TheatersIcon from '@mui/icons-material/Theaters';
import AspectRatioIcon from '@mui/icons-material/AspectRatio';
import './styles.css';
import { useNavigate } from 'react-router-dom';
import RateDialog from '../../components/rateMovie';
import { getMovieById } from '../../api/Api';
import AddIcon from '@mui/icons-material/Add';

function Details(){
    const navigate = useNavigate();
    const { id } = useParams();
    const [movieDetails, setMovieDetails] = useState({});
    const [urlVideo, setUrlVideo] = useState();
    const [videoFullScreen, setVideoFullScreen] = useState(false);
    const [descriptionVideo, setDescriptionVideo] = useState();
    const [dialogRateOpen, setDialogRateOpen] = React.useState(false);
    const [rateValue, setRateValue] = React.useState(3);
    useEffect(() => {
        const loadAll = async () => {
            const movie = await getMovieById(id);
            setMovieDetails(movie.data.data.Movie);
            setDescriptionVideo(movie.data.data.Movie.description > 300 ? movie.data.data.Movie.description.substring(0, 300) + '...' : movie.data.data.Movie.description);
        }
        loadAll();
    }, [id])
    useEffect(() => {
      console.log(movieDetails,"MOVIE DETAILS")
    }, [movieDetails])
    
    async function HandleAddFavlist(){
        const userData = JSON.parse(localStorage.getItem('userData'));
        const response = await addToFavlist(userData['uid'],item.movieId);
        if(response) {
          
        }
      }
    const handleCloseDialog = () => {
        setDialogRateOpen(false);
    }
    function handleShowTrailer(){
        setUrlVideo(movieDetails.trailerUrl);
    }
    function handleVideoFullScreen(){
        setVideoFullScreen(!videoFullScreen);
    }
    
    return (
        <>
        <RateDialog 
        open={dialogRateOpen}
        setOpen={setDialogRateOpen}
        handleCloseRateDialog={handleCloseDialog}
        setRateValue={setRateValue}
        rateValue={rateValue}
        />
        <main 
            className="details" 
            style={{
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundImage: `url(${movieDetails.posterUrl})`
            }}
            >   
        <button onClick={() => navigate(-1)} className="details--backbutton">Back</button>
            <section> 
                <div>
                    <div className="details--info">
                        <h3 className={movieDetails.vote_average > 5 ? 'positive' : 'negative'}>{movieDetails.rating * 10 + '%'}</h3>
                        <button className='rate-movie' onClick={()=>{
                            setDialogRateOpen(true)
                        }}> Rate Movie
                        </button>
                        <a href="/" style={{marginLeft:"20px"}} className="featured--mylistbutton"><div><AddIcon />My List</div></a>
                    </div>
                    <h1>{movieDetails.original_title || movieDetails.title}</h1>
                    <h4>{descriptionVideo}</h4>
                    <span onClick={() => handleShowTrailer()} className="details--viewtrailer">
                        <div className="viewtrailer">
                            <TheatersIcon />watch trailer
                        </div>
                    </span>
                    
                </div>
            </section>
            {
                urlVideo !== undefined
                &&
                <aside className={videoFullScreen ? 'video--fullscreen' : ''}>
                    <div>
                        <button onClick={() => handleVideoFullScreen()}><AspectRatioIcon /></button>
                    </div>
                    <iframe frameBorder="0" height="100%" width="100%" title="1"
                        src={urlVideo}>
                    </iframe>
                </aside>
            }
        </main>
            </>
    )
}

export default Details;