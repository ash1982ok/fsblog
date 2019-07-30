import { BLOG_ACTIONS } from '../../constants/constants';

export function showAllBlogAction(blogs: IBlogItem[]) {
  return {
    type: BLOG_ACTIONS.SHOW_ALL_BLOGS,
    payload: blogs
  };
}
