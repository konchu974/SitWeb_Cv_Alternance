import React, { useState, useEffect } from 'react';

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 200) {
      setVisible(true); 
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', 
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

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
