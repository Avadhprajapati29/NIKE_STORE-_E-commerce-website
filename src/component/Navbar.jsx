import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ cartCount = 0 }) => (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm py-3" style={{ fontFamily: "'Inter', sans-serif" }}>
        <div className="container">
            {/* Brand Logo */}
            <Link className="navbar-brand fw-bold fs-3 text-primary" to="/">
                NIKE<span className="text-dark">STORE</span>
            </Link>

            {/* Toggle Button for Mobile */}
            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>

            {/* Navbar Links and Icons */}
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav mx-auto gap-3">
                    <li className="nav-item">
                        <Link className="nav-link text-uppercase fs-6 fw-semibold" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-uppercase fs-6 fw-semibold" to="/men">Men</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-uppercase fs-6 fw-semibold" to="/women">Women</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-uppercase fs-6 fw-semibold" to="/collection">Collection</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-uppercase fs-6 fw-semibold" to="/contact">Contact</Link>
                    </li>
                </ul>

                {/* Right-side icons */}
                <div className="d-flex align-items-center gap-3 ms-lg-3 mt-3 mt-lg-0">
                    <a href="#" className="nav-link p-0" aria-label="Search">
                        <i className="ri-search-line fs-4"></i>
                    </a>

                    <div className="position-relative">
                        <Link to="/cart" className="nav-link p-0" aria-label="Shopping Cart">
                            <i className="ri-shopping-cart-2-line fs-4"></i>
                            {cartCount > 0 && (
                                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                    {cartCount}
                                </span>
                            )}
                        </Link>
                    </div>

                    {/* Change this anchor tag to Link for User Profile */}
                    <Link to="/login" className="nav-link p-0" aria-label="User Profile">
                        <i className="ri-user-line fs-4"></i>
                    </Link>
                </div>
            </div>
        </div>
    </nav>
);

export default Navbar;
