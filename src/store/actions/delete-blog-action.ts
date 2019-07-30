import { BLOG_ACTIONS } from '../../constants/constants';

export default function deleteBlogAction(blogIndex: number) {
    console.log(">>> clicked on :" + blogIndex);
  return {
    type: BLOG_ACTIONS.DELETE_BLOG,
    payload: blogIndex
  };
}
