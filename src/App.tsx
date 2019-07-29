import './App.scss';

import React, { Component } from 'react'
import AppRouter from './router';
import { Blogs } from './models/Blogs';

export default class App extends Component<IBlogsProps, IBlogItemState> {
  constructor(props:IBlogsProps){
    super(props);
    this.state = {
      showingAllBlogs: true,
      addingBlog: false,
      deletedBlog: false
    };
  }

  render() {
    return (
      <div>
          <AppRouter {...this.props}/>
      </div>
    )
  }

  static defaultProps = Blogs;
}

interface IBlogsProps {
  blogs : IBlogItem []
}

interface IBlogItemState {

}


