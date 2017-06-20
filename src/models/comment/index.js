/**
 * Created by hubery on 2017/6/2.
 */
import pathToRegexp from 'path-to-regexp';
import {call, put} from 'dva/saga';
import {
  fetchItem,
  fetchItems,} from '../../services/hacknews';

export default {

  namespace: 'comment',

  state:{
    items:{},
  },

  reducers:{

    saveItems(state,{playload:items}){

      let comments = items.reduce(
        (acc, cur)=> {
          acc[cur.id] = cur;
          return acc;},{});

      return { ...state, items: {...state.items, ...comments} };
    }
  },

  effects:{

    * fetchItemAndComments({playload: id}, {call, put}){

      /* 获取item */
      let item = yield call(fetchItem, id);
      yield put( { type:'saveItems', playload:[item] } );

      /* 获取评论列表 */
      let kids = item.kids;
      while ( kids && kids.length > 0 ){
        let items = yield call( fetchItems, kids );
        yield put( { type:'saveItems', playload:items } );
        kids = items.reduce(
          (acc, curr) => {
            return curr.kids ?  [...acc, ...curr.kids] : acc;
          }, []);
      }
    }
  },

  subscriptions:{

    commmentsSubscription( { dispatch, history } ){

      return history.listen( ({pathname}) =>{
        let match = pathToRegexp('/comment/:id').exec(pathname);
        if (match){
          let id = parseInt(match[1]);
          dispatch({type:'fetchItemAndComments',playload:id});
        }
      });
    }
  }
}
