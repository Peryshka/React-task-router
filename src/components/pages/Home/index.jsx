import React from 'react';
import styles from './Home.module.scss';
import womanCloth from '../../../assets/img/women.jpeg';
import womanCloth2 from '../../../assets/img/women2.jpeg';
import womanCloth3 from '../../../assets/img/woman4.jpeg';
import womanCloth4 from '../../../assets/img/woman5.jpeg';
import manCloth1 from '../../../assets/img/man1.jpeg';
import manCloth2 from '../../../assets/img/man2.jpeg';
import manCloth3 from '../../../assets/img/man3.jpeg';
import manCloth4 from '../../../assets/img/man4.jpeg';

const Home = () => {
  return(
      <div className={styles.homeWrap}>
        <div className={styles.titleWrap}>
          <h1 className={styles.title}>LightInTheBox</h1>
        </div>
        <i className={styles.bgImg}></i>
        <div className={styles.cardWrap}>
          <div className={styles.cardItem}>
            <img src={womanCloth} alt="picture"  className={styles.womanCloth1} />
            <h4>Women's Clothing</h4>
          </div>
          <div className={styles.cardItem}>
            <img src={womanCloth2 } alt="picture" className={styles.womanCloth2} />
            <h4>Women's Clothing</h4>
          </div>
          <div className={styles.cardItem}>
            <img src={womanCloth3 } alt="picture" className={styles.womanCloth3} />
            <h4>Women's Clothing</h4>
          </div>
          <div className={styles.cardItem}>
            <img src={womanCloth4 } alt="picture" className={styles.womanCloth4} />
            <h4>Women's Clothing</h4>
          </div>
        </div>
        <div className={styles.cardWrap}>
          <div className={styles.cardItem}>
            <img src={manCloth1 } alt="picture"  className={styles.manCloth1} />
            <h4>Men's Clothing</h4>
          </div>
          <div className={styles.cardItem}>
            <img src={manCloth2 } alt="picture"  className={styles.manCloth2} />
            <h4>Men's Clothing</h4>
          </div>
          <div className={styles.cardItem}>
            <img src={manCloth3 } alt="picture"  className={styles.manCloth3} />
            <h4>Men's Clothing</h4>
          </div>
          <div className={styles.cardItem}>
            <img src={manCloth4 } alt="picture"  className={styles.manCloth4} />
            <h4>Men's Clothing</h4>
          </div>
        </div>
        <div className={styles.btnWrap}>
          <button className={styles.viewBtn}>View More</button>
        </div>
      </div>
  )
};
export default Home;