import './BlogList.scss';

import React, { ReactNode, useState } from 'react';

import BlogItem from './blog-list-item/BlogListItem';

interface IBlogListProps {
    blogs: IBlogItem[];
}

const BlogList: React.FC<IBlogListProps> = (props: IBlogListProps) => {
    const [value, setValue] = useState<IBlogListProps>(props);

    /**
     * Function will delete the selected blog from blog list view
     * @param index index of the blog in the list
     */
    const deleteBlog = (index: number): void => {
        value.blogs.splice(index, 1);
        setValue({ blogs: value.blogs });
    }

    /**
     * 
     * @param props 
     */
    const generateBlogItemsDom = (props: IBlogListProps): ReactNode[] => {
        let list: ReactNode[] = [];
        if (props.blogs && props.blogs.length > 0) {
            list = props.blogs.map((blogItem: IBlogItem, index: number) => {
                return <BlogItem key={blogItem.id} {...blogItem} deleteBlog={() => deleteBlog(index)} />;
            })
        }

        return list;
    }

    return (
        <ul className="row blog-list">
        {
            generateBlogItemsDom(value)
        }
        </ul>
    );
}

export default BlogList;


