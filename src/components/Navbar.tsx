'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (navRef.current && !navRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <nav ref={navRef} className="bg-gray-800 p-4 fixed w-full z-20">
      <div className="flex justify-between items-center">
        <Link href="#top">
          <div className="text-white text-lg">My Portfolio</div>
        </Link>
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}></path>
            </svg>
          </button>
        </div>
      </div>
      <ul className={`flex-col lg:flex-row lg:flex lg:space-x-4 justify-center ${isOpen ? 'flex' : 'hidden'} mt-4 lg:mt-0`}>
        <li className="lg:w-auto">
          <Link href="#home">
            <span className="text-white cursor-pointer block py-2 lg:py-0 lg:hover:text-gray-400">Home</span>
          </Link>
        </li>
        <li className="lg:w-auto">
          <Link href="#about">
            <span className="text-white cursor-pointer block py-2 lg:py-0 lg:hover:text-gray-400">About</span>
          </Link>
        </li>
        <li className="lg:w-auto">
          <Link href="#tech-stack">
            <span className="text-white cursor-pointer block py-2 lg:py-0 lg:hover:text-gray-400">Stack</span>
          </Link>
        </li>
        <li className="lg:w-auto">
          <Link href="#certifications">
            <span className="text-white cursor-pointer block py-2 lg:py-0 lg:hover:text-gray-400">Certifications</span>
          </Link>
        </li>
        <li className="lg:w-auto">
          <Link href="#clients">
            <span className="text-white cursor-pointer block py-2 lg:py-0 lg:hover:text-gray-400">Experience</span>
          </Link>
        </li>
        <li className="lg:w-auto">
          <Link href="#personal-applications">
            <span className="text-white cursor-pointer block py-2 lg:py-0 lg:hover:text-gray-400">Personal Applications</span>
          </Link>
        </li>
        <li className="lg:w-auto">
          <Link href="#cv">
            <span className="text-white cursor-pointer block py-2 lg:py-0 lg:hover:text-gray-400">My CV</span>
          </Link>
        </li>
        <li className="lg:w-auto">
          <Link href="#contact-me">
            <span className="text-white cursor-pointer block py-2 lg:py-0 lg:hover:text-gray-400">Contact Me</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;