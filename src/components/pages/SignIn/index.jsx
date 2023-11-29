import React from 'react';
import styles from './Signin.module.scss'

const SignIn = () => {
  return (
    <div className={styles.form}>
      <h2 className={styles.title}>Sign In Form</h2>
      <label className={styles.labelWrap}>
        Enter your login:
        <input type="text" className={styles.inp} placeholder="Email"/>
      </label>
      <label className={styles.labelWrap}>
        Enter your password:
        <input type="password" className={styles.inp} placeholder="Password"/>
      </label>
      <div className={styles.btnWrap}>
        <button className={styles.btn}>Sign In</button>
      </div>
      <span className={styles.text}>Or sign in with</span>
      <div className={styles.options}>
        <div className={styles.option}>
          <i className={styles.firstOption}></i>
          <h5 className={styles.methodOfSi}>Facebook</h5>
        </div>
        <div className={styles.option}>
          <i className={styles.secondOption}></i>
          <h5 className={styles.methodOfSi}>Google</h5>
        </div>
      </div>
    </div>
  )
};

export default SignIn;

