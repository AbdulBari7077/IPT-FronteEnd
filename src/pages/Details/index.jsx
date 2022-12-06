import React, { useEffect, useState } from 'react';
import DoneIcon from '@mui/icons-material/Done';
import { useParams } from 'react-router';
import TheatersIcon from '@mui/icons-material/Theaters';
import AspectRatioIcon from '@mui/icons-material/AspectRatio';
import './styles.css';
import { useNavigate } from 'react-router-dom';
import RateDialog from '../../components/rateMovie';
import { addMovieToUserHistory, addToFavlist, checkFavList, getMovieById, getRecommendedMovies, RemoveFromFavlist, updateRecommendationList } from '../../api/Api';
import AddIcon from '@mui/icons-material/Add';

function Details() {
    const userData = JSON.parse(localStorage.getItem('userData'));
    const navigate = useNavigate();
    const { id } = useParams();
    const [movieDetails, setMovieDetails] = useState({});
    const [urlVideo, setUrlVideo] = useState();
    const [videoFullScreen, setVideoFullScreen] = useState(false);
    const [descriptionVideo, setDescriptionVideo] = useState();
    const [dialogRateOpen, setDialogRateOpen] = useState(false);
    const [rateValue, setRateValue] = useState(3);
    const [inFavList, setInFavList] = useState(false);
    // const [recommendedMovies, setRecommendedMovies] = useState([]);
    useEffect(() => {
        const loadAll = async () => {
            const movie = await getMovieById(id);
            setMovieDetails(movie.data.data.Movie);
            const checkFavListResponse = await checkFavList(userData['uid'],movie.data.data.Movie?.movieId,userData['token']);
            if(checkFavListResponse.data.status){
                setInFavList(true);
            }
            setDescriptionVideo(movie.data.data.Movie.description > 300 ? movie.data.data.Movie.description.substring(0, 300) + '...' : movie.data.data.Movie.description);
        }
        loadAll();
    }, [id,inFavList])

    const handleCloseDialog = () => {
        setDialogRateOpen(false);
    }
    async function handleShowTrailer() {
        const response = await updateRecommendationList(movieDetails.movieId,userData['uid']);
        console.log("recommendedMovies",response);
        setUrlVideo(movieDetails.trailerUrl);
    }
   
    function handleVideoFullScreen() {
        setVideoFullScreen(!videoFullScreen);
    }
    async function HandleAddFavlist() {
        if (inFavList) {
            const responseRemoveFromFavList = await RemoveFromFavlist(userData['uid'], movieDetails?.movieId);
            // console.log(responseRemoveFromFavList,"HandleAddFavlist");
            if (responseRemoveFromFavList.data.code === 200) {
                alert(responseRemoveFromFavList.data.message)
                return setInFavList(false)
            }

        }
        else {
            const responseAddToFavlist = await addToFavlist(userData['uid'], movieDetails?.movieId);
            // console.log(responseAddToFavlist,"HandleAddFavlist");
            if (responseAddToFavlist.data.code === 200) {
                alert(responseAddToFavlist.data.message)
                return setInFavList(true)
            }
        }
    }
    return (
        <>
            <RateDialog
                open={dialogRateOpen}
                setOpen={setDialogRateOpen}
                handleCloseRateDialog={handleCloseDialog}
                setRateValue={setRateValue}
                rateValue={rateValue}
                onSubmit={rateValue}
                movieId={movieDetails?.movieId}
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
                            <h3 className={movieDetails.rating * 10  > 50 ? 'positive' : 'negative'}>{(Math.round(movieDetails.rating * 10 ))+ '%'}</h3>
                            <button className='rate-movie' onClick={() => {
                                setDialogRateOpen(true)
                            }}> Rate Movie
                            </button>
                            <button style={{marginLeft:"20px"}} onClick={HandleAddFavlist} className="featured--mylistbutton"><div>{inFavList?<DoneIcon style={{color:"green"}}/>:<AddIcon />}My List</div></button>
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