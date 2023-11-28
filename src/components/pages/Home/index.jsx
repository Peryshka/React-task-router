import React from 'react';
import {Outlet} from "react-router-dom";
import styles from './Home.module.css';

const Home = () => {
  return(
    <div className={styles.container}>
      <div className={styles['homeWrap']}>
        <Outlet />
      </div>
    </div>
  )
};

export default Home;