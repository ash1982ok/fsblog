/** All the global import */
import { BLOG_ACTIONS } from '../constants/constants';
import deleteBlogAction from '../store/actions/delete-blog-action';

/**
 * All the blog action types
 */
export interface IDeleteBlogAction {
    type : typeof BLOG_ACTIONS.DELETE_BLOG,
    payload: number
}

export interface IAddBlogAction {
    type : typeof BLOG_ACTIONS.ADD_BLOG,
    payload: IBlogItem
}

/** Single type to represent all blog related action types 
 * If more actions needed then they will be added as OR conditions as below
 *  export type BlogActionTypes = deleteBlogAction | editBlogAction | addBlogAction;
*/
export type BlogActionTypes = IDeleteBlogAction | IAddBlogAction;

/** Single type to represent all application action types 
 * If more actions needed then they will be added as OR conditions as below
 *  export type AppActions = BlogActionTypes | SomeOtherActionTypes
*/

export type AppActions = BlogActionTypes;