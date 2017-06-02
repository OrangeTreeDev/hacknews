/**
 * Created by hubery on 2017/6/2.
 */

import Menu from './Menu';
import styles from './Layout.less';

const Layout = ({children}) => {
  return (
    <div>
      <Menu></Menu>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
}

export default Layout;
