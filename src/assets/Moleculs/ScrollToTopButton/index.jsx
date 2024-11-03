import React from 'react'
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTopButton = () => {
    const handleScrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    };
  
    return (
        <button
        onClick={handleScrollToTop}
        aria-label="Scroll to top"
        className="fixed bottom-5 right-5 bg-primaryColor text-white rounded-full p-3 transition-transform duration-150 hover:scale-105 hover:shadow-lg"
      >
        <FaArrowUp color="white" />
      </button>
    );
  };
  
  export default ScrollToTopButton;
