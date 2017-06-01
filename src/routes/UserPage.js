/**
 * Created by hubery on 2017/6/1.
 */
import Menu from '../components/Menu';
import Spinner from '../components/Spinner';
import {connect} from 'dva';
import styles from './UserPage.less';

const UserPage = ({user}) => {
  return (
    <div>
      <Menu></Menu>
      <div className={styles.user}>
        <h1>User:{user.id}</h1>
        <ul className={styles.profile}>
          <li>
            <span className={styles.label}>Created:</span><span>{user.created}</span>
          </li>
          <li>
            <span className={styles.label}>Karma:</span><span>{user.karma}</span>
          </li>
          {
            user.about ?  <li className={styles.about} dangerouslySetInnerHTML={ {__html:user.about} }></li>: ''
          }
        </ul>
        <p className={styles.link}>
          <span><a href={`https://news.ycombinator.com/submitted?id=${user.id}`} target="_blank">submissions</a>
          </span><span> | </span>
          <span><a href={`https://news.ycombinator.com/threads?id=${user.id}`} target="_blank">comments</a></span>
        </p>
      </div>
      {
        user.isLoading ? <Spinner></Spinner> : ''
      }
    </div>
  );
}

export default connect(({user})=>({user}))(UserPage);
