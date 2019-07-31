import './App.scss';

/** All the global import */
import React, { Component } from 'react';

/** All the local import */
import { Blogs } from '../data/blogs-data';
import AppRouter from '../router';

/** Interface for the component props */
interface IBlogsProps {
  blogs: IBlogItem[]
}

/**
 *  App component to hold all the components
 * @param props IBlogsProps
 */
export default class App extends Component<IBlogsProps> {

  render() {
    return (
      <div>
        <AppRouter {...this.props} />
      </div>
    )
  }

  static defaultProps = Blogs;
}
