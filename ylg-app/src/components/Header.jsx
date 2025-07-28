import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MyButton from "./MyButton";
import "../stylesheets/Header.css";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header>
        <h1>YOUR LAWN GUY</h1>

      <nav className="navbar">
        <div className="burgerMenu" onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>

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
