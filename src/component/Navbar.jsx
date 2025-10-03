import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = ({ cartCount = 0 }) => {
    const navigate = useNavigate();
    const location = useLocation(); // ✅ current route track karne ke liye
    const [searchTerm, setSearchTerm] = useState('');
    const [allProducts, setAllProducts] = useState([]);
    const [searchResults, setSearchResults] = useState([]);

    // Load all products
    useEffect(() => {
        fetch('/products.json')
            .then(res => res.json())
            .then(data => {
                const products = [
                    ...data.homepageProducts,
                    ...data.menProducts,
                    ...data.womenProducts,
                    ...data.collectionProducts
                ];
                setAllProducts(products);
            });
    }, []);

    // Filter search results
    useEffect(() => {
        if (!searchTerm) {
            setSearchResults([]);
            return;
        }
        const results = allProducts.filter(product =>
            product.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setSearchResults(results);
    }, [searchTerm, allProducts]);

    const handleSelect = (id) => {
        setSearchTerm('');
        setSearchResults([]);
        navigate(`/product/${id}`);
    };

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="navbar navbar-expand-lg navbar-light bg-white shadow-sm py-3"
            style={{ fontFamily: "'Inter', sans-serif" }}
        >
            <div className="container">
                {/* Logo with gradient shine animation */}
                <motion.div
                    animate={{ backgroundPosition: ["0% 50%", "100% 50%"] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    style={{
                        backgroundImage: "linear-gradient(90deg, #0d6efd, #6610f2, #e83e8c, #fd7e14, #20c997)",
                        backgroundSize: "300% 300%",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        display: "inline-block"
                    }}
                >
                    <Link className="navbar-brand fw-bold fs-3" to="/" style={{ textDecoration: "none" }}>
                        NIKE<span className="text-dark">STORE</span>
                    </Link>
                </motion.div>

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
                        {["Home", "Men", "Women", "Kids", "Collection", "Contact"].map((item, index) => {
                            const path = item.toLowerCase() === "home" ? "/" : `/${item.toLowerCase()}`;
                            const isActive = location.pathname === path; // ✅ active page check

                            return (
                                <motion.li
                                    key={index}
                                    className="nav-item"
                                    whileHover={{ y: -3 }}
                                    transition={{ type: "spring", stiffness: 200 }}
                                >
                                    <Link
                                        className="nav-link text-uppercase fs-6 fw-semibold position-relative"
                                        to={path}
                                        style={{ color: isActive ? "#0d6efd" : "#212529", textDecoration: "none" }}
                                    >
                                        {item}

                                        {/* ✅ Active underline effect */}
                                        <AnimatePresence>
                                            {isActive && (
                                                <motion.div
                                                    key="underline"
                                                    className="position-absolute start-0 bottom-0"
                                                    style={{
                                                        height: "3px",
                                                        width: "100%",
                                                        background: "linear-gradient(90deg, #0d6efd, #6610f2)",
                                                        borderRadius: "5px",
                                                        boxShadow: "0px 0px 8px rgba(13,110,253,0.6)"
                                                    }}
                                                    initial={{ scaleX: 0 }}
                                                    animate={{ scaleX: 1 }}
                                                    exit={{ scaleX: 0 }}
                                                    transition={{ duration: 0.4 }}
                                                />
                                            )}
                                        </AnimatePresence>
                                    </Link>
                                </motion.li>
                            );
                        })}
                    </ul>

                    <div className="d-flex align-items-center gap-3 ms-lg-3 mt-3 mt-lg-0 position-relative">
                        {/* Search Input */}
                        <motion.input
                            whileFocus={{ scale: 1.05 }}
                            type="text"
                            className="form-control"
                            placeholder="Search Products..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            style={{ width: '200px' }}
                        />

                        {/* Search Results with animation */}
                        <AnimatePresence>
                            {searchResults.length > 0 && (
                                <motion.ul
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.3 }}
                                    className="list-group position-absolute"
                                    style={{ top: '40px', zIndex: 1000, width: '200px' }}
                                >
                                    {searchResults.map(product => (
                                        <motion.li
                                            key={product.id}
                                            whileHover={{ backgroundColor: "#f1f1f1" }}
                                            className="list-group-item list-group-item-action"
                                            style={{ cursor: 'pointer' }}
                                            onClick={() => handleSelect(product.id)}
                                        >
                                            {product.name}
                                        </motion.li>
                                    ))}
                                </motion.ul>
                            )}
                        </AnimatePresence>

                        {/* Cart Icon */}
                        <motion.div whileHover={{ scale: 1.2 }}>
                            <Link to="/cart" className="nav-link p-0 position-relative" aria-label="Shopping Cart">
                                <i className="ri-shopping-cart-2-line fs-4"></i>
                                {cartCount > 0 && (
                                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                        {cartCount}
                                    </span>
                                )}
                            </Link>
                        </motion.div>

                        {/* User Icon */}
                        <motion.div whileHover={{ scale: 1.2 }}>
                            <Link to="/login" className="nav-link p-0" aria-label="User Profile">
                                <i className="ri-user-line fs-4"></i>
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </div>
        </motion.nav>
    );
};

export default Navbar;
