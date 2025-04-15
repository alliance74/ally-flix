import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black/90 text-gray-400 pt-10 pb-6 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 border-b border-gray-700 pb-8">
        {/* Logo and About */}
        <div>
          <img src="/logo.png" alt="Movie App Logo" className="w-32 mb-4" />
          <p className="text-sm leading-relaxed">
            Watch your favorite movies and series anytime, anywhere. Your ultimate entertainment destination.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-white text-lg font-semibold mb-4">Explore</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="/movies" className="hover:text-white">Movies</a></li>
            <li><a href="/series" className="hover:text-white">Series</a></li>
            <li><a href="/favorites" className="hover:text-white">My List</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white text-lg font-semibold mb-4">Contact</h4>
          <ul className="space-y-2 text-sm">
            <li>Email: allychatt@gmail.com</li>
            <li>Phone: +250 735057868</li>
            <li>Kigali, Rwanda</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-white text-lg font-semibold mb-4">Follow Us</h4>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white"><FaFacebookF size={18} /></a>
            <a href="#" className="hover:text-white"><FaTwitter size={18} /></a>
            <a href="#" className="hover:text-white"><FaInstagram size={18} /></a>
            <a href="#" className="hover:text-white"><FaYoutube size={18} /></a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm pt-6 text-gray-500">
        &copy; {new Date().getFullYear()} MovieApp. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
