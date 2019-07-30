import { Blogs } from "../../data/blogs-data";
import { BLOG_ACTIONS } from "../../constants/constants";

export function blogReducer (
    state = Blogs, 
    action:any
    ):any {
    switch (action.type) {
        case BLOG_ACTIONS.SHOW_ALL_BLOGS:
            return state;
        case BLOG_ACTIONS.SHOW_BLOG:
            return state;
        case BLOG_ACTIONS.DELETE_BLOG:
            state.splice(action.payload,1);
            return [...state]
            
        default: 
            return state;
    }
};
