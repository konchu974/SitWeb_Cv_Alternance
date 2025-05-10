import React, { useEffect, useState } from "react";
import axios from "axios";
import "../Css/Gallery.css"; // Assurez-vous que votre CSS est correctement importé
import "../Css/Responssive/ResGallery.css";
import video1 from "../Assets/sweet-ammo0001-0250.mp4";
import essayevid2 from "../Assets/0001-0250.mp4";
import ScrollToTopButton from './Scrolltoup';

const AlbumGallery = () => {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0); // État pour suivre la vidéo en cours

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/albums");
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
      const videoSection = document.querySelector('.videos');
      const videoSectionTop = videoSection.getBoundingClientRect().top;
      const videoSectionBottom = videoSection.getBoundingClientRect().bottom;

      // Si la section vidéo est dans la fenêtre
      if (videoSectionTop < window.innerHeight && videoSectionBottom >= 0) {
        document.body.style.backgroundColor = '#0c0c1a'; // Changez ceci à la couleur souhaitée
      } else {
        document.body.style.backgroundColor = ''; // Réinitialiser à la couleur par défaut
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Cleanup de l'écouteur d'événement lors du démontage du composant
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  // Liste des vidéos
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
                    src={`http://localhost:5000/images/${photo}`}
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
          src={videos[currentVideoIndex]} // Afficher la vidéo actuelle
          autoPlay
          muted
          width="600"
          onEnded={handleVideoEnd} // Appeler handleVideoEnd lorsque la vidéo se termine
          style={{ display: 'block' }} // S'assurer que la vidéo est visible
        />
      </div>
      <ScrollToTopButton />
    </div>

  );
};

export default AlbumGallery;
