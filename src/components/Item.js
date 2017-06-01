/**
 * Created by hubery on 2017/5/22.
 */
import {Link} from 'dva/router';
import styles from './Item.less';

const Item = ({ id, type, score,title,hostname,by,timeago,descendants,url })=>{
  return (
    <div className={styles.itemWrapper}>
      <span className={styles.score}>{score}</span>
      <div>
        <p className={styles.title}> <a href={url} target="_blank">{title}</a>
          { hostname.length > 0 ? <span className={styles.host}>{` (${hostname})`}</span> : ''}
        </p>
        <div className={styles.info}>
          { type ==='job'? `${timeago} ago`:
            <div> by <Link to={`/user/${by}`}>{by}</Link> {timeago} ago | <Link>{descendants} comments</Link></div>
          }
        </div>
      </div>
    </div>
  );
}

export default Item;
