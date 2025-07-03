import React from 'react';
import Navbar from './Navbar';

import airMaxOne from '../assets/air max one.jpeg';
import airMaxLtd from '../assets/air max ltd.webp';
import nikeAirBlue from '../assets/nike air blue.webp';
import airForce1 from '../assets/air force 1 and white and blue.avif';
import sportShoes from '../assets/sport shoes.webp';
import ASICS_Mens_Nova_Blast from '../assets/ASICS_Mens_Nova_Blast.avif';
import jordanLowGrey from '../assets/jordan-low-grey.png';
import airMaxPurple from '../assets/air-max-purple.png';

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
    {
        img: jordanLowGrey,
        name: 'Air Jordan 1 Low OG',
        color: 'Black/Grey/White',
        price: '$18,500',
        category: "Men's Shoes",
    },
    {
        img: airMaxPurple,
        name: 'Nike Air Max Plus',
        color: 'White/Purple/Black',
        price: '$17,200',
        category: "Men's Shoes",
    },
];

const Men = () => (
    <div className="min-vh-100 bg-light" style={{ fontFamily: "'Inter', sans-serif" }}>
        <Navbar />
        <div className="container py-5">
            <h1 className="display-4 fw-bold mb-4 text-primary">Men's Collection</h1>
            <p className="lead text-secondary">
                Explore the latest Nike shoes and apparel for men. Comfort, performance, and style—just for you.
            </p>
            <section className="pb-5">
                <div className="row g-4 justify-content-center">
                    {products.map((product, idx) => (
                        <div className="col-12 col-sm-6 col-md-3" key={idx}>
                            <div className="card h-100 border-0 shadow rounded-4 bg-white">
                                <div style={{ width: '100%', height: 300, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f8f9fa', borderRadius: '16px 16px 0 0' }}>
                                    <img
                                        src={product.img}
                                        className="card-img-top"
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
        </div>
    </div>
);

export default Men;