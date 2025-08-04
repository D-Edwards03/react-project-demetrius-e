//Import the React lirary
import React from "react";
//Import the FontAwesomeIcon component and specific icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebookF, faTiktok } from '@fortawesome/free-brands-svg-icons';
//Import the CSS stylesheet for the Footer component
import "../stylesheets/Footer.css";

function Footer () {
    return (
        <footer className="footer">
            <div className="socials"> {/* Container for social media icons */}
                <a href="https://www.facebook.com/profile.php?id=100083664626281"
                target="_blank" /* Ensures the link opens in a new tab */
                rel="noopener noreferrer"> {/* Security measure to prevent potential vulnerabilities */}
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