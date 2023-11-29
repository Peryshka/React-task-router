import './App.module.scss';
import {NavLink,Link, Outlet} from 'react-router-dom';
import Home from "./components/pages/Home";
import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.mainWrap}>
      <ul className={styles.menuList}>
        <li className={styles.list}>
          <Link to={'/home'} className={styles.link}>Home Page</Link>
        </li>
        <li className={styles.list}>
          <Link to={'/about-us'} className={styles.link}>About Us Page</Link>
        </li>
        <li>
          <Link to={'/sign-in'} className={styles.link}>Sign In Page</Link>
        </li>
      </ul>
      <Home />
    </div>
  );
}

export default App;
