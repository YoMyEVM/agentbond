import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-grey-900 text-white  z-50">
      <div className="max-w-screen-lg xl:max-w-screen-xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="text-xl font-bold text-purple-400">
          MyBrand
        </a>

        {/* Links */}
        <div className="space-x-6 hidden sm:flex">
          <a href="#home" className="hover:text-purple-300 transition">
            Home
          </a>
          <a href="#features" className="hover:text-purple-300 transition">
            Features
          </a>
          <a href="#about" className="hover:text-purple-300 transition">
            About
          </a>
          <a href="#contact" className="hover:text-purple-300 transition">
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="sm:hidden text-white hover:text-purple-300 transition"
          aria-label="Toggle Menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
