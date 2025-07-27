import React from 'react';
//import '../stylesheets/Gallery.css';

function Gallery() {
    const imageUrls = [
        '/images/Landscape1.jpg',
        '/images/Landscape2.jpg',
        '/images/Landscape3.jpg',
        '/images/Landscape4.jpg',
        '/images/Landscape5.jpg',
        '/images/Landscape6.jpg',
        '/images/Landscape7.jpg',
        '/images/Landscape8.jpg'
    ];
    return (
        <section className="gallery">
            <h3>This Could Be Your Lawn</h3>
            <div className="galleryGrid">
                {imageUrls.map((url, index) => (
                    <img key={index} src={url} alt={`Landscape ${index + 1}`} />
                ))}
            </div>
        </section>
    );
}

export default Gallery;