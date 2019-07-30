import './blog-list-item.scss';

import React from 'react';

interface IBlogItem {
    id: string,
    title: string,
    datePosted: number,
    category?: string,
    tags?: string,
    content: string,
    deleteBlog ?:any
}

const BlogListItem: React.FC<IBlogItem> = (props:IBlogItem) => {
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
                    <button className="btn btn-primary del-blog" onClick={(e)=>props.deleteBlog(props)}>delete</button>
                </div>
            </div>
        </li>
    );
}

export default BlogListItem;
