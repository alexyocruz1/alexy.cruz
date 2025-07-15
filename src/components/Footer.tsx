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
          <a href="https://github.com/alexyocruz1" className="ml-2 text-blue-400 hover:text-blue-600 transition duration-300">Github</a>,
          <a href="https://www.linkedin.com/in/alexy-cruz-72777114b/" className="ml-2 text-blue-400 hover:text-blue-600 transition duration-300">LinkedIn</a>,
          <a href="https://www.linkedin.com/in/alexy-cruz-72777114b/" className="ml-2 text-blue-400 hover:text-blue-600 transition duration-300">Instagram</a>
        </p>
        <p className="text-sm mt-2">
          <a href="/v2" className="text-yellow-400 hover:text-yellow-300 transition duration-300">
            🚧 Sneak peek at Portfolio v2.0
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;