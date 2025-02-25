import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <nav>
        <div className="bg-gradient-to-r from-black to-gray-900 text-2xl font-semibold w-full flex justify-between items-center p-5 fixed left-0 top-0 z-50">
          {/* Portfolio Logo */}
          <div className="portfolio text-white">Portfolio</div>

          {/* Hamburger Menu for Mobile */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex gap-8">
            <Link to="/" className="text-white hover:text-yellow-500">
              Home
            </Link>
            <Link to="/about" className="text-white hover:text-yellow-500">
              About
            </Link>
            <Link to="/contact" className="text-white hover:text-yellow-500">
              Contact
            </Link>
            <Link to="/projects" className="text-white hover:text-yellow-500">
              Projects
            </Link>
          </div>
        </div>

        {/* Mobile Nav Links (Dropdown) */}
        {isMenuOpen && (
          <div className="md:hidden bg-gradient-to-r from-black to-gray-900 text-2xl font-semibold w-full fixed top-14 left-0 z-40">
            <div className="flex flex-col items-center gap-4 p-5">
              <Link to="/" className="text-white hover:text-yellow-500" onClick={toggleMenu}>
                Home
              </Link>
              <Link to="/about" className="text-white hover:text-yellow-500" onClick={toggleMenu}>
                About
              </Link>
              <Link to="/contact" className="text-white hover:text-yellow-500" onClick={toggleMenu}>
                Contact
              </Link>
              <Link to="/projects" className="text-white hover:text-yellow-500" onClick={toggleMenu}>
                Projects
              </Link>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;