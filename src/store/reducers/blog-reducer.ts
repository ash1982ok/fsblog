/** All the global import */
import { blogReducerDefaultState } from "../../data/blogs-data";
import { BLOG_ACTIONS } from "../../constants/constants";
import { BlogActionTypes } from "../../typings/actions";
import uuid from "uuid";

/** Reducer for blogs  
 * All the state manipulation happens here
*/

export function blogReducer (
    state = blogReducerDefaultState, 
    action : BlogActionTypes
    ):IBlogItem[] {
    switch (action.type) {
        case BLOG_ACTIONS.DELETE_BLOG:
            let mystate = [...state];
            //payload is the blogIndex in the array
            mystate.splice(action.payload,1);
            state = mystate;
            return [...state];
        case BLOG_ACTIONS.ADD_BLOG:
            action.payload.datePosted = Date.now();
            action.payload.id = uuid.v4();
            return [...state, action.payload];
        default: 
            return state;
    }
};
