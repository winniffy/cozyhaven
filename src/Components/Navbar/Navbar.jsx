import React, { useState } from "react";
import "./Navbar.css";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import { Squeeze as Hamburger } from "hamburger-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = ({ logo }) => {
  // mobile menu state
  const [isMenuOpen, setMenuOpen] = useState(false);

  // apartment dropdown state
  const [isDropdown, setDropdown] = useState(false);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  const apartmentMenuAnimate = {
    show: {
      opacity: 1,
      transition: {
        duration: 0.5,
      },
      display: "block",
    },

    exit: {
      opacity: 0,
      transition: {
        duration: 0.5,
      },
      transitionEnd: {
        display: "none",
      },
    },
  };

  return (
    <nav>
      {/* logo */}
      <img src={logo} alt="cozyhaven logo" />

      {/* nav list items */}
      <ul className="navlist">
        <a href="/">
          <li className="navitem">Home</li>
        </a>
        {/* navbar drop down menu */}
        <a href="/">
          <motion.li
            className="navitem apartment_item"
            onHoverStart={() => setDropdown(!isDropdown)}
            onHoverEnd={() => setDropdown(false)}
            onMouseEnter={() => setDropdown(!isDropdown)}
            onMouseLeave={() => setDropdown(false)}
          >
            Apartment Type <ExpandMoreRoundedIcon />
            {/* apartment menu */}
            <motion.ul
              className="apartment_item-menu"
              variants={apartmentMenuAnimate}
              initial={"exit"}
              animate={isDropdown ? "show" : "exit"}
            >
              <li className="apartment_item-menu_item">Studio Apartment</li>
              <li className="apartment_item-menu_item">Bedroom Apartment</li>
              <li className="apartment_item-menu_item">Corporate Apartment</li>
              <li className="apartment_item-menu_item">Duplex Apartment</li>
              <li className="apartment_item-menu_item">Studio Apartment</li>
            </motion.ul>
          </motion.li>
        </a>
        <a href="#">
          <li className="navitem">About Us</li>
        </a>
        <a href="#">
          <li className="navitem">Contact Us</li>
        </a>
      </ul>

      {/* nav buttons */}
      <ul className="navbuttons">
        <button className="btn login_btn">Login</button>
        <button className="btn register_btn">Register</button>
      </ul>

      {/* mobile nav */}
      <Hamburger rounded toggled={isMenuOpen} toggle={setMenuOpen} />
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="menu_container"
            key="menu"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 100 }}
            exit={{ opacity: 0, scale: 0.5 }}
          >
            <motion.ul
              className="navlist_mobile"
              variants={container}
              initial="hidden"
              animate="show"
            >
              <motion.a href="#" variants={item}>
                <li className="navitem">Home</li>
              </motion.a>
              <motion.a variants={item}>
                <li className="navitem">
                  Apartment Type <ExpandMoreRoundedIcon />
                </li>
              </motion.a>
              <motion.a href="#" variants={item}>
                <li className="navitem">About Us</li>
              </motion.a>
              <motion.a href="#" variants={item}>
                <li className="navitem">Contact Us</li>
              </motion.a>
              {/* nav buttons */}
              <motion.li className="navitem_btn" variants={item}>
                <button className="btn_mobile login_btn-mobile">Login</button>
              </motion.li>
              <motion.li className="navitem_btn" variants={item}>
                <button className="btn_mobile register_btn-mobile">
                  Register
                </button>
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
