import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToSection = () => {
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (location.hash) {
        const element = document.getElementById(location.hash.slice(1));
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth' });
          }, 400); // Attends que le contenu soit chargé
        }
      } else {
        window.scrollTo(0, 0);
      }
    };

   
    const timer = setTimeout(handleScroll, 300);

    return () => clearTimeout(timer);
  }, [location]);

  return null;
};

export default ScrollToSection;