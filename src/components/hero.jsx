

import React from 'react';

function Hero() {
  return (
    <div className="relative w-full overflow-x-hidden">
      {/* Hero Section */}
      <div className="relative w-full min-h-screen bg-black/70">
        {/* Background Image */}
        <img
          src="/ram.png"
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent z-10" />

        {/* Content */}
        <div className="relative z-20 flex items-center min-h-screen px-4 sm:px-8 md:px-16 lg:px-24">
          <div className="text-white max-w-xl w-full">
            <p className="text-xs sm:text-sm text-gray-300 mb-2">Duration: 1h 47m</p>
            <p className="text-yellow-400 text-xs sm:text-sm mb-2">
              ⭐ 6.5 · Action · Adventure · Sci-Fi
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4">Rampage</h1>
            <p className="text-sm sm:text-base text-gray-300 mb-5 leading-relaxed">
              When three different animals become infected with a dangerous pathogen,
              a primatologist and a geneticist team up to stop them from destroying Chicago.
            </p>

            {/* Buttons - Small & Left-Aligned */}
            <div className="flex gap-2">
              <button className="bg-red-600 hover:bg-red-700 text-xs px-4 py-1 rounded-full">
                ▶ WATCH
              </button>
              <button className="bg-white/10 hover:bg-white/20 text-xs px-4 py-1 rounded-full text-white">
                + ADD LIST
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
