import React from 'react';
import styles from './ErrorPage.module.scss';

const ErrorPage = () => {
  return(
    <div className={styles.wrap}>
      <h2 className={styles.text}>Oops, something went wrong</h2>
    </div>
  )
};

export default ErrorPage;