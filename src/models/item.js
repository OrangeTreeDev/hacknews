/**
 * Created by hubery on 2017/5/19.
 */

import {
  fetchIdByType,
  fetchItem,
  fetchItems,} from '../services/hacknews';

import {timeAgo} from '../utils/tool';
import Url from 'url';
import pathToRegexp from 'path-to-regexp';

const storyTypes = ['top', 'new', 'show', 'ask', 'job'];
const itemsPer = 20;

function selectItems(items){
  let list = items.map( (item)=>{

    let timeago = timeAgo(item.time);
    let hostname = item.url ? Url.parse(item.url).hostname : '';
    return {...item, timeago,hostname};
  });
  return list;
}

export default {
  namespace:'item',
  state: {
    ids:[],
    lists:[],
    page: 1,
    maxPage: 0,
    activeType: null,
    isLoading: false,
  },
  reducers: {

    saveItems(state, {playload:{ids,page,maxPage,activeType,lists}}){
      lists = selectItems(lists);
      return {...state, ids, page, maxPage, activeType, lists};
    },
    changeLoadingStatus(state,{playload:isLoading}){
      return {...state,isLoading};
    },
  },
  effects: {

    * fetchList({playload:{story, page}},{call, put, select}){
      yield put({type:'changeLoadingStatus', playload:true});

      let ids =  yield select( state => state.item.ids );
      if (ids.length == 0){
        ids = yield call( fetchIdByType, story );
      }

      let maxPage = Math.ceil( ids.length/itemsPer );
      let activeType = 'top';
      let slices = ids.slice( (page-1)*itemsPer, page*itemsPer );
      let lists = yield call( fetchItems, slices );
      yield put( { type:'saveItems', playload:{ids, page, maxPage, activeType, lists}} );

      yield put({type:'changeLoadingStatus', playload:false});
    },
  },
  subscriptions: {
    listSubscription({dispatch, history})
    {
      return history.listen( ({pathname})=>{

        let match = pathToRegexp('/top/:page?').exec(pathname);
        if(match){
          let page = match[1]==undefined ? 1: match[1];
          page = parseInt(page);
          dispatch({type:'fetchList', playload:{story:'top',page:page}});
        }
      });
    },

  }
}
