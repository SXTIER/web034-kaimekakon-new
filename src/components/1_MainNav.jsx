import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Logo from '../assets/logo.svg';

const Nav = () => {
  const [scrollWidth, setScrollWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / docHeight) * 100;
      setScrollWidth(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      {/* Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-green-500 z-[9999] transition-all duration-75"
        style={{ width: `${scrollWidth}%` }}
      />

      {/* Navbar */}
      <div className="w-full fixed top-0 left-0 z-50 shadow-md bg-white">
        <nav className="max-w-7xl mx-auto px-10 py-3 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <img src={Logo} alt="Logo" className="w-[107.54px]" />
          </div>

          {/* Links and Button */}
          <div className="flex items-center space-x-10">
            <a
              href="#"
              className="text-gray-700 hover:text-green-500 transition px-2 py-1 rounded"
            >
              Home
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-green-500 transition px-2 py-1 rounded"
            >
              Features
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-green-500 transition px-2 py-1 rounded"
            >
              Community
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-green-500 transition px-2 py-1 rounded"
            >
              Blog
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-green-500 transition px-2 py-1 rounded"
            >
              Pricing
            </a>
            <button className="ml-4 px-8 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition">
              Register Now ⭢
            </button>
          </div>
        </nav>
      </div>

      {/* Space below fixed nav */}
      <div className="pt-[80px]">
        <Outlet />
      </div>
    </div>
  );
};

export default Nav;
