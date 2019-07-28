import './BlogList.scss';

import React from 'react';

import BlogItem from './blog-list-item/BlogListItem';

const BlogList: React.FC = () => {
    return (
        <ul className="row blog-list">
            <BlogItem  tags="tag1, tag2" content="My placeholder content A"  category="cat1" datePosted="today"  title="My First Blog"/>
            <BlogItem  tags="tag1, tag2" content="My placeholder content B" category="cat1" datePosted="today"  title="My First Blog"/>
            <BlogItem  tags="tag1, tag2" content="My placeholder content C" category="cat1" datePosted="today"  title="My First Blog"/>
            <BlogItem  tags="tag1, tag2" content="My placeholder content D" category="cat1" datePosted="today"  title="My First Blog"/>
            <BlogItem  tags="tag1, tag2" content="My placeholder content A"  category="cat1" datePosted="today"  title="My First Blog"/>
            <BlogItem  tags="tag1, tag2" content="My placeholder content B" category="cat1" datePosted="today"  title="My First Blog"/>
            <BlogItem  tags="tag1, tag2" content="My placeholder content C" category="cat1" datePosted="today"  title="My First Blog"/>
            <BlogItem  tags="tag1, tag2" content="My placeholder content D" category="cat1" datePosted="today"  title="My First Blog"/>
        </ul>
    );
}

export default BlogList;
