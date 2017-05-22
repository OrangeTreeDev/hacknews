/**
 * Created by hubery on 2017/5/18.
 */
import {Link} from 'dva/router';
import styles from './Menu.less';

const Menu = () => {
  return (
    <div className={styles.navWrapper}>
      <ul className={styles.navMenu}>
        <li className={styles.menuItem}><img className={styles.logo} src="https://zos.alipayobjects.com/rmsportal/AsASAiphPWWUJWG.png"/></li>
        <li className={styles.menuItem}><Link activeClassName={styles.active} to="/top">Top</Link></li>
        <li className={styles.menuItem}><Link activeClassName={styles.active} to="/new">New</Link></li>
        <li className={styles.menuItem}><Link activeClassName={styles.active} to="/show">Show</Link></li>
        <li className={styles.menuItem}><Link activeClassName={styles.active} to="/ask">Ask</Link></li>
        <li className={styles.menuItem}><Link activeClassName={styles.active} to="/job">Job</Link></li>
      </ul>
    </div>
  );
}

export default Menu;
