import './blog.scss';

/** All the global import */
import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import ReactHtmlParser from 'react-html-parser';
import { Link } from 'react-router-dom';
/**
 *  type def for URL parameter
 */
type TParams = { id: string };

/** Interface for the component props */
interface IBlogListProps extends RouteComponentProps<TParams> {
    blogs: IBlogItem[]
}

/**
 *  BlogItem component to show individual blog
 * @param props IBlogListProps
 */
const BlogItem: React.FC<IBlogListProps> = (props: IBlogListProps) => {

    const getBlogData = () => {
        const mystate: IBlogItem[] = [...props.blogs];
        var blog: IBlogItem[] = mystate.splice(parseInt(props.match.params.id), 1);
        return (
            <section className="blog container col-12 col-sm-8">
                <br/>
                <Link to="/">Go back</Link><h1>{blog[0].title}
                <br/>
                </h1>
                <p>{ReactHtmlParser (blog[0].content)}</p>
                <summary>
                    <strong>Date Posted: </strong>{new Date(blog[0].datePosted).getDate() +'/'+ new Date(blog[0].datePosted).getMonth() + '/'+ new Date(blog[0].datePosted).getFullYear() } <br/>
                    <strong>Tags: </strong>{blog[0].tags} <br/>
                    <strong>Tags: </strong>{blog[0].category} <br/>
                </summary>
                <br/>
                <Link to="/">Go back</Link>
            </section>
        );
    }


    return (
        <Fragment>
            {getBlogData()}
        </Fragment>
    );
}

const mapStateToProps = (state: IBlogListProps) => {
    return {
        blogs: state.blogs
    }
};

export default connect(mapStateToProps)(BlogItem);
