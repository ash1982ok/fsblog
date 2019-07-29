import './blog-list.scss';

import React, { ReactNode } from 'react';
import { connect } from 'react-redux';
import BlogItem from '../../presentation/blog-list-item/blog-list-item';

interface IBlogListProps {
    blogs: IBlogItem[];
}

const BlogList: React.SFC<IBlogListProps> = (props: IBlogListProps) => {
    // const [value, setValue] = useState<IBlogListProps>(props);

    /**
     * Function will delete the selected blog from blog list view
     * @param index index of the blog in the list
     */
    // const deleteBlog = (index: number): void => {
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
                return <BlogItem key={blogItem.id} {...blogItem} />;
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

export default connect(mapStateToProps)(BlogList);

