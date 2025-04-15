
import React, { useState, useEffect } from 'react';
import Navbar from './components/navbar';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from './components/footer';
import Hero from './components/hero';
import Trends from './components/trends';
import MovieCard from './components/moviecard';
import tmdbApi, { movieType } from './api/tmdbApi';



function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [movies, setMovies] = useState([]);



  useEffect(() => {
    const fetchMovies = async () => {
      const response = await tmdbApi.getMoviesList(movieType.popular, {});
      setMovies(response.results);
      setTimeout(() => {
        setShowSplash(false);
      }, 3000); // show splash for 3 seconds
    };
    fetchMovies();
  }, []);
  
  if (showSplash) {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-black">
        <img src="/logo.png" alt="App Logo" className="w-64 animate-pulse" />
      </div>
    );
  }
  


  return (
    <Router>
      <div className="relative w-full min-h-screen bg-black/80">
        {/* Navbar */}
        <Navbar />

        {/* Hero Section */}

          <Hero />
        {/* Movie Cards Section */}

        <Trends />
     {/* Movie Grid Section */}
     <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-6 gap-8 px-4 sm:px-6 md:px-10 pb-20 bg-black/90">  
        {movies.map((movie) => (
          <MovieCard key={movie.id} item={movie} category="movie" />
        ))}
      </div>
      </div>
      <Footer />
  

    </Router>



  );
}

export default App;
