import createHistory from 'history/createBrowserHistory';
import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';

import BlogItem from '../components/blog-item/Blog-Item';
import BlogList from '../components/blog-list/BlogList';
import FsHeader from '../components/header/FsHeader';
import UrlError from '../components/url-error/Url-Error';

export const history = createHistory();

// Instead of BrowserRouter, we use the regular router,
// but we pass in a customer history to it.
const AppRouter = () => (
  <Router history={history}>
    <div className="App container-fluid">
    <FsHeader />
      <Switch>
        <Route exact path="/" component={BlogList} />
        <Route path="/blog/:id" component={BlogItem} />
        <Route component={UrlError} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;