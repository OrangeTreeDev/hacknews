import React from 'react';
import { Router, Route, IndexRoute } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Products from './routes/Products';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/">
        <IndexRoute component={IndexPage}></IndexRoute>
      </Route>
    </Router>
  );
}

export default RouterConfig;
