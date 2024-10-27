import './App.css';
import api from './api/axiosConfig';
import {useState, useEffect} from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/home/Home';
import Header from './components/header/Header';
import Trailer from './components/trailer/Trailer';
import Review from './components/review/Review';
import NotFound from './components/NotFound';

function App() {
  const [movies, setMovies] = useState();
  const [movie, setMovie] = useState();
  const [reviews, setReviews] = useState([]);

  const getMovies = async () => {
    try {
      const response = await api.get('/api/v1/movies');
      console.log(response.data);
      setMovies(response.data);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(()=>{
    getMovies();
  }, [])

  const getMovieData = async (movieId) => {
    try {
      const response = await api.get(`/api/v1/movies/${movieId}`);
      const singleMovie = response.data;

      setMovie(singleMovie);
      setReviews(singleMovie.reviewIds);

    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route path='/' element={movies ? <Home movies={movies} /> : <h2>Loading...</h2>} />
          <Route path='/trailer/:ytTrailerId' element={<Trailer />} />
          <Route path='/reviews/:movieId' element={<Review getMovieData={getMovieData} movie={movie} reviews={reviews} setReviews={setReviews} />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
