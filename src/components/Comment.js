/**
 * Created by hubery on 2017/6/2.
 */
import {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'dva/router';
import styles from './Comment.less';
import {selectItemById} from '../models/comment/selector';
import {timeAgo} from '../utils/tool';

// 折叠 或者 展开html 结构
function expandChilds(isExpanded, children) {
  if (children.length > 1){

    return isExpanded ? `collapse ${children.length} replies` : `expand ${children.length} replies`
  }else {

    return isExpanded ? `collapse ${children.length} reply` : `expand ${children.length} reply`;
  }
}

/* 使用class定义组件，因为组件包含的状态，不仅来源外部，还来源内部 */
class Comment extends Component{

  constructor(props){
    super(props);

    this.state = {
      open: false
    };
  }

  handleExpand = (e) => {

    e.preventDefault();

    this.setState({
      open: !this.state.open
    });
  }

  render(){

    let {item, itemsByIds} = this.props;
    if (item){

      return (
        <div className={styles.comment}>
          <h5 className={styles.nav}>
            <Link to={`/user/${item.by}`}></Link>
            <span>{ timeAgo(item.time) } ago</span>
            {
              item.kids ?
                <span><span> | </span><a href="#" onClick={this.handleExpand}>{ expandChilds( this.state.open , item.kids) }</a></span>
                : ''
            }
          </h5>
          <div className={styles.content} dangerouslySetInnerHTML={ {__html:item.text} }>
          </div>
          {
            this.state.open ?
              <div className={styles.descendant}>{
              item.kids ? item.kids.map( (id) => { return <Comment key={id} item={selectItemById(itemsByIds, id)} itemsByIds={itemsByIds} />}) : ''
            }</div>
              : ''
          }

        </div>
      );
    }else

      return null;
    }

}

Comment.propTypes ={
  item: PropTypes.object,
  itemsByIds: PropTypes.object
}

export default Comment;
