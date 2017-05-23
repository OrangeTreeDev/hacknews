/**
 * Created by hubery on 2017/5/22.
 */
import {Link} from 'dva/router';
import styles from './Item.less';

const Item = ({score,title,hostname,by,timeago,descendants })=>{
  return (
    <div className={styles.itemWrapper}>
      <span className={styles.score}>{score}</span>
      <div>
        <p className={styles.title}>{title} <span className={styles.host}>{ `(${hostname})` }</span></p>
        <p className={styles.info}>by <Link>{by}</Link> {timeago} ago | <Link>{descendants} comments</Link></p>
      </div>
    </div>
  );
}

export default Item;
