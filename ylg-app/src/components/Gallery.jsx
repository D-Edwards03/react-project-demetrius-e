import React from 'react';
import '../stylesheets/Gallery.css';

function Gallery() {
    const imageUrls = [
        '/pics/Landscape1.jpg',
        '/pics/Landscape2.jpg',
        '/pics/Landscape3.jpg',
        '/pics/Landscape4.jpg',
        '/pics/Landscape5.jpg',
        '/pics/Landscape6.jpg',
        '/pics/Landscape7.jpg',
        '/pics/Landscape8.jpg'
    ];
    
    return (
        <section className="gallery">
            <h3>This Could Be Your Lawn</h3>
            <div className="galleryContainer">
                {imageUrls.map((url, index) => (
                    <img key={index} src={url} alt={`Landscape ${index + 1}`} />
                ))}
            </div>
        </section>
    );
}

export default Gallery;