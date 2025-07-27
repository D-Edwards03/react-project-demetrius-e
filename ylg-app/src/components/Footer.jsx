import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebookF, faTiktok } from '@fortawesome/free-brands-svg-icons';
//import "../stylesheets/Footer.css";

function Footer () {
    return (
        <footer className="footer">
            <div className="socials">
                <a href="https://www.facebook.com/profile.php?id=100083664626281"
                target="_blank"
                rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faFacebookF} beatFade size="3x" />
                </a>
                <FontAwesomeIcon icon={faInstagram} beatFade size="3x" />
                <FontAwesomeIcon icon={faTiktok} beatFade size="3x" />
            </div>
            <p>&copy; 2025 Your Lawn Guy</p>
        </footer>
    )
}

export default Footer;