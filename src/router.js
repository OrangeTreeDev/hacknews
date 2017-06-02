import React from 'react';
import { Router, Route, Redirect, IndexRoute } from 'dva/router';
import ItemPage from './routes/ItemPage';
import UserPage from './routes/UserPage';
import CommentPage from  './routes/CommentPage';

function RouterConfig({app, history}) {
  return (
    <Router history={history}>
      <Redirect from="/" to='/top' />
      <Route path="/top">
        <IndexRoute component={ItemPage}></IndexRoute>
        <Route path=":page" component={ItemPage}></Route>
      </Route>
      <Route path="/new">
        <IndexRoute component={ItemPage}></IndexRoute>
        <Route path=":page" component={ItemPage}></Route>
      </Route>
      <Route path="/show">
        <IndexRoute component={ItemPage}></IndexRoute>
        <Route path=":page" component={ItemPage}></Route>
      </Route>
      <Route path="/ask">
        <IndexRoute component={ItemPage}></IndexRoute>
        <Route path=":page" component={ItemPage}></Route>
      </Route>
      <Route path="/job">
        <IndexRoute component={ItemPage}></IndexRoute>
        <Route path=":page" component={ItemPage}></Route>
      </Route>
      <Route path="/user/:name" component={UserPage}></Route>
      <Route path="/comment/:id" component={CommentPage}></Route>
    </Router>
  );
}

export default RouterConfig;
