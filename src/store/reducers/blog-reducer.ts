import { Blogs } from "../../data/blogs-data";

export function blogReducer (
    state = Blogs, 
    action:any
    ):any {
    switch (action.type) {
        case 'SHOW_ALL_BLOGS':
            return state;
        case 'REMOVE_BLOG':
            return state;
        case 'ADD_BLOG':
            return state;
        default: 
            return state;
    }
};
