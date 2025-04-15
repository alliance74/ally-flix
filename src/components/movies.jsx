




import React, { useEffect, useState, useRef } from 'react';
import { FaChevronLeft, FaChevronRight, FaHeart, FaStar, FaPlay } from 'react-icons/fa';
import tmdbApi, { movieType } from '../api/tmdbApi';

const imageBaseUrl = 'https://image.tmdb.org/t/p/w500';

const MovieCarousel = () => {
  const [movies, setMovies] = useState([]);
  const scrollRef = useRef(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await tmdbApi.getMoviesList(movieType.popular, { params: {} });
        setMovies(res.results);
      } catch (err) {
        console.error('Failed to fetch movies:', err);
      }
    };

    fetchMovies();
  }, []);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative w-full py-6">
      {/* Scroll Buttons */}
      <button
        onClick={() => scroll('left')}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 hover:bg-black/80 text-white p-2 rounded-full"
      >
        <FaChevronLeft size={20} />
      </button>

      <button
        onClick={() => scroll('right')}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 hover:bg-black/80 text-white p-2 rounded-full"
      >
        <FaChevronRight size={20} />
      </button>

      {/* Movie List */}
      <div
        ref={scrollRef}
        className="flex gap-6  no-scrollbar w-full overflow-x-auto scroll-smooth "
      >
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="w-44 flex-shrink-0 text-white bg-transparent rounded-lg relative overflow-hidden transition-all duration-500 ease-in-out group hover:shadow-[0px_0px_15px_2px_rgba(255,0,255,0.6),_0px_0px_25px_5px_rgba(0,255,0,0.6),_0px_0px_35px_10px_rgba(0,0,255,0.6)]"
          >
            {/* Movie Image with zoom on hover */}
            <div className="relative w-full h-[260px] overflow-hidden">
              <img
                src={imageBaseUrl + movie.poster_path}
                alt={movie.title}
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
              />

              {/* Play Button (visible on hover) */}
              <div className="absolute inset-0  items-center justify-center hidden group-hover:flex">
                <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white">
                  <FaPlay size={13} />
                </div>
              </div>
            </div>

            {/* Movie Info */}
            <div className="bg-[#404040] p-3">
              <div className="font-semibold text-sm truncate">{movie.title}</div>
              <div className="text-xs text-gray-400">{movie.release_date?.slice(0, 4)}</div>
              <div className="flex items-center gap-2 text-xs mt-1">
                <FaHeart className="text-red-500" />
                <span>{movie.vote_average?.toFixed(1)}</span>
                <FaStar className="text-yellow-400 ml-2" />
                <span>{(movie.vote_average + 0.5).toFixed(1)}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieCarousel;
