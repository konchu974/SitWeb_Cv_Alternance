import React, { useEffect, useState } from "react";
import axios from "axios";
import "../Css/Gallery.css";
import "../Css/Responssive/ResGallery.css";
import video1 from "../Assets/sweet-ammo0001-0250.mp4";
import essayevid2 from "../Assets/0001-0250.mp4";
import ScrollToTopButton from "./Scrolltoup";

const AlbumGallery = () => {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0); // État pour suivre la vidéo en cours

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const response = await axios.get(
          "https://back-dugain.onrender.com/api/albums"
        );
        setAlbums(response.data.albums);
      } catch (err) {
        setError("Error loading albums");
      } finally {
        setLoading(false);
      }
    };

    fetchAlbums();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const videoSection = document.querySelector(".videos");
      const videoSectionTop = videoSection.getBoundingClientRect().top;
      const videoSectionBottom = videoSection.getBoundingClientRect().bottom;

      // changement de du background en fonction de la section
      if (videoSectionTop < window.innerHeight && videoSectionBottom >= 0) {
        document.body.style.backgroundColor = "#0c0c1a"; 
      } else {
        document.body.style.backgroundColor = ""; 
      }
    };

    window.addEventListener("scroll", handleScroll);

  
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;


  const videos = [video1, essayevid2];

  const handleVideoEnd = () => {
    // Passer à la vidéo suivante si elle existe
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };

  return (
    <div>
      <div className="album-gallery">
        <ul className="results">
          {albums.flatMap((album) =>
            album.photos.map((photo) => (
              <li key={photo} className="result">
                <a href="#">
                  <img
                    src={`https://back-dugain.onrender.com/images/${photo}`}
                    alt={photo}
                  />
                </a>
              </li>
            ))
          )}
        </ul>
      </div>
      <div className="videos">
        <video
          src={videos[currentVideoIndex]} 
          autoPlay
          muted
          width="600"
          onEnded={handleVideoEnd} 
          style={{ display: "block" }}
        />
      </div>
      <ScrollToTopButton />
    </div>
  );
};

export default AlbumGallery;
