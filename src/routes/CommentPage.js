/**
 * Created by hubery on 2017/6/2.
 */

import {connect} from 'dva';

import Layout from '../components/Layout';
import Comment from '../components/Comment';

import {selectItemById} from '../models/comment/selector';
import {getHost, timeAgo} from '../utils/tool';

import styles from './CommentPage.less';

const CommentPage = ({ dispatch, item, itemsById}) => {

  if(item){

    return (
      <Layout >
        <div className={styles.commentWrapper}>
          <div className={styles.header}>
            <div>
              <span className={styles.title}>{item.title}</span>
              <span className={styles.host}>{getHost(item.url)}</span>
            </div>
            <div className={styles.link}>
              <span>points</span> <span>|</span> <span>by { item.by }</span> <span>{ timeAgo(item.time) } ago</span>
            </div>
          </div>
          <div className={styles.body}>
            <div className={styles.title}>{item.kids ? `${item.kids.length} Comments` : 'No Comments'}</div>
            {
              item.kids ? item.kids.map( (id) => {

                return <Comment key={id} item={ selectItemById( itemsById, id) } itemsByIds={ itemsById }/>;
              }) : ''
            }
            <Comment/>
          </div>
        </div>
      </Layout>
    );
  }else {

    return null;
  }

}

function mapStateToProps({comment}, ownProps) {

  return {
    item: selectItemById(comment.items, ownProps.params.id),
    itemsById: comment.items
  };
}

export default connect( mapStateToProps )( CommentPage );
