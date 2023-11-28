import React from 'react';
import styles from './SignIN.module.css'

const SignIn = () => {
  return(
    <div className={styles.form}>
      <h2 className={styles.title}>Sign In Form</h2>
      <label className={styles.labelWrap}>
        Enter your login:
        <input type="text" className={styles.inp} />
      </label>
      <label className={styles.labelWrap}>
        Enter your password:
        <input type="password" className={styles.inp} />
      </label>
      <div className={styles.btnWrap}>
        <button className={styles.btn}>Submit</button>
      </div>

    </div>
  )
};

export default SignIn;