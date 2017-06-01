/**
 * Created by hubery on 2017/6/1.
 */
import {fetchUser} from '../services/hacknews';
import pathToRegexp from 'path-to-regexp';
import {timeAgo} from '../utils/tool';

export default {
  namespace: 'user',
  state:{
    isLoading: false,
  },

  reducers:{
    saveUser(state,{playload:user}){

      let created = timeAgo(user.created);
      return {...state,...user,created};
    },
    changeStatus(state, {playload:isLoading}){
      return {...state, isLoading};
    }
  },

  effects:{
    * fetchUser({playload:name},{call,put}){
      yield put( {type:'changeStatus', playload:true} );

      let user = yield call(fetchUser, name);
      yield put( {type:'saveUser', playload:user} );

      yield put( {type:'changeStatus', playload:false} );
    }
  },

  subscriptions:{
    userSubscription({dispatch, history}){

      return history.listen( ( {pathname}) => {
        let match = pathToRegexp('/user/:name').exec(pathname);
        if (match){
          let name = match[1];
          dispatch({type:'fetchUser',playload:name});
        }
      });
    }
  },
}
