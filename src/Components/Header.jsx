import React from "react";
import styles from "../styles/Header.module.css";

const Header = () => {
  return (
    <header>
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      <h1 className={styles.title}> NC News</h1>
    </header>
  );
};

export default Header;
