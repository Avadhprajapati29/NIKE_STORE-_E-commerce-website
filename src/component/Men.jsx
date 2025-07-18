import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const categories = [
    { label: 'All', value: 'all' },
    { label: 'Jordan', value: 'jordan' },
    { label: 'Lifestyle', value: 'lifestyle' },
    { label: 'Running', value: 'running' },
    { label: 'Training & Gym', value: 'training' },
];

const Men = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [cart, setCart] = useState([]);
    const [allMenProducts, setAllMenProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        // Load cart from localStorage
        const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
        setCart(savedCart);
    }, []);

    useEffect(() => {
        fetch('/products.json')
            .then(response => response.json())
            .then(data => {
                setAllMenProducts(data.menProducts);
                setFilteredProducts(data.menProducts); // Initially show all men's products
            })
            .catch(error => console.error('Error fetching men products:', error));
    }, []);

    useEffect(() => {
        if (selectedCategory === 'all') {
            setFilteredProducts(allMenProducts);
        } else {
            setFilteredProducts(allMenProducts.filter((p) => p.category === selectedCategory));
        }
    }, [selectedCategory, allMenProducts]);

    const handleAddToCart = (product) => {
        const updatedCart = [...cart, product];
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart)); // Save to localStorage
        alert(`${product.name} has been added to your cart!`);
    };

    return (
        <div className="min-vh-100 bg-light" style={{ fontFamily: "'Inter', sans-serif" }}>
            <Navbar cartCount={cart.length} />
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
                    {filteredProducts.map((product) => (
                        <div className="col-md-4 col-lg-3 mb-4" key={product.id}>
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
                                    <Link to={`/product/${product.id}`} className="btn btn-primary w-100">
                                        View Details
                                    </Link>
                                    <button
                                        className="btn btn-primary mt-2 w-100"
                                        onClick={() => handleAddToCart(product)}
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
