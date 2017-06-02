/**
 * Created by hubery on 2017/6/2.
 */
import {connect} from 'dva';
import Layout from '../components/Layout';
import CommentList from '../components/CommentList';
import styles from './CommentPage.less';

const CommentPage = ({ dispatch, comment}) => {
  console.log(comment);
  return (
    <Layout >
      <div className={styles.commentWrapper}>
        <div className={styles.header}>
          <div>
            <span className={styles.title}></span>
            <span className={styles.host}></span>
          </div>
          <div className={styles.link}>
            <span>points</span><span>|</span><span>by</span><span>ago</span>
          </div>
        </div>
        <div className={styles.body}>
          <div className={styles.title}>164 comments</div>
          <CommentList></CommentList>
        </div>
      </div>
    </Layout>
  );
}

export default connect( ({comment}) => ({comment}) )( CommentPage );
