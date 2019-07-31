import './header.scss';

/** All the global import */
import React from 'react';

/**
 *  FsHeader component to show header on top of the page
 */
const FsHeader: React.FC = () => {
    return (
        <header>
            <div className="blog-title shadows">
                <span>M</span>
                <span>Y</span>
                <span> </span>
                <span>B</span>
                <span>L</span>
                <span>O</span>
                <span>G</span>
            </div>
        </header>
    );
}

export default FsHeader;
