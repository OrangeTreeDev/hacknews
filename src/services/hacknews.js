/**
 * Created by hubery on 2017/5/22.
 */

import Firebase from 'firebase';

const api = new Firebase('https://hacker-news.firebaseio.com/v0');

function fetch (location){
  return new Promise( (resolve, reject)=>{
    api.child(location).once('value', (snapshot)=>{
      let res = snapshot.val();
      if( res ){
        resolve(res);
      } else {
        setTimeout( ()=>{
          fetch (location);
        }, 500);
      }
    }, reject);
  });
}

export function fetchIdByType( type ){
  return fetch(`${type}stories`);
}

export function fetchItems(ids){
  return Promise.all( ids.map( (id) => {
    return fetchItem(id);
  }) );
}

export function fetchItem(id){
  return fetch(`item/${id}`);
}

export function fetchUser(name){
  return fetch(`user/${name}`);
}
