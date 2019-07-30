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
    deleteBlog: (blog: IBlogItem) => void;
}


const BlogList: React.FC<IBlogListProps> = (props: IBlogListProps) => {
    // const [value, setValue] = useState<IBlogListProps>(props);

    /**
     * Function will delete the selected blog from blog list view
     * @param index index of the blog in the list
     */
    // const deleteBlog = (blog: IBlogItem): void => {
    //     value.blogs.splice(index, 1);
    //     setValue({ blogs: value.blogs });
    // }
    // to be added in blogitem component  deleteBlog={() => deleteBlog(index)}

    /**
     * 
     * @param props 
     */
    const generateBlogItemsDom = (blogs: IBlogItem[]): ReactNode[] => {
        let list: ReactNode[] = [];
        if (blogs && blogs.length > 0) {
            list = blogs.map((blogItem: IBlogItem, index: number) => {
                return <BlogItem key={blogItem.id} {...blogItem}
                    deleteBlog={()=>props.deleteBlog(blogItem)}
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

const mapStateToProps = (state: IBlogListProps) => ({
    blogs: state.blogs
});

const matchDispatchToProps = (dispatch: Dispatch) => {
    return bindActionCreators({ deleteBlog: deleteBlogAction }, dispatch);
};

export default connect(mapStateToProps, matchDispatchToProps)(BlogList);

