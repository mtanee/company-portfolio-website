
'use client'
import React from 'react';
import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      className={`${
        isVisible ? 'visible' : 'invisible'
      } fixed bottom-4 right-4 bg-gradient-to-r to-orange-custom from-white z-30 text-black px-4 py-2 rounded-md transition-opacity ease-in-out duration-300 focus:outline-none focus:ring focus:border-blue-300 `}
      onClick={scrollToTop}
    >
      <FaArrowUp  />
    </button>
  );
};

export default BackToTopButton;
