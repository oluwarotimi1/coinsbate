import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./navbar.module.css";
import { TiThMenu } from "react-icons/ti";
// import { RxCross2 } from "react-icons/rx";
import {BsPersonCircle} from "react-icons/bs"

// import LOGO from '../../assets/vibranium-finance-logo/png/logo-black.png'

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    
  return (
    <header>
    <nav className={styles.navbar}>
      <div className={styles.navbar_brand}>
        <Link>RegXchange</Link>
      </div>
      <ul className={`${styles.navbar_menu} ${showMenu ? styles.show : ''}`}>
        <li><Link>Home</Link></li>
        <li><Link>About</Link></li>
        <li><Link>Services</Link></li>
        <li><Link>Contact</Link></li>
      </ul>
      <div>
        <Link to="" className={styles.profile}><BsPersonCircle  /></Link>
        <button className={styles.navbar_toggle} onClick={()=>setShowMenu(!showMenu)}><TiThMenu /></button>
      </div>
    </nav>
  </header>
  );
};

export default Navbar;
