import React from 'react';
import { Router, Route, Redirect, IndexRoute } from 'dva/router';
import ItemPage from './routes/ItemPage';
import Test from './routes/Test'

function RouterConfig({app, history}) {
  return (
    <Router history={history}>
      <Redirect from="/" to='/top' />
      <Route path="/top">
        <IndexRoute component={ItemPage}></IndexRoute>
        <Route path=":page" component={ItemPage}></Route>
      </Route>
    </Router>
  );
}

export default RouterConfig;
