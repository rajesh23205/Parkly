import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Header.module.scss";

const Header: React.FC = () => {
  const location = useLocation().pathname;

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link to="/">Parkly</Link>
      </div>
      <nav className={styles.nav}>
        <Link to="/" className={location === "/" ? styles.active : ""}>
          Home
        </Link>
        <Link
          to="/about"
          className={location === "/about" ? styles.active : ""}
        >
          About
        </Link>
        <Link
          to="/spots"
          className={location === "/spots" ? styles.active : ""}
        >
          Spots
        </Link>
      </nav>
      <div className={styles.controls}>
        <Link to="/login">Login</Link>
      </div>
    </header>
  );
};

export default Header;
