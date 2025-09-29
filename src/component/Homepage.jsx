import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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

    useEffect(() => {
        const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
        setCart(savedCart);
    }, []);

    useEffect(() => {
        fetch('/products.json')
            .then(response => response.json())
            .then(data => setProducts(data.homepageProducts))
            .catch(error => console.error('Error fetching homepage products:', error));

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="min-vh-100 bg-light" style={{ fontFamily: "'Garamond', serif" }}>
            <Navbar cartCount={cart.length} />

            {/* Hero Section */}
            <section className="container custom-container py-5 bg-beige text-dark rounded-3">
                <div className="row align-items-center">
                    <div className="col-lg-6 mb-5 mb-lg-0 text-center text-lg-start">
                        <h1 className="display-5 fw-bold mb-4" style={{ fontStyle: 'italic' }}>
                            Discover Timeless <span className="text-danger">Nike</span> Elegance
                        </h1>
                        <p className="lead mb-4 fs-5">
                            Experience superior craftsmanship and classic styles of our exclusive Nike collection.
                        </p>
                        <Link to="/men" className="btn btn-dark btn-lg rounded-pill px-5 shadow">
                            Shop Now
                        </Link>
                    </div>
                    <div className="col-lg-6 text-center">
                        <div className="hero-img-wrapper overflow-hidden">
                            <img
                                src={images[currentIndex]}
                                alt={`Slide ${currentIndex + 1}`}
                                className="img-fluid rounded-3"
                                style={{ maxHeight: 400, objectFit: 'cover' }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Products */}
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
                                    <Link to={`/product/${product.id}`} className="btn btn-outline-secondary w-100 mt-2">
                                        View Details
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Info Section */}
            <section className="container custom-container pb-5">
                <div className="row align-items-center bg-light rounded-4 shadow-sm p-4">
                    <div className="col-md-8">
                        <h3 className="fw-bold mb-2">Why Shop at Nike Online Store?</h3>
                        <p className="mb-0 text-secondary">
                            Enjoy the best collection of Nike footwear, with swift delivery and exclusive online offers. Stand out with the latest designs and unparalleled comfort.
                        </p>
                    </div>
                    <div className="col-md-4 text-md-end text-center mt-3 mt-md-0">
                        <a href="#" className="btn btn-dark rounded-pill px-4">
                            Learn More
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Homepage;
