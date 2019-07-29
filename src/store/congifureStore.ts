import { combineReducers, createStore } from 'redux';

import { blogReducer } from './reducers/blog-reducer';

export const rootReducer = combineReducers({
    blogs: blogReducer
});

// export type AppState = ReturnType<typeof rootReducer>;

export const store = createStore(
    rootReducer
);