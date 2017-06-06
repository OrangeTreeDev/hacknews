/**
 * Created by hubery on 2017/6/2.
 */
import pathToRegexp from 'path-to-regexp';
import Url from 'url';
import {call, put} from 'dva/saga';
import {
  fetchIdByType,
  fetchItem,
  fetchItems,} from '../services/hacknews';
import {timeAgo} from '../utils/tool';

export default {

  namespace: 'comment',

  state:{
    by: '',
    text: '',
    timeago: '',
    type: '',
    kids:[],
    comments:[]
  },

  reducers:{

    saveItem(state, {playload: item} ){
      let timeago = timeAgo(item.time);
      let host = item.url ?  Url.parse(item.url).hostname : '';
      return {...state, ...item, timeago, host};
    },

    saveComments(state, {playload: comments}){
      return {...state, comments};
    },
  },

  effects:{

    * fetchItemAndComments({playload: id}, {call, put}){

      /* 获取item */
      let fetchMainItem = function *( id, {call, put}){
        let item = yield call(fetchItem, id);
        yield put( {type:'saveItem', playload:item} );
        return item;
      };

      /* 获取评论列表 */
       let fetchComments = function *(kids, comments, {call,put}){

         // 普通for遍历效率最高
         for ( let i =0, len = kids.length; i< len; i++)
          {

            let comment = yield call(fetchItem, kids[i]);
            if (comment.kids){

              let childrenComments = yield call( fetchComments, comment.kids, [], {call,put});
              comment.subs = childrenComments;
              comments.push(comment);

            }else {
              let timeago = timeAgo(comment.time);
              comments.push({...comment, timeago});
            }
          }

         return comments;
      };

      let item = yield call (fetchMainItem ,id, {call, put});
      if (item.kids){
        let comments = yield call (fetchComments , item.kids, [], {call,put});
        yield put( {type:'saveComments', playload:comments} );
      }
    }
  },

  subscriptions:{

    commmentsSubscription({dispatch, history}){

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
