import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "./Navbar.css";

function Navbar() {
  return (
    <header className="navBar">
      <h4 className="Logo">Logo</h4>

      <nav className="navContainer">
        <ul>
          <li>
            <a href="#"></a>Home
          </li>
          <li>
            <a href="#"></a>Service
          </li>
          <li>
            <a href="#"></a>About Us
          </li>
        </ul>
      </nav>

      <div className="Icon">
        <h2>
          <FacebookIcon />
        </h2>
        <h2>
          <InstagramIcon />
        </h2>
        <h2>
          <LinkedInIcon />
        </h2>
      </div>
    </header>
  );
}

export default Navbar;
