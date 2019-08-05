/** All the global import */
import { combineReducers, createStore } from 'redux';
import { reducer as formReducer} from 'redux-form';
/** All the local import */
import { blogReducer } from './reducers/blog-reducer';

/** Combined reducer  */
export const rootReducer = combineReducers({
    blogs: blogReducer,
    form : formReducer
});

export type AppState = ReturnType<typeof rootReducer>;

/** creating store from reducers */
export const store = createStore(
    rootReducer
);