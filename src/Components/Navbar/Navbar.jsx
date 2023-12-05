import React from "react";
import "./Navbar.css";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";

const Navbar = ({ logo }) => {
  return (
    <nav>
      <img src={logo} alt="cozyhaven logo" />

      <ul className="navlist">
        <a href="#">
          <li className="navitem">Home</li>
        </a>
        <li className="navitem apartment_item">
          Apartment Type <ExpandMoreRoundedIcon />
        </li>
        <a href="#">
          <li className="navitem">About Us</li>
        </a>
        <a href="#">
          <li className="navitem">Contact Us</li>
        </a>
      </ul>

      <ul className="navbuttons">
        <button className="btn login_btn">Login</button>
        <button className="btn register_btn">Register</button>
      </ul>
    </nav>
  );
};

export default Navbar;
