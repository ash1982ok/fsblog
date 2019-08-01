import './url-error.scss';

/** All the global import */
import React from 'react';
import { Link } from 'react-router-dom';

/**
 *  UrlError component to show page not found page
 */
const UrlError: React.FC = () => {
    return (
        <p className="page-not-found">
            Page not found!!!
            <br/>
            <Link to="/">Go Back</Link>
        </p>
    );
}

export default UrlError;
