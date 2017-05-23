/**
 * Created by hubery on 2017/5/23.
 */

import styles from './ItemList.less';
import {Link} from  'dva/router';
import Item from './Item';

const ItemList = ({list, page ,maxPage}) => {
  return (
    <div>
      <div className={styles.pageNav}><Link>{'< pre'}</Link><span className="pageHint">{`${page}/${maxPage}`}</span><Link>{'more >'}</Link></div>
      <div className={styles.itemList}>
        { list.map( (item)=>{
          return <Item {...item}></Item> ;
        }) }
      </div>
    </div>
  );
};

export default ItemList;
