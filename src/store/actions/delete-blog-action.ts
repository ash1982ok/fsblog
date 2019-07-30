import { BLOG_ACTIONS } from '../../constants/constants';

export default function deleteBlogAction(blog: IBlogItem) {
    console.log(">>> clicked on :" + blog.title);
  return {
    type: BLOG_ACTIONS.DELETE_BLOG,
    payload: blog
  };
}
