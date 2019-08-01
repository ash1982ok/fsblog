/** All the global import */
import { createBrowserHistory as createHistory } from 'history'
import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';

/** All the local import */
import BlogItem from '../components/container/blog/blog';
import BlogList from '../components/container/blog-list/blog-list';
import FsHeader from '../components/presentation/header/header';
import UrlError from '../components/container/url-error/url-error';

/** history object */
export const history = createHistory();

/** Interface for the component props */
interface IBlogsRouteProps {
  blogs: IBlogItem[]
}

/** Application router for the app 
 *  ROUTES:
 *  '/' : home page url 
 *  '/blog/:id' : This is the url for individual blog
 *  rest of the URL will come to error page
*/
const AppRouter = (props: IBlogsRouteProps) => (
  <Router history={history}>
    <div className="App container-fluid">
      <FsHeader />
      <Switch>
        <Route exact path="/" component={BlogList} />
        <Route exact path="/blog/:id" component={BlogItem} />
        <Route component={UrlError} />
      </Switch>
    </div>
  </Router>
);


export default AppRouter;
