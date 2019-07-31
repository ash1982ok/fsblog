/** All the global import */
import { Blogs } from "../../data/blogs-data";
import { BLOG_ACTIONS } from "../../constants/constants";

/** Reducer for blogs  
 * All the state manipulation happens here
*/
export function blogReducer (
    state = Blogs, 
    action:any
    ):any {
    switch (action.type) {
        case BLOG_ACTIONS.DELETE_BLOG:
            let mystate = [...state];
            mystate.splice(action.payload,1);
            state = mystate;
            return [...state]
        default: 
            return state;
    }
};
