/**
 * Created by hubery on 2017/5/19.
 */

import { fetchIdByType, fetchItem} from '../services/hacknews';
import {timeAgo} from '../utils/tool';
import Url from 'url';
import pathToRegexp from 'path-to-regexp';

const storyTypes = ['top', 'new', 'show', 'ask', 'job'];

export default {
  namespace:'item',
  state: {
    list:[],
    page: 1,
    maxPage: 0,
    activeType: null,
  },
  reducers: {

    saveItems(state, {playload:items}){

      let list = items.map( (item)=>{
        let timeago = timeAgo(item.time);
        let hostname = Url.parse(item.url).hostname;
        return {...item, timeago,hostname};
      });
      return {...state, list};
    }
  },
  effects: {

    * fetchItems({playload:type},{call, put}){
      let ids = yield call(fetchIdByType, type);
      let item = yield call (fetchItem, ids[0]);
      yield put( {type:'saveItems', playload:[item]} );
    }
  },
  subscriptions: {
    listSubscription({dispatch, history}){

      return history.listen( ({pathname})=>{
        let match = pathToRegexp('/top/:page?').exec(pathname);
        console.log(match);
      });
    }
  }
}
