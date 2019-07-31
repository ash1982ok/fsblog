import './blog-list-item.scss';

import React from 'react';
import { Link } from 'react-router-dom';

interface IBlogListItem {
    id: string,
    title: string,
    datePosted: number,
    category?: string,
    tags?: string,
    content: string,
    deleteBlog ?:any,
    blogIndex: number
}

const BlogListItem: React.FC<IBlogListItem> = (props:IBlogListItem) => {
    return (
        <li className="col-3 blog-item-wrapper">
            <div className="blog-item">
                <div className="header">
                    {props.title}
                    <div className="info">
                        <strong>Date Posted </strong> : {props.datePosted} <br/>
                        <strong>Category </strong> : {props.category} <br/>
                        <strong>Tags</strong> : {props.tags}
                    </div>
                    <button className="btn btn-primary del-blog" onClick={(e)=>props.deleteBlog(props.blogIndex)}>delete</button>
                    <Link className="btn btn-primary del-blog" to={"/blog/"+props.id}>show</Link>
                </div>
            </div>
        </li>
    );
}

export default BlogListItem;
