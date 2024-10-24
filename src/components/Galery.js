import React, { useEffect, useState } from 'react';
import axios from 'axios';

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
        <div>
            {albums.map(album => (
                <div key={album.id}>
                    <div>
                        {album.photos.map(photo => (
                            <img 
                            key={photo}
                            src={`http://localhost:5000/images/${photo}`} 
                            alt={photo} 
                            style={{ width: '24.9%', margin: '0.05%', height: "auto"}} 
                            />
                        )
                    )}
                    <h2>{album.name}</h2>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default AlbumGallery;
