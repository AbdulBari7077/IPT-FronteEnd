import React, { useEffect, useState } from 'react';
import Tmdb from '../../Tmdb';
import MovieRow from '../../components/MovieRow';
import FeaturedMovie from '../../components/FeaturedMovie';
import Header from '../../components/Header';
import './styles.css';
import Footer from '../Landing/Footer';
import { useNavigate } from 'react-router-dom';
import { addToFavlist, checkFavList, checkUserSubscribed, checkVerification, getMovies, getRandomMovie, getRecommendedMovies, getUserData, RemoveFromFavlist } from '../../api/Api';

const userData = JSON.parse(localStorage.getItem('userData'));
function Home() {
  const navigate = useNavigate();
  const [inFavList, setInFavList] = useState(false);
  const [featuredData, setFeaturedData] = useState(null);
  const [movieList, setMovieList] = useState([]);
  const [blackHeader, setBlackHeader] = useState(false);
  const [myFavList, setMyFavList] = useState([]);
  const [recommendationList, setRecommendationList] = useState([]);

  async function HandleAddFavlist() {
    if (inFavList) {
      const responseRemoveFromFavList = await RemoveFromFavlist(userData['uid'], featuredData?.movieId);
      // console.log(responseRemoveFromFavList,"HandleAddFavlist");
      if (responseRemoveFromFavList.data.code === 200) {
        alert(responseRemoveFromFavList.data.message)
        return setInFavList(false)
      }

    }
    else {
      const responseAddToFavlist = await addToFavlist(userData['uid'], featuredData?.movieId);
      // console.log(responseAddToFavlist,"HandleAddFavlist");
      if (responseAddToFavlist.data.code === 200) {
        alert(responseAddToFavlist.data.message)
        return setInFavList(true)
      }
    }
  }
  useEffect(() => {
    (async () => {
      const getUserFavourits = await getUserData(userData['uid'], userData['token']);
      setMyFavList(getUserFavourits.data.Favlist);
      console.log(getUserFavourits.data.Favlist, "getUserFavourits");
    })();
  }, [inFavList])


  useEffect(() => {

    const loadAll = async () => {
      let isVerified = null;
      async function fetchData() {
        // isVerified = await checkVerification(userData['uid'], userData['token']);
        const responseSub = await checkUserSubscribed(userData['uid'], userData['token']);

        console.log(responseSub, userData, "HOME PAGE");
        if (responseSub?.data?.message === "None") {
          // alert("Verify your Email First")
          navigate('/choosePlan');
        }
      }
      fetchData();
      if (!userData) {
        navigate('/login');
      }
      else {
        navigate('/home');
      }
      const recommendedMovies = await getRecommendedMovies(userData['uid'], userData['token']);
      console.log("recommendedMovies", recommendedMovies)
      if (recommendedMovies.data.length > 0) {
        console.log("first")
        setRecommendationList(recommendedMovies.data);
      }
      const movies = await getMovies();
      setMovieList(movies?.data.data);
      let movieChosenData = await getRandomMovie();

      if (movieChosenData?.data.status) {
        // console.log(userData['uid'],movieChosenData.data.data.Movies?.movieId,userData['token'],"checkFavListResponse")
        setFeaturedData(movieChosenData?.data.data.Movies);
        const checkFavListResponse = await checkFavList(userData['uid'], movieChosenData?.data.data.Movies?.movieId, userData['token']);
        // console.log(movieChosenData.data.data.Movies?.title,"checkFavListResponse")
        if (checkFavListResponse.data.status) {
          setInFavList(true);
        }
        else {
          setInFavList(false);
        }
      }
    }
    loadAll();

  }, []);

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setBlackHeader(true);
      }
      else {
        setBlackHeader(false);
      }
    }

    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener);
    }
  }, []);

  return (
    <div className="page">

      <Header black={blackHeader} />
      {
        featuredData &&
        <FeaturedMovie item={featuredData} HandleAddFavlist={HandleAddFavlist} inFavList={inFavList} />
      }
      {
        recommendationList?.length > 0 && <MovieRow key={"Recommendation"} title={"Recommendation"} items={recommendationList} />
      }
      <section className="lists">
        {
          movieList?.map((item, key) => {
            if (Object.entries(item)[0][1].length > 0) {
              return <MovieRow key={key} title={Object.entries(item)[0][0]} items={Object.entries(item)[0][1]} />
            }
          })
        }
      </section>
      <div>
        {
          myFavList?.length > 0 && <MovieRow key={featuredData?.movieId} title={"Fav List"} items={myFavList} />
        }
      </div>
      <footer>
        <Footer />
      </footer>

      {
        movieList.length <= 0 &&
        <div className="loading">
          <img alt="Carregando" src="https://media.wired.com/photos/592744d3f3e2356fd800bf00/master/w_2000,c_limit/Netflix_LoadTime.gif" />
        </div>
      }
    </div>

  );
}

export default Home;
