import './blog-list-item.scss';

/** All the global import */
import React from 'react';
import { Link } from 'react-router-dom';

/** Interface for the component props */
interface IBlogListItem {
    id: string,
    title: string,
    datePosted: number,
    category?: string,
    tags?: string,
    content: string,
    deleteBlog?: any,
    blogIndex: number
}

/**
 *  BlogListItem component to show individual blog in the list
 * @param props IBlogListItem
 */
const BlogListItem: React.FC<IBlogListItem> = (props: IBlogListItem) => {
    return (
        <li className="col-12 col-sm-3 blog-item-wrapper">
            <div className="blog-item">
                <div className="header">
                    {props.title}
                    <div className="info">
                        <strong>Date Posted </strong> : {new Date(props.datePosted).getDate() +'/'+ new Date(props.datePosted).getMonth() + '/'+ new Date(props.datePosted).getFullYear()} <br />
                        <strong>Category </strong> : {props.category} <br />
                        <strong>Tags</strong> : {props.tags}
                    </div>
                    <button className="btn btn-primary del-blog" onClick={(e) => props.deleteBlog(props.blogIndex)}>delete</button>
                    <Link className="btn btn-primary del-blog ml-3" to={"/blog/" + props.blogIndex}>show</Link>
                </div>
            </div>
        </li>
    );
}

export default BlogListItem;
