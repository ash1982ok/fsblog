import './blog.scss';

/** All the global import */
import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';

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
            <Fragment>
                <h1>{blog[0].title}</h1>
                <p>{blog[0].content}</p>
                <summary>
                    <strong>Date Posted: </strong>{blog[0].datePosted} <br/>
                    <strong>Tags: </strong>{blog[0].tags} <br/>
                    <strong>Tags: </strong>{blog[0].category} <br/>
                </summary>
            </Fragment>
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
