import React from 'react';
import { connect } from 'dva';
import styles from './ItemPage.less';
import Menu from '../components/Menu'
import ItemList from '../components/ItemList';

const IndexPage = ({dispatch, item}) => {

  return (
    <div className={styles.normal}>
      <Menu />
      <ItemList {...item}></ItemList>
      <input style={ {width: '50px',height:'50px',backgroundColor:'red'} } type="button" onClick={ ()=>{ dispatch({type:'item/fetchItems', playload:'top'})}}/>
    </div>
  );
}

export default connect( ({item}) => ({item}) )(IndexPage);
