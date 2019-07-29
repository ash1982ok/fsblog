import createHistory from 'history/createBrowserHistory';
import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';

import BlogItem from '../components/blog-item/Blog-Item';
import BlogList from '../components/blog-list/BlogList';
import FsHeader from '../components/header/FsHeader';
import UrlError from '../components/url-error/Url-Error';
export const history = createHistory();

const AppRouter = (props:IBlogsRouteProps) => (
  <Router history={history}>
    <div className="App container-fluid">
    <FsHeader />
      <Switch>
        <Route  
        exact
        path="/" 
        render={(routeProps:any):any => <BlogList {...routeProps} {...props} />}
        />
        <Route path="/blog/:id" component={BlogItem} />
        <Route component={UrlError} />
      </Switch>
    </div>
  </Router>
);

interface IBlogsRouteProps {
  blogs : IBlogItem []
}

export default AppRouter;
