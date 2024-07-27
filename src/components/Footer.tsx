import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl text-center">
        <p className="text-sm">
          &copy; 2024 Alexy Cruz. All rights reserved.
        </p>
        <p className="text-sm mt-2">
          More about me:
          <a href="https://github.com" className="ml-2 text-blue-400 hover:text-blue-600 transition duration-300">Github</a>,
          <a href="https://linkeding.com" className="ml-2 text-blue-400 hover:text-blue-600 transition duration-300">LinkedIn</a>,
          <a href="https://instagram.com" className="ml-2 text-blue-400 hover:text-blue-600 transition duration-300">Instagram</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;