/**
 * Created by hubery on 2017/5/27.
 */

import styles from './Spinner.less';

const Spinner = () => {
  return (
    <div>
      <svg className={styles.board}>
        <circle className={styles.spinner} cx="12" cy="12" r="10"></circle>
      </svg>
    </div>
  );
}

export default Spinner;
