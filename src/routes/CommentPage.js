/**
 * Created by hubery on 2017/6/2.
 */
import {connect} from 'dva';
import Layout from '../components/Layout';
import CommentList from '../components/CommentList';
import styles from './CommentPage.less';

const CommentPage = ({ dispatch, comment}) => {
  console.log(comment.comments);
  return (
    <Layout >
      <div className={styles.commentWrapper}>
        <div className={styles.header}>
          <div>
            <span className={styles.title}>{comment.title}</span>
            <span className={styles.host}>{comment.host}</span>
          </div>
          <div className={styles.link}>
            <span>points</span> <span>|</span> <span>by {comment.by}</span> <span>{comment.timeago} ago</span>
          </div>
        </div>
        <div className={styles.body}>
          <div className={styles.title}>164 comments</div>
          <CommentList items={comment.comments}></CommentList>
        </div>
      </div>
    </Layout>
  );
}

export default connect( ({comment}) => ({comment}) )( CommentPage );
