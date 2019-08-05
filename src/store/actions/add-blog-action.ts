/** All the global import */
import { BLOG_ACTIONS } from '../../constants/constants';
import { AppActions } from '../../typings/actions';

/** Action creator for delete blog action */
export default function addBlogAction(blog: IBlogItem):AppActions {
  return {
    type: BLOG_ACTIONS.ADD_BLOG,
    payload: blog
  };
}
