/**
 * Created by hubery on 2017/6/2.
 */
import {Link} from 'dva/router';
import styles from './Comment.less';

const Comment = () =>{
  return (
    <div className={styles.comment}>
      <h5 className={styles.nav}>
        <Link to={`/user/`}></Link>
        <span> ago</span>
        <span>|</span>
        <span>expand 11 replies</span>
      </h5>
      <div className={styles.content}>
        What good is faster cell data with horrible data
        limits and an OS with a poor concept of when data is
        permissible even in the "Enterprise" edition
      </div>
      <div className="descendant"></div>
    </div>
  );
}

export default Comment;
