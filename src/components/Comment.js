/**
 * Created by hubery on 2017/6/2.
 */
import {Link} from 'dva/router';
import styles from './Comment.less';

const Comment = ({item, children}) =>{
  return (
    <div className={styles.comment}>
      <h5 className={styles.nav}>
        <Link to={`/user/${item.by}`}></Link>
        <span>{item.timeago} ago</span>
        <span> | </span>
        <span>expand replies</span>
      </h5>
      <div className={styles.content} dangerouslySetInnerHTML={ {__html:item.text} }>
      </div>
      <div className={styles.descendant}>{children}</div>
    </div>
  );
}

export default Comment;
