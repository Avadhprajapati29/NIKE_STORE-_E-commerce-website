import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({ cartCount = 0 }) => {
    const navigate = useNavigate();
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
        <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm py-3" style={{ fontFamily: "'Inter', sans-serif" }}>
            <div className="container">
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

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto gap-3">
                        <li className="nav-item"><Link className="nav-link text-uppercase fs-6 fw-semibold" to="/">Home</Link></li>
                        <li className="nav-item"><Link className="nav-link text-uppercase fs-6 fw-semibold" to="/men">Men</Link></li>
                        <li className="nav-item"><Link className="nav-link text-uppercase fs-6 fw-semibold" to="/women">Women</Link></li>
                        <li className="nav-item"><Link className="nav-link text-uppercase fs-6 fw-semibold" to="/collection">Collection</Link></li>
                        <li className="nav-item"><Link className="nav-link text-uppercase fs-6 fw-semibold" to="/contact">Contact</Link></li>
                    </ul>

                    <div className="d-flex align-items-center gap-3 ms-lg-3 mt-3 mt-lg-0 position-relative">
                        {/* Search Input */}
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search Products..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            style={{ width: '200px' }}
                        />
                        {searchResults.length > 0 && (
                            <ul className="list-group position-absolute" style={{ top: '40px', zIndex: 1000, width: '200px' }}>
                                {searchResults.map(product => (
                                    <li
                                        key={product.id}
                                        className="list-group-item list-group-item-action"
                                        style={{ cursor: 'pointer' }}
                                        onClick={() => handleSelect(product.id)}
                                    >
                                        {product.name}
                                    </li>
                                ))}
                            </ul>
                        )}

                        <Link to="/cart" className="nav-link p-0 position-relative" aria-label="Shopping Cart">
                            <i className="ri-shopping-cart-2-line fs-4"></i>
                            {cartCount > 0 && (
                                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                    {cartCount}
                                </span>
                            )}
                        </Link>

                        <Link to="/login" className="nav-link p-0" aria-label="User Profile">
                            <i className="ri-user-line fs-4"></i>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
