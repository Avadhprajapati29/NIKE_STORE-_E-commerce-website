import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './Navbar';
import nikeImage1 from '../assets/nike-image1.jpg';
import nikeImage2 from '../assets/nike-image2.jpg';
import nikeImage3 from '../assets/nike-image3.jpg';
import nikeImage4 from '../assets/nike-image4.jpg';
import Footer from './Footer';

const images = [nikeImage1, nikeImage2, nikeImage3, nikeImage4];

const Homepage = () => {
    const [cart, setCart] = useState([]);
    const [products, setProducts] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
        setCart(savedCart);
    }, []);

    useEffect(() => {
        fetch('/products.json')
            .then(res => res.json())
            .then(data => setProducts(data.homepageProducts))
            .catch(err => console.error('Error fetching products:', err));
    }, []);

    // Auto change image every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prev => (prev + 1) % images.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const handleImageClick = (productId) => {
        navigate(`/product/${productId}`);
    };

    return (
        <div className="min-vh-100 bg-light" style={{ fontFamily: "'Garamond', serif" }}>
            <Navbar cartCount={cart.length} />

            {/* Hero Section */}
            <section className="container custom-container py-5">
                <div className="row align-items-center">
                    {/* Left Text */}
                    <div className="col-lg-6 mb-5 mb-lg-0 text-center text-lg-start">
                        <motion.h1
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="display-4 fw-bold mb-4"
                        >
                            Step Into <span className="text-danger">Nike</span> Luxury
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.3 }}
                            className="lead mb-4 fs-5 text-secondary"
                        >
                            Redefine your sneaker game with unmatched comfort, iconic style, and cutting-edge performance.
                        </motion.p>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Link to="/men" className="btn btn-dark btn-lg rounded-pill px-5 shadow">
                                Shop Collection
                            </Link>
                        </motion.div>
                    </div>

                    {/* Right Sliding Image */}
                    <div className="col-lg-6 text-center position-relative">
                        <AnimatePresence mode="wait">
                            <motion.img
                                key={currentIndex}
                                src={images[currentIndex]}
                                alt="Nike Hero"
                                className="img-fluid rounded-4 shadow-lg"
                                style={{ maxHeight: 400, objectFit: 'cover' }}
                                initial={{ x: 100, opacity: 0, scale: 0.9 }}
                                animate={{ x: 0, opacity: 1, scale: 1 }}
                                exit={{ x: -100, opacity: 0, scale: 0.9 }}
                                transition={{ type: 'spring', stiffness: 120, damping: 20, duration: 0.8 }}
                            />
                        </AnimatePresence>
                        {/* Background Glow */}
                        <motion.div
                            className="position-absolute top-50 start-50 translate-middle rounded-circle"
                            style={{
                                width: 300,
                                height: 300,
                                background: "radial-gradient(circle, rgba(13,110,253,0.2) 0%, transparent 70%)",
                                zIndex: -1
                            }}
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ repeat: Infinity, duration: 3 }}
                        />
                    </div>
                </div>
            </section>

            {/* Featured Products */}
            <section className="container custom-container pb-5">
                <h2 className="fw-bold mb-4 text-center text-uppercase">Featured Products</h2>
                <div className="row">
                    {products.map(product => (
                        <div className="col-6 col-md-4 col-lg-3 mb-4" key={product.id}>
                            <div className="card h-100 shadow-sm border-0" style={{ cursor: 'pointer' }} onClick={() => handleImageClick(product.id)}>
                                <img src={product.img} alt={product.name} className="card-img-top p-3" style={{ height: 320, objectFit: 'contain' }} />
                                <div className="card-body">
                                    <h5 className="card-title fw-semibold">{product.name}</h5>
                                    <p className="card-text mb-1 text-secondary">{product.color}</p>
                                    <p className="card-text mb-1 text-secondary">{product.gender}</p>
                                    <p className="card-text fw-bold text-black">{product.price}</p>
                                    <Link to={`/product/${product.id}`} className="btn btn-outline-secondary w-100 mt-2">View Details</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Homepage;
