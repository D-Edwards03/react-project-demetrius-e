import React from "react";
import "../stylesheets/Gallery.css";
import Landscape1 from "../assets/Landscape1.jpg";
import Landscape2 from "../assets/Landscape2.jpg";
import Landscape3 from "../assets/Landscape3.jpg";
import Landscape4 from "../assets/Landscape4.jpg";
import Landscape5 from "../assets/Landscape5.jpg";
import Landscape6 from "../assets/Landscape6.jpg";
import Landscape7 from "../assets/Landscape7.jpg";
import Landscape8 from "../assets/Landscape8.jpg";

function Gallery() {
  const images = [
    Landscape1,
    Landscape2,
    Landscape3,
    Landscape4,
    Landscape5,
    Landscape6,
    Landscape7,
    Landscape8,
  ];

  return (
    <section className="gallery">
      <h3>This Could Be Your Lawn</h3>
      <div className="galleryContainer">
        {images.map((src, index) => (
          <img key={index} src={src} alt={`Landscape ${index + 1}`} />
        ))}
      </div>
    </section>
  );
}

export default Gallery;
