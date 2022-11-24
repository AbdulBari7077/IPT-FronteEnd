import React, { useEffect, useState } from 'react';
import Tmdb from '../../Tmdb';
import { useParams } from 'react-router';
import TheatersIcon from '@mui/icons-material/Theaters';
import LanguageIcon from '@mui/icons-material/Language';
import AspectRatioIcon from '@mui/icons-material/AspectRatio';
import iconAmazon from '../../assets/icon-amazon.png';
import iconNetflix from '../../assets/icon-netflix.png';
import './styles.css';
import { Link, useNavigate } from 'react-router-dom';
import RateDialog from '../../components/rateMovie';

function Details(){
    const navigate = useNavigate();
    const { id, type } = useParams();
    const [movieDetails, setMovieDetails] = useState({});
    const [trailerVideo, setTrailerVideo] = useState([]);
    const [urlVideo, setUrlVideo] = useState();
    const [videoFullScreen, setVideoFullScreen] = useState(false);
    const [descriptionVideo, setDescriptionVideo] = useState();
    const [dialogRateOpen, setDialogRateOpen] = React.useState(false);
    const [rateValue, setRateValue] = React.useState(3);
    useEffect(() => {
        const loadAll = async () => {
            let movie = await Tmdb.getMovieInfo(id, type);
            let trailer = await Tmdb.getTrailerVideo(id, type)
            setMovieDetails(movie);
            setTrailerVideo(trailer);
            setDescriptionVideo(movie.overview.length > 300 ? movie.overview.substring(0, 300) + '...' : movie.overview);
            //console.log(movie)
        }
        loadAll();
    }, [id, type])
    const handleCloseDialog = () => {
        setDialogRateOpen(false);
        
      }
    function handleShowTrailer(){
        const trailer = trailerVideo.results;
        if(trailer !== undefined && trailer.length > 0){
            const url = `https://youtube.com/embed/${trailer[0].key}?autoplay=1&controls=0&showinfo=0&autohide=1`;
            setUrlVideo(url);
        }
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
                backgroundImage: `url(https://image.tmdb.org/t/p/original/${movieDetails.backdrop_path})`
            }}
            >   
        <button onClick={() => navigate(-1)} className="details--backbutton">Back</button>
            <section> 
                <div>
                    <div className="details--info">
                        <h3 className={movieDetails.vote_average > 5 ? 'positive' : 'negative'}>{movieDetails.vote_average * 10 + '%'}</h3>
                        <button className='rate-movie' onClick={()=>{
                            setDialogRateOpen(true)
                        }}> Rate Movie</button>
                    </div>

                    <h1>{movieDetails.original_title || movieDetails.original_name}</h1>

                    <h4>{descriptionVideo}</h4>

                    {
                        (trailerVideo.results !== undefined && trailerVideo.results.length !== 0)
                        &&
                            <span onClick={() => handleShowTrailer()} className="details--viewtrailer">
                                <div className="viewtrailer">
                                    <TheatersIcon />watch trailer
                                </div>
                            </span>
                    }
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