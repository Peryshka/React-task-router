import React from 'react';
import styles from './AboutUs.module.scss';
import styled from 'styled-components';

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
`;
export const Image = styled.i`
  background: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr4iNcmQzCIocvTZmP3dHNbJuepcttabCdQgyJXQnpZlaDIi0Wnt6_Wvwr6hJ_AICGVK4&usqp=CAU') center center/contain no-repeat;
  display: block;
  width: 200px;
  height: 200px;
  border-radius: 30px;
`;


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
      <CardWrap className={styles.cardWrap}>
        <ItemCard>
          <Image />
          Women's Clothing
        </ItemCard>
        <ItemCard>
          <Image className={styles.men} />
          Men's Clothing
        </ItemCard>
        <ItemCard>
          <Image className={styles.children}/>
          Children's Clothing
        </ItemCard>
      </CardWrap>
    </div>
  )
};

export default AboutUs;