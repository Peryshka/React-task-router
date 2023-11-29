import './App.module.scss';
import {Link, Outlet} from 'react-router-dom';
import Home from "./components/pages/Home";
import styles from './App.module.scss';
import React from "react";

function App() {
  return (
    <div className={styles.mainWrap}>
      <div className={styles.container}>
        <ul className={styles.menuList}>
          <li className={styles.list}>
            <Link to={'/home'} className={styles.link}>Home</Link>
          </li>
          <li className={styles.list}>
            <Link to={'/about-us'} className={styles.link}>About Us</Link>
          </li>
          <li>
            <Link to={'/sign-in'} className={styles.link}>Sign In</Link>
          </li>
          <li>
            <Link to={'/subscribe'} className={styles.link}>Subscribe</Link>
          </li>
        </ul>
        <div className={styles.contentWrap}>
          <Outlet/>
        </div>
      </div>
    </div>
  );
}

export default App;


