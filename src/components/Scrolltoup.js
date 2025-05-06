import React, { useState, useEffect } from 'react';

const ScrollToTopButton = () => {
  // State to track whether the button should be shown
  const [visible, setVisible] = useState(false);

  // Scroll event listener to show/hide the button
  const handleScroll = () => {
    if (window.scrollY > 200) {
      setVisible(true); // Show button when scrolled more than 200px
    } else {
      setVisible(false); // Hide button when scrolled less than 200px
    }
  };

  // Scroll to top of page when button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Smooth scrolling animation
    });
  };

  // Add scroll event listener on mount
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    visible && (
      <button
        onClick={scrollToTop}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '40px',
          backgroundColor: '#F3892C',
          color: 'white',
          width:'50px',
          height:'50px',
          border: 'none',
          borderRadius: '50%',
          fontSize: '30px',
          cursor: 'pointer',
          zIndex: 1000,
        }}
      >
        ↑
      </button>
    )
  );
};

export default ScrollToTopButton;
