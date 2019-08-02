/** All the global import */
import { combineReducers, createStore } from 'redux';

/** All the local import */
import { blogReducer } from './reducers/blog-reducer';

/** Combined reducer  */
export const rootReducer = combineReducers({
    blogs: blogReducer
});

export type AppState = ReturnType<typeof rootReducer>;

/** creating store from reducers */
export const store = createStore(
    rootReducer
);