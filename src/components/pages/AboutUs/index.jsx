import React from 'react';
import styles from './AboutUs.module.scss';

const AboutUs = () => {
  return(
    <div className={styles.aboutWrap}>
    <h1 className={styles.title}>About Us</h1>
      <p className={styles.paragraph}>
        LightInTheBox is a global online retail company that delivers products directly to
        consumers around the world. Founded in 2007, LightInTheBox has offered customers a convenient
        way to shop for a wide selection of lifestyle products at attractive prices through www.lightinthebox.com,
        www.mininthebox.com, and other websites, which are available in multiple major languages.
      </p>
      <p className={styles.paragraph}>
        LightInTheBox offers products in the categories of apparel and other general merchandise.LightInTheBox products are best.
      </p>
      <p className={styles.paragraph}>
        LightInTheBox's innovative data-driven business model allows itself to offer customized
        products, such as wedding dresses
        and evening dresses, at scale for optimal marketing, merchandising, and fulfillment.
      </p>
    </div>
  )
};

export default AboutUs;