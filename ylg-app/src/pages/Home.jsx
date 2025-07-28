import React from "react";
import Gallery from "../components/Gallery";
import Form from "../components/Form";
import Reviews from "../components/Reviews";
import "../stylesheets/Home.css";

function Home() {
  return (
    <div>
      <div className="home">
        <h2>The One Stop Shop</h2>
        <div className="introText">
          <p>
            Welcome to your trusted partner for all things lawn care and
            property maintenance in the greater Indianapolis area. We specialize
            in both residential and commercial services, keeping your outdoor
            spaces pristine year-round.
          </p>

          <ul>
            <li>
              <strong>Full Lawn Care:</strong> Mowing, edging, weeding, and
              pruning for a well-maintained lawn.
            </li>
            <li>
              <strong>Seasonal Cleanups:</strong> Spring and fall yard cleanup
              and general debris removal.
            </li>
            <li>
              <strong>Beyond the Lawn:</strong> Land clearing, junk removal,
              window cleaning, and power washing for complete property refresh.
            </li>
          </ul>
        </div>
      </div>

      <section className="sideBySide">
        <Form />
        <Reviews />
      </section>

      <Gallery />
    </div>
  );
}

export default Home;