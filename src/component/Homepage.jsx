import React from 'react';
import Navbar from './Navbar';
import './Homepage.css';

import airMaxOne from '../assets/air max one.jpeg';
import airMaxLtd from '../assets/air max ltd.webp';
import nikeAirBlue from '../assets/nike air blue.webp';
import airForce1 from '../assets/air force 1 and white and blue.avif';
import sportShoes from '../assets/sport shoes.webp';
import ASICS_Mens from '../assets/ASICS_Mens.avif';
import ASICS_Mens_Nova_Blast from '../assets/ASICS_Mens_Nova_Blast.avif';

const products = [
    {
        img: airMaxOne,
        name: 'Nike Air Max 1',
        color: 'Blue',
        price: '$14,000',
        category: "Men's Shoes",
    },
    {
        img: airMaxLtd,
        name: 'Nike Max LTD 3',
        color: 'White and Black',
        price: '$16,000',
        category: "Men's Shoes",
    },
    {
        img: nikeAirBlue,
        name: 'Nike Air Blue',
        color: 'Blue',
        price: '$19,000',
        category: "Men's Shoes",
    },
    {
        img: airForce1,
        name: 'Nike Air Force 1',
        color: 'White and Blue',
        price: '$20,000',
        category: "Men's Shoes",
    },
    {
        img: sportShoes,
        name: 'Nike Air Sport Shoes LTD',
        color: 'Black Matte',
        price: '$14,000',
        category: "Men's Shoes",
    },
    {
        img: ASICS_Mens_Nova_Blast,
        name: 'ASICS Mens Nova Blast 4 Cool Grey/Blue Expanse Running Shoes',
        color: 'Grey',
        price: '$11,199',
        category: "Men's Shoes",
    },
];

const Homepage = () => (
    <div className="min-vh-100 bg-light" style={{ fontFamily: "'Inter', sans-serif" }}>
        <Navbar />

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
                    <h1 className="display-2 fw-bold mb-4 lh-1 text-dark">
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
                            src={airMaxOne}
                            alt="Nike Hero"
                            className="hero-img"
                        />
                    </div>
                </div>
            </div>
        </section>

        {/* Product Cards Grid - 3 cards per row, full image show */}
        <section className="container custom-container pb-5">
            <h2 className="fw-bold mb-4 text-center text-uppercase">Featured Products</h2>
            <div className="image row g-4 justify-content-center">
                {products.map((product, idx) => (
                    <div className="col-12 col-md-4" key={idx}>
                        <div className="card h-100 border-0 shadow rounded-4 bg-white">
                            <div
                                style={{
                                    width: '100%',
                                    height: 300,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    background: '#f8f9fa',
                                    borderRadius: '16px 16px 0 0',
                                    overflow: 'hidden' // Ensures image stays within rounded corners
                                }}
                            >
                                <img
                                    src={product.img}
                                    className="card-img-top product-img-hover"
                                    alt={product.name}
                                    style={{
                                        maxWidth: '100%',
                                        maxHeight: '100%',
                                        objectFit: 'contain',
                                        borderRadius: '16px 16px 0 0'
                                    }}
                                />
                            </div>
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title fw-bold">{product.name}</h5>
                                <div className="mb-2 text-muted small">{product.category}</div>
                                <div className="fw-semibold fs-5 text-primary mb-1">{product.price}</div>
                                <div className="text-secondary mb-2">Color: {product.color}</div>
                                <button className="btn btn-outline-primary btn-sm rounded-pill mt-auto">
                                    View Details
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

export default Homepage;