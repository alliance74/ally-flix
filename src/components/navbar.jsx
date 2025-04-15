
import React, { useState, useEffect } from 'react';
import { Bell } from 'lucide-react';
import tmdbApi, { category } from '../api/tmdbApi';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery) return;
    navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full flex items-center justify-between px-6 py-4 z-50 text-white border-b border-white/20 transition-all duration-300 ${
        scrolled ? 'bg-black/60 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="text-red-600 font-extrabold text-xl tracking-wide">ALLY FLIX</div>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-white focus:outline-none"
      >
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      <ul className="hidden md:flex gap-10 font-medium items-center">
        <li className="hover:text-red-500 cursor-pointer">Home</li>
        <li className="hover:text-red-500 cursor-pointer">Movies</li>
        <li className="hover:text-red-500 cursor-pointer">Series</li>
        <li className="hover:text-red-500 cursor-pointer">My list</li>

        <form onSubmit={handleSearch} className="relative group">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search..."
            className="absolute left-0 top-full mt-2 px-4 py-1.5 w-40 bg-black text-white rounded-full opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 focus:opacity-100 focus:scale-100 transition-all duration-300 ease-in-out"
          />
          <button type="submit" className="cursor-pointer">
            <img className="h-4" src="../search.png" alt="Search" />
          </button>
        </form>

        <span className="cursor-pointer">
          <Bell className="h-5 w-5 hover:text-red-400 transition-colors" />
        </span>
        <span className="w-8 h-8 rounded-full overflow-hidden">
          <img className="h-full w-full object-cover" src="../logos.png" alt="Logo" />
        </span>
      </ul>

      {isOpen && (
        <ul className="absolute top-full left-0 w-full bg-black text-white flex flex-col gap-4 px-6 py-4 md:hidden shadow-lg z-40">
          {['Home', 'Movies', 'Series', 'My list'].map((item) => (
            <li
              key={item}
              onClick={() => setIsOpen(false)}
              className="hover:text-red-500 transition-colors cursor-pointer"
            >
              {item}
            </li>
          ))}
          <form onSubmit={handleSearch} className="flex items-center gap-2">
            <img className="h-4" src="../search.png" alt="Search" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search..."
              className="px-3 py-1 w-full bg-white/10 text-white rounded-md focus:outline-none"
            />
          </form>
          <li className="flex items-center gap-2 cursor-pointer">
            <Bell className="h-4.5" />
            Notifications
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
