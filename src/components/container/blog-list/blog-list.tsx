import './blog-list.scss';

/** All the global import */
import React, { ReactNode } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

/** All the local import */
import deleteBlogAction from '../../../store/actions/delete-blog-action';
import BlogItem from '../../presentation/blog-list-item/blog-list-item';

/** Interface for the component props */
interface IBlogListProps {
    blogs: IBlogItem[],
    deleteBlog: (blogIndex: number) => void
}
/**
 *  BlogList component to show list of blogs
 * @param props IBlogListProps
 */
const BlogList: React.FC<IBlogListProps> = (props: IBlogListProps) => {

    const generateBlogItemsDom = (blogs: IBlogItem[]): ReactNode[] => {
        let list: ReactNode[] = [];
        if (blogs && blogs.length > 0) {
            list = blogs.map((blogItem: IBlogItem, index: number) => {
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

interface LinkStateProps {
    blogs: IBlogItem[],
    deleteBlog: (blogIndex: number) => void
}
const mapStateToProps = (state: IBlogListProps):LinkStateProps => {
    return {
        blogs: state.blogs,
        deleteBlog: deleteBlogAction
    }
};

const matchDispatchToProps = (dispatch: Dispatch) => {
    return bindActionCreators({ deleteBlog: deleteBlogAction }, dispatch);
};

export default connect(mapStateToProps, matchDispatchToProps)(BlogList);

