import './BlogListItem.scss';

import React from 'react';

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
                    <button className="btn btn-primary del-blog" onClick={props.deleteBlog}>delete</button>
                </div>
            </div>
        </li>
    );
}

export default BlogListItem;
