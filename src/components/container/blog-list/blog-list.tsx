import './blog-list.scss';

import React, { ReactNode } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import BlogItem from '../../presentation/blog-list-item/blog-list-item';
import deleteBlogAction from '../../../store/actions/delete-blog-action';
import { Dispatch } from 'redux';

export type deleteBlogSyntheticEvent = React.SyntheticEvent<IBlogItem>;

interface IBlogListProps {
    blogs: IBlogItem[],
    deleteBlog: (blogIndex:number) => void;
}

// const deleteBlog = (blogItem:IBlogItem)=>{
//     console.log('hello', blogItem);
// }

const BlogList: React.FC<IBlogListProps> = (props: IBlogListProps) => {

   
    /**
     * 
     * @param props 
     */
    const generateBlogItemsDom = (blogs: IBlogItem[]): ReactNode[] => {
        let list: ReactNode[] = [];
        if (blogs && blogs.length > 0) {
            list = blogs.map((blogItem: IBlogItem, index:number) => {
                return <BlogItem key={blogItem.id} {...blogItem}
                    deleteBlog={props.deleteBlog} 
                    blogIndex={index}
                />;
            })
        }

        return list;
    }

    return (
        <ul className="row blog-list">
            {
                generateBlogItemsDom(props.blogs)
            }
        </ul>
    );
}

const mapStateToProps = (state: IBlogListProps) => {
    return {
        blogs: state.blogs,
        deleteBlog: deleteBlogAction
    }
};

const matchDispatchToProps = (dispatch: Dispatch) => {
    return bindActionCreators({ deleteBlog: deleteBlogAction }, dispatch);
};

export default connect(mapStateToProps, matchDispatchToProps)(BlogList);

