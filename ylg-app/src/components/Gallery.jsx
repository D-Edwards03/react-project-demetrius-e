import React from 'react';
import '../stylesheets/Gallery.css';

function Gallery() {
    const imageUrls = [
        '/images/pics/Landscape1.jpg',
        '/images/pics/Landscape2.jpg',
        '/images/pics/Landscape3.jpg',
        '/images/pics/Landscape4.jpg',
        '/images/pics/Landscape5.jpg',
        '/images/pics/Landscape6.jpg',
        '/images/pics/Landscape7.jpg',
        'images/pics/Landscape8.jpg'
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