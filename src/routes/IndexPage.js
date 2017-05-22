import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import Menu from '../components/Menu'

const IndexPage = ({dispatch, idx}) => {

  return (
    <div className={styles.normal}>
      <Menu />
      <h1 className={styles.title}>Yay! Welcome to dva!</h1>
      <div className={styles.welcome} />

      <input style={ {width: '50px',height:'50px',backgroundColor:'red'} } type="button" onClick={ ()=>{ dispatch({type:'idx/fetchItems', playload:'top'})}}/>
    </div>
  );
}

export default connect( ({idx}) => ({idx}) )(IndexPage);
