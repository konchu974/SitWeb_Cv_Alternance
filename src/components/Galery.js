import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "../Css/Gallery.css";

const AlbumGallery = () => {
    const [albums, setAlbums] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

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

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="album-gallery"> {/* Conteneur de la galerie d'album */}
            {albums.flatMap(album => 
                album.photos.map(photo => ( // Utilisation de flatMap pour aplatir les tableaux d'images
                    <img 
                        key={photo}
                        src={`http://localhost:5000/images/${photo}`} 
                        alt={photo} 
                    />
                ))
            )}
        </div>
    );
};

export default AlbumGallery;
