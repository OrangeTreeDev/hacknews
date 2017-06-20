/**
 * Created by hubery on 2017/5/23.
 */

import styles from './ItemList.less';
import {Link} from  'dva/router';
import Item from './Item';

const ItemList = ({lists, page ,maxPage,activeType}) => {

  return (
    <div className={styles.listWrapper}>
      <div className={styles.pageNav}>
        { page > 1 ?
          <Link to={ `/${activeType}/${page-1}`}>{'< pre'}</Link> : <a className={styles.inactive}>{'< pre'}</a>
        }
        <span className={styles.pageHint}>{`${page}/${maxPage}`}</span>
        { page < maxPage ?
          <Link to={ `/${activeType}/${ page + 1 }`}>{'more >'}</Link> : <a className={styles.inactive}>{'more >'}</a>
        }
      </div>
      <div className={styles.itemList}>
        { lists.map( (item)=>{
          return <Item  key={item.id} {...item}></Item> ;
        }) }
      </div>
    </div>
  );
};

export default ItemList;
