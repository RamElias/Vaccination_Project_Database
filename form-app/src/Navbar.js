import React, {useState} from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
    const [isNavbarOpen, setNavbarOpen] = useState(false);

    const toggleNavbar = () => {
        setNavbarOpen(!isNavbarOpen);
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#e3f2fd' }}>
            <div className="container">
                <div className="navbar-brand">
                    <Link to="/">
                    </Link>
                </div>

                <button className="navbar-toggler" type="button" onClick={toggleNavbar}>
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className={`navbar-collapse ${isNavbarOpen ? 'show' : ''}`}>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">
                                <span style={{ fontSize: '30px' }}>Register</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/summary">
                                <span style={{ fontSize: '30px' }}>Summary</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );

};

export default Navbar;
