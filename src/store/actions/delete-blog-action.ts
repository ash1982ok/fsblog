/** All the global import */
import { BLOG_ACTIONS } from '../../constants/constants';
import { AppActions } from '../../typings/actions';

/** Action creator for delete blog action */
export default function deleteBlogAction(blogIndex: number):AppActions {
  return {
    type: BLOG_ACTIONS.DELETE_BLOG,
    payload: blogIndex
  };
}
