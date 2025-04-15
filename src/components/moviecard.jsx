


import React from "react";
import { Link } from "react-router-dom";
import { category } from "../api/tmdbApi";
import apiConfig from "../api/apiConfig";

const MovieCard = (props) => {
  const item = props.item;
  const link = "/" + category[props.category] + "/" + item.id;  // Removed Config.HOME_PAGE

  const bg = apiConfig.w500Image(item.poster_path || item.backdrop_path);

  return (
    <Link to={link} className="block w-full">
      <div
        className="relative bg-cover bg-center rounded-xl overflow-hidden h-60 group hover:scale-105 transition-transform duration-300 shadow-md"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <button className="absolute inset-0 flex items-center justify-center bg-black/40 text-white text-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <i className="bx bx-play" />
        </button>

        
      </div>
      <h3 className="mt-2 text-white text-center text-sm font-semibold truncate">
        {item.title || item.name}
      </h3>
    </Link>
    
  );
};

export default MovieCard;
