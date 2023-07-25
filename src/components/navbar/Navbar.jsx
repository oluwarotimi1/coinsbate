import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./navbar.module.css";
import { TiThMenu } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";
import {BsPersonCircle} from "react-icons/bs"

// import LOGO from '../../assets/vibranium-finance-logo/png/logo-black.png'

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(true);

    
  return (
    <header>
    <nav className={styles.navbar}>
      <div className={`${styles.navbar_brand} ${showMenu ? '' : styles.navbar_brandactive}`}>
        <Link to="/">RegXchange</Link>
  
      </div>
      
      <nav className={`${styles.navbar_menu} ${showMenu ? styles.navbar_menuactive : ''}`}>
      <button className={`${styles.navbar_togglecross} ${showMenu ? '' : styles.navbar_togglecrossactive}`} onClick={()=>setShowMenu(!showMenu)}><RxCross2 /></button>
        <li><Link to="/features">Features</Link></li>
        <li><Link to="/prices">Prices</Link></li>
        <li><Link to="/institutions">Institutions</Link></li>
        <li><Link to="/more">More</Link></li>
      </nav>
      <div>
        <Link to="" className={styles.profile}> Login <BsPersonCircle  /></Link>
        <button className={`${styles.navbar_toggle} ${showMenu ? '' : styles.navbar_toggleactive}`} onClick={()=>setShowMenu(!showMenu)}><TiThMenu /></button>
        
      </div>
    </nav>
  </header>
  );
};

export default Navbar;
