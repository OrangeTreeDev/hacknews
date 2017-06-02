/**
 * Created by hubery on 2017/6/2.
 */
import pathToRegexp from 'path-to-regexp';
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
      return {...state, timeago};
    },
    saveComments(state, {playload: comments}){
      return {...state, comments};
    },
  },

  effects:{

    * fetchItem({playload: id}, {call, put}){

      /* 获取item */
      function *fetchItemInnner (id){
        let item = yield call(fetchItem, id);
        yield put( {type:'saveItem', playload:item} );

        yield item;
      }

      /* 获取评论列表 */
      function *fetchCommentsInnne (kids){

        for (let kid in kids)
        {
          let comment = yield call(fetchItem, kid);
          if (comment.kids){
            yield fetchCommentsInnne(comment.kids);
          }else {
            yield comment;
          }
        }
      }

      let item = yield call (fetchItemInnner , id);
      if (item.kids){
        let comments = yield call (fetchCommentsInnne , item.kids);
        console.log(comments);
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
          dispatch({type:'fetchItem',palyload:id});
        }
      });
    }
  }
}
