import React from 'react';
import Navbar from './Navbar';

// Use imported images from your uploads
import men1 from '../assets/men_shoes/men1.png';
import men2 from '../assets/men_shoes/men2.png'; 
import men3 from '../assets/men_shoes/men3.png'; 
import men4 from '../assets/men_shoes/men4.png';
import men5 from '../assets/men_shoes/men5.png';
import men6 from '../assets/men_shoes/men6.png';
import men7 from '../assets/men_shoes/men7.png';
import men8 from '../assets/Men_shoes/men8.png';

const products = [
    {
        img: men1,
        name: 'Nike Air Zoom Structure 25',
        color: 'Blue/White',
        price: '$15,500',
    },
    {
        img: men2,
        name: 'Jordan 1 Low G',
        color: 'White/Gum',
        price: '$16,000',
    },
    {
        img: men3,
        name: 'Air Jordan 1 Low OG',
        color: 'Black/Grey/White',
        price: '$18,500',
    },
    {
        img: men4,
        name: 'Nike Premier III',
        color: 'Metallic Silver/Black',
        price: '$13,500',
    },
    {
        img: men5,
        name: 'Air Jordan 1 High OG UNC',
        color: 'University Blue/White/Navy',
        price: '$22,000',
    },
    {
        img: men6,
        name: 'Nike Premier III FG',
        color: 'Silver/Black/Volt',
        price: '$13,500',
    },
    {
        img: men7,
        name: 'Nike Air Max Plus',
        color: 'White/Purple/Black',
        price: '$17,200',
    },
    {
        img: men8,
        name: 'Nike Air Max black',
        color: 'Silver/Black',
        price: '$19,200',
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
            <div className="row">
                {products.map((product, idx) => (
                    <div className="col-md-4 col-lg-3 mb-4" key={idx}>
                        <div className="card h-100 shadow-sm border-0">
                            <img src={product.img} alt={product.name} className="card-img-top p-3" style={{ height: 320, objectFit: 'contain' }} />
                            <div className="card-body">
                                <h5 className="card-title fw-semibold">{product.name}</h5>
                                <p className="card-text mb-1 text-secondary">{product.color}</p>
                                <p className="card-text fw-bold text-primary">{product.price}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

export default Men;