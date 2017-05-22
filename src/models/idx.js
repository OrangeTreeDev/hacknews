/**
 * Created by hubery on 2017/5/19.
 */

import {
  fetchIdByType,
  fetchItem,} from '../services/hacknews';

function fetchStory( timeout ){

  return new Promise( (resolve, reject)=>{
    setTimeout( ()=>{
      let story = {title: 'Hello World',content: [200, 300, 1000]};
      resolve( story );
    }, timeout);
  });
}

export default {
  namespace:'idx',
  state: {
    items:[],
  },
  reducers: {
    test(state){
      return state;
    },
    saveItems(state, {playload:items}){
      return {...state, items:items};
    }
  },
  effects: {
    * fetchItems({playload:type},{call, put}){
      console.log('sagas');
      let ids = yield call(fetchIdByType, type);
      let item = yield call (fetchItem, ids[0]);
      const offtime = new Date().getTime() - item.time;
      date.setTime(item.time * 1000);
      console.log(date);
      yield put( {type:'saveItems', playload:[item]} );
    }
  }
  ,
}
