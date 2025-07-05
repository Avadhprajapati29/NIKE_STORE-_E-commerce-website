import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm py-3" style={{ fontFamily: "'Inter', sans-serif" }}>
        <div className="container">
            {/* Brand Logo */}
            <Link className="navbar-brand fw-bold fs-3 text-primary" to="/">
                NIKE<span className="text-dark">STORE</span>
            </Link>
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
            {/* Nav Links */}
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
                    <a href="#" className="nav-link p-0"><i className="ri-search-line fs-4"></i></a>
                    <a href="#" className="nav-link p-0"><i className="ri-shopping-cart-2-line fs-4"></i></a>
                    <a href="#" className="nav-link p-0"><i className="ri-user-line fs-4"></i></a>
                </div>
            </div>
        </div>
    </nav>
);

export default Navbar;