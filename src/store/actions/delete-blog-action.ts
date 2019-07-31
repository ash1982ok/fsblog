/** All the global import */
import { BLOG_ACTIONS } from '../../constants/constants';

/** Action creator for delete blog action */
export default function deleteBlogAction(blogIndex: number) {
  return {
    type: BLOG_ACTIONS.DELETE_BLOG,
    payload: blogIndex
  };
}
