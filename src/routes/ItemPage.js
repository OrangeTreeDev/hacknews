import React from 'react';
import { connect } from 'dva';
import styles from './ItemPage.less';
import Menu from '../components/Menu'
import ItemList from '../components/ItemList';
import Spinner from '../components/Spinner';

const IndexPage = ({dispatch, item}) => {

  return (
    <div className={styles.normal}>
      <Menu />
      <ItemList {...item}></ItemList>
      {
        item.isLoading ? <Spinner></Spinner> : ''
      }
    </div>
  );
}

export default connect( ({item}) => ({item}) )(IndexPage);
