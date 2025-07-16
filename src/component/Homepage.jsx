import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import nikebluetransparent from '../assets/nike-blue-transparent.png';

const Homepage = () => {
    const [cart, setCart] = useState([]);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Fetch products from a JSON file
        fetch('/products.json')
            .then(response => response.json())
            .then(data => setProducts(data.homepageProducts))
            .catch(error => console.error('Error fetching homepage products:', error));
    }, []);

    const handleAddToCart = (product) => {
        setCart((prev) => [...prev, product]);
        alert(`${product.name} has been added to your cart!`);
    };

    return (
        <div className="min-vh-100 bg-light" style={{ fontFamily: "'Inter', sans-serif" }}>
            <Navbar cartCount={cart.length} />

            {/* Hero Section */}
            <section className="container custom-container py-5">
                <div className="row align-items-center">
                    <div className="col-lg-6 mb-5 mb-lg-0">
                        <span
                            className="badge px-4 py-2 mb-3 fs-6 fw-semibold text-uppercase"
                            style={{
                                background: 'linear-gradient(90deg, #0d6efd 60%, #6ea8fe 100%)',
                                color: '#fff',
                                letterSpacing: '2px',
                            }}
                        >
                            Limited Edition
                        </span>
                        <h1 className="display-4 fw-bold mb-4 lh-1 text-dark">
                            NIKE <span className="text-primary">ONLINE</span> SHOES STORE
                        </h1>
                        <p className="lead text-secondary mb-4">
                            Discover the latest Nike shoes online. Shop exclusive collections, limited editions, and the best in comfort and style. Just do it.
                        </p>
                        <button className="btn btn-primary btn-lg rounded-pill px-5 fw-semibold shadow">
                            Shop Now
                        </button>
                    </div>
                    <div className="col-lg-6 text-center">
                        <div className="hero-img-wrapper">
                            <img
                                src={nikebluetransparent}
                                alt="nike-blue-transparent"
                                className="img-fluid w-75 h-auto"
                                style={{ maxHeight: 320, objectFit: 'contain', borderRadius: 24 }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Product Cards Grid */}
            <section className="container custom-container pb-5">
                <h2 className="fw-bold mb-4 text-center text-uppercase">Featured Products</h2>
                <div className="row">
                    {products.map((product) => (
                        <div className="col-6 col-md-4 col-lg-3 mb-4" key={product.id}>
                            <div className="card h-100 shadow-sm border-0">
                                <img
                                    src={product.img}
                                    alt={product.name}
                                    className="card-img-top p-3"
                                    style={{ height: 320, objectFit: 'contain' }}
                                />
                                <div className="card-body">
                                    <h5 className="card-title fw-semibold">{product.name}</h5>
                                    <p className="card-text mb-1 text-secondary">{product.color}</p>
                                    <p className="card-text mb-1 text-secondary">{product.gender}</p>
                                    <p className="card-text fw-bold text-black">{product.price}</p>
                                    <button
                                        className="btn btn-primary w-100"
                                        onClick={() => handleAddToCart(product)}
                                    >
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* About/Promo Section */}
            <section className="container custom-container pb-5">
                <div className="row align-items-center bg-white rounded-4 shadow-sm p-4">
                    <div className="col-md-8">
                        <h3 className="fw-bold mb-2">Why Shop at Nike Online Store?</h3>
                        <p className="mb-0 text-secondary">
                            Enjoy the best selection of Nike shoes, fast delivery, and exclusive online offers. Stand out with the latest designs and unbeatable comfort.
                        </p>
                    </div>
                    <div className="col-md-4 text-md-end text-center mt-3 mt-md-0">
                        <a href="#" className="btn btn-primary rounded-pill px-4">
                            Learn More
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Homepage;
