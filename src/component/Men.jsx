import React, { useState } from 'react';
import Navbar from './Navbar';

// Existing imports for product images
import men1 from '../assets/men_shoes/men1.png';
import Jordan1 from '../assets/men_shoes/Jordan/Jordan1.png';
import Jordan2 from '../assets/men_shoes/Jordan/Jordan2.png';
import men4 from '../assets/men_shoes/men4.png';
import Jordan3 from '../assets/men_shoes/Jordan/Jordan3.png';
import men6 from '../assets/men_shoes/men6.png';
import men7 from '../assets/men_shoes/men7.png';
import men8 from '../assets/Men_shoes/men8.png';

// Lifestyle images
import ls1 from '../assets/Men_shoes/lifestyle/ls1.png';
import ls2 from '../assets/Men_shoes/lifestyle/ls2.png';
import ls3 from '../assets/Men_shoes/lifestyle/ls3.png';
import ls4 from '../assets/Men_shoes/lifestyle/ls4.png';
import ls5 from '../assets/Men_shoes/lifestyle/ls5.png';

// Running images
import running1 from '../assets/Men_shoes/Running/AIR-ZOOM-PEGASUS-41.png';
import running2 from '../assets/Men_shoes/Running/NIKE-AIR-MAX-PLUS.png';
import running3 from '../assets/Men_shoes/Running/ZOOMX-VAPORFLY-NEXT-4.png';

// Training & Gym images
import gym1 from '../assets/Men_shoes/Training & Gym/LEBRON-TR-1.png';
import gym2 from '../assets/Men_shoes/Training & Gym/M-NIKE-MC-TRAINER-3.png';
import gym3 from '../assets/Men_shoes/Training & Gym/M-NIKE-PROMINA.png';

const categories = [
    { label: 'All', value: 'all' },
    { label: 'Jordan', value: 'jordan' },
    { label: 'Lifestyle', value: 'lifestyle' },
    { label: 'Running', value: 'running' },
    { label: 'Training & Gym', value: 'training' },
];

const products = [
    // Jordan
    {
        img: Jordan1,
        name: 'Jordan 1 Low G',
        color: 'White/Gum',
        price: '$16,000',
        category: 'jordan',
    },
    {
        img: Jordan2,
        name: 'Air Jordan 1 Low OG',
        color: 'Black/Grey/White',
        price: '$18,500',
        category: 'jordan',
    },
    {
        img: Jordan3,
        name: 'Air Jordan 1 High OG UNC',
        color: 'University Blue/White/Navy',
        price: '$22,000',
        category: 'jordan',
    },
    // Lifestyle
    {
        img: ls1,
        name: 'Nike Air Max Excee',
        color: 'White/Black',
        price: '$14,000',
        category: 'lifestyle',
    },
    {
        img: ls2,
        name: 'Jordan Max Aura 5',
        color: 'White/Black',
        price: '$15,500',
        category: 'lifestyle',
    },
    {
        img: ls3,
        name: 'Nike Shox TL',
        color: 'Olive/Yellow',
        price: '$18,000',
        category: 'lifestyle',
    },
    {
        img: ls4,
        name: 'Nike Zoom Vomero 5',
        color: 'Yellow',
        price: '$16,800',
        category: 'lifestyle',
    },
    {
        img: ls5,
        name: 'Nike Shox R4',
        color: 'Grey/Orange/Black',
        price: '$17,500',
        category: 'lifestyle',
    },
    // Running
    {
        img: running1,
        name: 'Nike Air Zoom Pegasus 41',
        color: 'White/Grey',
        price: '$13,000',
        category: 'running',
    },
    {
        img: running2,
        name: 'Nike Air Max Plus',
        color: 'White/Black',
        price: '$17,200',
        category: 'running',
    },
    {
        img: running3,
        name: 'Nike ZoomX Vaporfly Next% 4',
        color: 'Black/Yellow',
        price: '$21,000',
        category: 'running',
    },
    // Training & Gym
    {
        img: gym1,
        name: 'LeBron TR 1',
        color: 'White/Black',
        price: '$14,500',
        category: 'training',
    },
    {
        img: gym2,
        name: 'Nike MC Trainer 3',
        color: 'White/Black',
        price: '$12,800',
        category: 'training',
    },
    {
        img: gym3,
        name: 'Nike Promina',
        color: 'White/Yellow',
        price: '$13,200',
        category: 'training',
    },
    // Other (previously Nike Shoes, now only in All)
    {
        img: men1,
        name: 'Nike Air Zoom Structure 25',
        color: 'Blue/White',
        price: '$15,500',
        category: 'all',
    },
    {
        img: men4,
        name: 'Nike Premier III',
        color: 'Metallic Silver/Black',
        price: '$13,500',
        category: 'all',
    },
    {
        img: men6,
        name: 'Nike Premier III FG',
        color: 'Silver/Black/Volt',
        price: '$13,500',
        category: 'all',
    },
    {
        img: men7,
        name: 'Nike Air Max Plus',
        color: 'White/Purple/Black',
        price: '$17,200',
        category: 'all',
    },
    {
        img: men8,
        name: 'Nike Air Max black',
        color: 'Silver/Black',
        price: '$19,200',
        category: 'all',
    },
];

const Men = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [cart, setCart] = useState([]); // State for cart items

    const filteredProducts =
        selectedCategory === 'all'
            ? products
            : products.filter((p) => p.category === selectedCategory);

    const handleAddToCart = (product) => {
        setCart((prevCart) => [...prevCart, product]); // Add product to cart
        alert(`${product.name} has been added to your cart!`); // Alert message
    };

    return (
        <div className="min-vh-100 bg-light" style={{ fontFamily: "'Inter', sans-serif" }}>
            <Navbar cartCount={cart.length} /> {/* Pass cart count to Navbar */}
            <div className="container py-5">
                <h1 className="display-4 fw-bold mb-4 text-primary">Men's Collection</h1>
                <p className="lead text-secondary">
                    Explore the latest Nike shoes and apparel for men. Comfort, performance, and style—just for you.
                </p>
                {/* Category Selection */}
                <div className="mb-4 d-flex gap-3 flex-wrap">
                    {categories.map((cat) => (
                        <button
                            key={cat.value}
                            className={`btn ${selectedCategory === cat.value ? 'btn-primary' : 'btn-outline-primary'}`}
                            onClick={() => setSelectedCategory(cat.value)}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>
                {/* Product Grid */}
                <div className="row">
                    {filteredProducts.map((product, idx) => (
                        <div className="col-md-4 col-lg-3 mb-4" key={idx}>
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
                                    <p className="card-text fw-bold text-black">{product.price}</p>
                                    <button
                                        className="btn btn-primary"
                                        onClick={() => handleAddToCart(product)} // Add to cart button
                                    >
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                    {filteredProducts.length === 0 && (
                        <div className="col-12 text-center text-muted py-5">
                            No products found in this category.
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Men;
