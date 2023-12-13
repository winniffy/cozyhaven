import React, { useState } from "react";
import "./Navbar.css";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import { Squeeze as Hamburger } from "hamburger-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = ({ logo }) => {
  // mobile menu state
  const [isMenuOpen, setMenuOpen] = useState(false);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  return (
    <nav>
      {/* logo */}
      <img src={logo} alt="cozyhaven logo" />

      {/* nav list items */}
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
