import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "../Css/Gallery.css";
import video1 from "../Assets/sweet-ammo0001-0250.mp4";
import essayevid2 from "../Assets/0001-0250.mp4";

const AlbumGallery = () => {
    const [albums, setAlbums] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [selectedImage, setSelectedImage] = useState(null);
    const [isEnlarged, setIsEnlarged] = useState(false);

    useEffect(() => {
        const fetchAlbums = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/albums');
                setAlbums(response.data.albums);
            } catch (err) {
                setError('Error loading albums');
            } finally {
                setLoading(false);
            }
        };

        fetchAlbums();
    }, []);

    const handleImageClick = (imageSrc) => {
        setSelectedImage(imageSrc);
        setIsEnlarged(true); // Set to true when image is selected
    };

    const handleCloseModal = () => {
        setIsEnlarged(false); // Reset enlargement state
        // Wait for the animation to finish before removing the image from the DOM
        setTimeout(() => setSelectedImage(null), 300); // Match this duration with your CSS transition duration
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div>
            <div className="album-gallery">
                {albums.flatMap(album => 
                    album.photos.map(photo => (
                        <img 
                            key={photo}
                            src={`http://localhost:5000/images/${photo}`} 
                            alt={photo} 
                            onClick={() => handleImageClick(`http://localhost:5000/images/${photo}`)}
                        />

                        
                    ))
                )}
            </div>
            <div>
                <video src={video1} autoPlay loop muted width="600" style={{ pointerEvents: 'none' }} />
                <video src={essayevid2} autoPlay loop muted width="600" style={{ pointerEvents: 'none' }} />
            </div>

            {selectedImage && (
                <div className={`modal ${isEnlarged ? 'enlarged' : ''}`} onClick={handleCloseModal}>
                    <span className="close">&times;</span>
                    <img className={`modal-content ${isEnlarged ? 'scale-up' : 'scale-down'}`} src={selectedImage} alt="Enlarged" />
                </div>
            )}
        </div>
    );
};

export default AlbumGallery;
