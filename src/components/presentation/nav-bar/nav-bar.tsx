import './nav-bar.scss';

/** All the global import */
import React from 'react';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';

/**
 *  NavBar component to add a new blog
 */
const NavBar: React.FC = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="navbar-brand">MyBlog</div>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/blog/new">Add New Blog</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;

