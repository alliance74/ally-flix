



import React from 'react';
import MovieCarousel from './movies';

function Trends() {
  return (
    <div className="w-full overflow-x-hidden">
      <div className="bg-black/90 pt-16 pb-16 px-4 sm:px-8 md:px-16 lg:px-24 ">
        {/* First Navigation List */}
        <ul className="flex flex-wrap items-center text-gray-100 font-georgia mb-6 gap-6 sm:gap-12 md:gap-20 lg:gap-32">
  {[
    {
      icon: "/fi.png",
      alt: "Trending",
      label: "Trending Movies",
      alwaysShow: true,
    },
    {
      icon: "/star.png",
      alt: "Top Rated",
      label: "Top Rated",
    },
    {
      icon: null,
      label: "🌐 Popular Series",
    },
    {
      icon: null,
      label: "+ Recently Added",
    },
  ].map((item, index) => (
    <li
      key={index}
      className={`
        relative group cursor-pointer whitespace-nowrap text-sm sm:text-base transition-all duration-300
        ${item.alwaysShow ? 'block' : 'hidden md:block'}
      `}
    >
      {item.icon && (
        <img src={item.icon} alt={item.alt} className="w-5 h-5 inline mr-2" />
      )}
      <span className="group-hover:text-white group-hover:text-lg transition-all duration-300">
        {item.label}
      </span>
      <span className="absolute left-1/2 -translate-x-1/2 bottom-[-8px] w-1.5 h-1.5 bg-red-600 rounded-full opacity-0 group-hover:opacity-100 transition duration-300" />
    </li>
  ))}
</ul>


        <div className="border-b border-white/10 mb-10" />

        {/* Movie Carousel */}
        <div className="mb-8">
          <MovieCarousel />
        </div>

        {/* Second Navigation List */}
        <ul className="flex flex-wrap gap-6 sm:gap-24 sm:mx-auto sm:my-4 sm:text-center lg:gap-48 items-center text-gray-100 font-georgia mb-6 ml-auto mr-auto md:ml-0 md:mr-0">

          {[
            {
              icon: "/multimedia.png",
              label: "Movies",
            },
            {
              icon: "/drama.png",
              label: "Series",
            },
            {
              icon: "/chapter.png",
              label: "Original Series",
            },
          ].map((item, index) => (
            <li
              key={index}
              className="relative group cursor-pointer whitespace-nowrap text-sm sm:text-base hover:text-white transition-all duration-300"
            >
              <img src={item.icon} alt={item.label} className="w-5 h-5 inline mr-2" />
              <span className="group-hover:text-white group-hover:text-lg transition-all duration-300">
                {item.label}
              </span>
              <span className="absolute left-1/2 -translate-x-1/2 bottom-[-8px] w-1.5 h-1.5 bg-red-600 rounded-full opacity-0 group-hover:opacity-100 transition duration-300" />
            </li>
          ))}
        </ul>

        <div className="border-b border-white/10" />
      </div>
    </div>
  );
}

export default Trends;
