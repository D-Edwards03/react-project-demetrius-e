import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MyButton from "./MyButton";
import "../stylesheets/Header.css";

function Header() {
  //State to manage mobile menu visibility
  const [isOpen, setIsOpen] = useState(false);
  //Hook to navigate between routes
  const navigate = useNavigate();

  return (
    <header>
        <h1>YOUR LAWN GUY</h1>

      <nav className="navbar">
        {/* Hamburger icon for toggling menu on mobile */}
        <div className="burgerMenu" onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Nav Links - visible when isOpen is true (mobile) or always shown on desktop */}
        <ul className={`navlinks ${isOpen ? "open" : ""}`}>
          <li>
            <MyButton label="Home" onClick={() => navigate("/")} />
          </li>
          <li>
            <MyButton label="About" onClick={() => navigate("/about")} />
          </li>
          <li>
            <MyButton label="Contact" onClick={() => navigate("/contact")} />
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
