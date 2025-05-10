import React, { useEffect, useRef } from "react";
import "../Css/IconCarousel.css";
import "../Css/Responssive/ResIconCar.css";


const IconCarousel = ({ items }) => {
  const containerRef = useRef(null);
  const animationRef = useRef(null);

  const scrollSpeed = 0.5; 

  const startScroll = () => {
    const container = containerRef.current;

    const step = () => {
      if (!container) return;

      container.scrollLeft += scrollSpeed;

      
      if (container.scrollLeft >= container.scrollWidth / 2) {
        container.scrollLeft = container.scrollLeft - container.scrollWidth / 2;
      }

      animationRef.current = requestAnimationFrame(step);
    };

    animationRef.current = requestAnimationFrame(step);
  };

  const stopScroll = () => {
    cancelAnimationFrame(animationRef.current);
  };

  useEffect(() => {
    startScroll();
    return () => stopScroll();
  }, []);

  return (
    <section id="wca_carousel_slider">
      <div
        className="wca_container"
        ref={containerRef}
        onMouseEnter={stopScroll}
        onMouseLeave={startScroll}
      >
        <div className="wca_slider">
          {[...items, ...items].map((item, index) => (
            <div className="wca_slide" key={index}>
              <div
                className="carousel-icon"
                dangerouslySetInnerHTML={{ __html: item.icon }}
              />
              <h4>{item.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IconCarousel;
