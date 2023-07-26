import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./navbar.module.css";
import { TiThMenu } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";
import { BsPersonCircle } from "react-icons/bs";
import NavDropdown from "react-bootstrap/NavDropdown";
import {motion} from 'framer-motion'

// import LOGO from '../../assets/vibranium-finance-logo/png/logo-black.png'

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(true);

  return (
    <header>
      <nav className={styles.navbar}>
        <div
          className={`${styles.navbar_brand} ${
            showMenu ? "" : styles.navbar_brandactive
          }`}
        >
          <Link to="/">
            <motion.div initial={{y: -250}} animate={{y:-2}} transition={{delay: 0.2, duration: 5}}>RegXchange</motion.div>
          </Link>
        </div>

        <nav
          className={`${styles.navbar_menu} ${
            showMenu ? styles.navbar_menuactive : ""
          }`}
        >
          <button
            className={`${styles.navbar_togglecross} ${
              showMenu ? "" : styles.navbar_togglecrossactive
            }`}
            onClick={() => setShowMenu(!showMenu)}
          >
            <RxCross2 />
          </button>
          <li>
            <NavDropdown
              title={`Features ↓`}
              id="basic-nav-dropdown"
              className={styles.navbar_features}
            >
              <Link to="/buy">
                <NavDropdown.Item>Buy</NavDropdown.Item>
              </Link>
              <Link to="/mobile-app">
                <NavDropdown.Item>Mobile app</NavDropdown.Item>
              </Link>
              <Link to="/trade">
                <NavDropdown.Item>Trade</NavDropdown.Item>
              </Link>
              <Link to="/affliate">
                <NavDropdown.Item>Affliate</NavDropdown.Item>
              </Link>
            </NavDropdown>
          </li>
          <li>
            <Link to="/prices">Prices</Link>
          </li>
          <li>
            <Link to="/institutions">Institutions</Link>
          </li>
          <li>
            <Link to="/more">More</Link>
          </li>
        </nav>
        <div>
          <Link to="" className={styles.profile}>
            {" "}
            Login <BsPersonCircle />
          </Link>
          <button
            className={`${styles.navbar_toggle} ${
              showMenu ? "" : styles.navbar_toggleactive
            }`}
            onClick={() => setShowMenu(!showMenu)}
          >
            <TiThMenu />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
