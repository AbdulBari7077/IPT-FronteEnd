import React, { useEffect, useState } from 'react';
import Tmdb from '../../Tmdb';
import MovieRow from '../../components/MovieRow';
import FeaturedMovie from '../../components/FeaturedMovie';
import Header from '../../components/Header';
import './styles.css';
import Footer from '../Landing/Footer';
import { useNavigate } from 'react-router-dom';
import { checkVerification, getMovies, getRandomMovie } from '../../api/Api';

function Home() {
  const navigate = useNavigate();
  const [featuredData, setFeaturedData] = useState(null);
  const [movieList, setMovieList] = useState([]);
  const [blackHeader, setBlackHeader] = useState(false);

  useEffect(() => {
    
    const loadAll = async () => {
      const movies= await getMovies();

      // console.log("GET MOVIES",movies.data.data);
     
      setMovieList(movies.data.data);
      // let list = await Tmdb.getHomeList();
      // setMovieList(list);

      // let originals = list.filter(i => i.slug === 'originals');
      // let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
      // let movieChosen = originals[0].items.results[randomChosen];
      
      // let movieChosenData = await Tmdb.getMovieInfo(movieChosen.id, 'tv');
      let movieChosenData = await getRandomMovie();
      if(movieChosenData.data.status){
        // console.log(movieChosenData.data.data.Movies,"movieChosenData")
        setFeaturedData(movieChosenData.data.data.Movies);
      }
    }
    loadAll();

    const userData = JSON.parse(localStorage.getItem('userData'));
    let isVerified=null;
    async function fetchData() {
      isVerified=await checkVerification(userData['uid'],userData['token']);
      // console.log(isVerified,userData,"HOME PAGE ");
      if(!isVerified?.data?.message)
      {
        alert("Verify your Email First")
        return navigate('/choosePlan');
      }
    }
    fetchData();
    if(!userData){
        return navigate('/login');
    }
    else
    {
      return navigate('/home');
    }
  }, []);

  useEffect(() => {
    const scrollListener = () => {
      if(window.scrollY > 10) {
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
      
      <Header black={blackHeader}/>
      {
        featuredData &&
        <FeaturedMovie item={featuredData}/>
      }
      <section className="lists">
        {
          movieList.map((item , key)=>{
            if(Object.entries(item)[0][1].length>0){
              return <MovieRow key={key} title={ Object.entries(item)[0][0] } items={Object.entries(item)[0][1]} />
            }
           
          })
        }
      </section>

      <footer>
        <Footer/>
      </footer>
      
      {
        movieList.length <= 0 &&
        <div className="loading">
          <img alt="Carregando" src="https://media.wired.com/photos/592744d3f3e2356fd800bf00/master/w_2000,c_limit/Netflix_LoadTime.gif"/>
        </div>
      }      
    </div>
    
  );
}

export default Home;
