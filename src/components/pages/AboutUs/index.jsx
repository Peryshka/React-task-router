import React from 'react';
import styles from './AboutUs.module.scss';
import styled from 'styled-components';
import scan from '../../../assets/img/scan.png';

export const CardWrap = styled.div`
  display: flex;
  width: 100%;
  border-radius: 20px;
`;

export const ItemCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 2px solid lightpink;
  width: 30%;
  margin-right: 20px;
  padding: 20px;

  &:hover {
    background-color: floralwhite;
  }
`;
export const Image = styled.i`
  background: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr4iNcmQzCIocvTZmP3dHNbJuepcttabCdQgyJXQnpZlaDIi0Wnt6_Wvwr6hJ_AICGVK4&usqp=CAU') center center/contain no-repeat;
  display: block;
  width: 200px;
  height: 200px;
  border-radius: 30px;
`;


const AboutUs = () => {
  return (
    <div className={styles.aboutWrap}>
      <h1 className={styles.title}>About Us</h1>
      <p className={styles.paragraph}>
        LightInTheBox is a global online retail company that delivers products directly to
        consumers around the world. Founded in 2007, LightInTheBox has offered customers a convenient
        way to shop for a wide selection of lifestyle products at attractive prices through www.lightinthebox.com,
        www.mininthebox.com, and other websites, which are available in multiple major languages.
      </p>
      <p className={styles.paragraph}>
        LightInTheBox offers products in the categories of apparel and other general merchandise.LightInTheBox products
        are best in the world.
      </p>
      <p className={styles.paragraph}>
        LightInTheBox's innovative data-driven business model allows itself to offer customized
        products, such as wedding dresses
        and evening dresses, at scale for optimal marketing, merchandising, and fulfillment.
      </p>
      <CardWrap className={styles.cardWrap}>
        <ItemCard>
          <Image/>
          <h3 className={styles.desc}>Women's Clothing</h3>
        </ItemCard>
        <ItemCard>
          <Image className={styles.men}/>
          <h3 className={styles.desc}>Men's Clothing</h3>
        </ItemCard>
        <ItemCard>
          <Image className={styles.children}/>
          <h3 className={styles.desc}>Children's Clothing</h3>
        </ItemCard>
      </CardWrap>
      <h2 className={styles.add}>There are two ways to quickly add us:</h2>
      <p className={styles.firstWay}>1. Join us promptly by clicking on this link:
        https://wa.me/message/H7NSBRSXZ7F7M1</p>
      <h3 className={styles.ili}>OR</h3>
      <p className={styles.secondWay}>2. Scan with your camera in WhatsApp:</p>
      <img src={scan} alt="scanImg"/>
    </div>
  )
};

export default AboutUs;


