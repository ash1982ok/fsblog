import './blog-form.scss';

/** All the global import */
import React from 'react';
import { Field, Form } from 'react-final-form';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import addBlogAction from '../../../store/actions/add-blog-action';

/**
 *  BlogForm component to add a new blog
 */
const BlogForm: React.FC = (props: any): any => {
    return (
        // < className="container mt-5 blog-form" onSubmit={props.handleSubmit}> 
        <Form
            onSubmit={props.addBlog}
            render={({ handleSubmit, form, pristine, invalid }): any => (
                <form onSubmit={handleSubmit} className="container mt-5 blog-form">
                    <div className='form-group'>
                        <label htmlFor='title'>Title of blog</label>
                        <Field component='input' type='text' className='form-control' name='title' id='title' />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='body'>Blog body</label><br />
                        <Field
                            id="body"
                            component="textarea"
                            name="content"
                            cols={80}
                            rows={20}
                            wrap="hard" />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='category'>Category</label>
                        <Field name='category' component='select' className="ml-3">
                            <option value="framework">framework</option>
                            <option value="jslib">Javscript library</option>
                            <option value="webcomponent">Web Component</option>
                            <option value="compiler">Js Compiler</option>
                        </Field>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='tags'>Tags (e.g. tag1, tag2)</label>
                        <Field name='tags' component='input' type='text' className='form-control' id='tags' />
                    </div>
                    <div className='form-group'>
                        <button type="submit" className="btn btn-primary save-blog">Save</button>
                    </div>
                    <div className="hidden">
                        <Field type="hidden" component='input' name="datePosted" value={Date.now()} />
                    </div>
                </form>
            )}
        />
    );
}

interface LinkStateProps {
    addBlog: (blog: IBlogItem) => void
}

const mapStateToProps = (state: IBlogItem[]): LinkStateProps => {
    return {
        addBlog: addBlogAction
    }
};


const matchDispatchToProps = (dispatch: Dispatch) => {
    return bindActionCreators({ addBlog: addBlogAction }, dispatch);
};

// export default BlogForm;
export default connect(mapStateToProps, matchDispatchToProps)(BlogForm);

