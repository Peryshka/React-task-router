import React from 'react';
import styles from './subscribe.module.scss';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import notRobot from '../../../assets/img/notRobot.png';

const SubscribeInput = styled.input.attrs({
  type: 'text',
  placeholder: 'Enter Email *',
  size: (props => props.size)
})`
  font-size: ${props => props.size ? '1em' : '1.25em'};
  border: none;
  height: 40px;
  width: 250px;
  font-weight: 500;
  color: ${props => props.primary ? '#696969' : '#FFC0CB'};
  cursor: pointer;
  outline: none;
  border-radius: 5px;
`;

const Subscribe = () => {
  return (
    <div className={styles.subscribeWrap}>
      <div className={styles.newsBlock}>
        <h1 className={styles.title}>LightInTheBox News</h1>
        <p className={styles.paragraph}>Sign up for the latest news, facts,
          <span className={styles.space}/>
          analysis, and original stories about
          <span className={styles.space}/>
          Amazon delivered to you.</p>
      </div>
      <div className={styles.subscribeBlock}>
        <label className={styles.label}>
          <SubscribeInput size='1em' primary/>
        </label>
        <span className={styles.terms}>Opt out anytime. By signing up, you agree to our</span>
        <Link to={'/subscribe'} className={styles.link}>Privacy Policy</Link>
        <img src={notRobot} alt="notRobot" className={styles.notRobotImg}/>
      </div>
    </div>
  )
};

export default Subscribe;

