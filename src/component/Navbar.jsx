import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [showAccount, setShowAccount] = useState(false);
    const accountRef = useRef();

    // Toggle dark mode class on body
    useEffect(() => {
        document.body.classList.toggle('dark', darkMode);
    }, [darkMode]);

    // Close account dropdown on outside click
    useEffect(() => {
        const handleClick = (e) => {
            if (accountRef.current && !accountRef.current.contains(e.target)) {
                setShowAccount(false);
            }
        };
        document.addEventListener('mousedown', handleClick);
        return () => document.removeEventListener('mousedown', handleClick);
    }, []);

    return (
        <nav className={`navbar navbar-expand-lg ${darkMode ? 'navbar-dark bg-dark' : 'navbar-light bg-white'} shadow-sm py-3`} style={{ fontFamily: "'Inter', sans-serif" }}>
            <div className="container">
                {/* Brand Logo */}
                <Link className="navbar-brand fw-bold fs-3 text-primary" to="/">
                    NIKE<span className={darkMode ? "text-light" : "text-dark"}>STORE</span>
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
                    {/* Search Bar */}
                    <form className="d-flex mx-lg-3 my-2 my-lg-0" role="search">
                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                            style={{ minWidth: 180 }}
                        />
                        <button className={`btn btn-${darkMode ? 'light' : 'primary'}`} type="submit">
                            <i className="ri-search-line"></i>
                        </button>
                    </form>
                    {/* Right-side icons */}
                    <div className="d-flex align-items-center gap-3 ms-lg-3 mt-3 mt-lg-0">
                        {/* Dark/Light Mode Toggle */}
                        <button
                            className={`btn btn-sm ${darkMode ? 'btn-light' : 'btn-dark'}`}
                            onClick={() => setDarkMode(!darkMode)}
                            title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
                        >
                            {darkMode ? <i className="ri-sun-line"></i> : <i className="ri-moon-line"></i>}
                        </button>
                        {/* Cart */}
                        <a href="#" className="nav-link p-0"><i className="ri-shopping-cart-2-line fs-4"></i></a>
                        {/* Account Center Dropdown */}
                        <div className="dropdown" ref={accountRef}>
                            <button
                                className="btn nav-link p-0"
                                onClick={() => setShowAccount((v) => !v)}
                                aria-expanded={showAccount}
                            >
                                <i className="ri-user-line fs-4"></i>
                            </button>
                            {showAccount && (
                                <ul className={`dropdown-menu dropdown-menu-end show ${darkMode ? 'bg-dark text-light' : ''}`} style={{ position: 'absolute' }}>
                                    <li><Link className="dropdown-item" to="/profile">Profile</Link></li>
                                    <li><Link className="dropdown-item" to="/orders">Orders</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><button className="dropdown-item" onClick={() => alert('Logged out!')}>Logout</button></li>
                                </ul>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;