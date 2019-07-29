import createHistory from 'history/createBrowserHistory';
import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';

import BlogItem from '../components/container/blog/blog';
import BlogList from '../components/container/blog-list/blog-list';
import FsHeader from '../components/presentation/header/header';
import UrlError from '../components/container/url-error/url-error';
export const history = createHistory();

const AppRouter = (props: IBlogsRouteProps) => (
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

interface IBlogsRouteProps {
  blogs: IBlogItem[]
}

export default AppRouter;
