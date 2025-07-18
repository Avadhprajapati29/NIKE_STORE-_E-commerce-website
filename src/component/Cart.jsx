import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const Cart = () => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
        setCart(savedCart);
    }, []);

    const handleRemoveFromCart = (productId) => {
        const updatedCart = cart.filter(item => item.id !== productId);
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart)); // Update localStorage
    };

    return (
        <div className="min-vh-100 bg-light" style={{ fontFamily: "'Inter', sans-serif" }}>
            <Navbar cartCount={cart.length} />
            <div className="container py-5">
                <h1 className="display-4 fw-bold mb-4 text-primary">Your Cart</h1>
                {cart.length === 0 ? (
                    <div className="text-center text-muted py-5">
                        Your cart is empty.
                    </div>
                ) : (
                    <div className="row">
                        {cart.map((product) => (
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
                                        <button
                                            className="btn btn-danger w-100"
                                            onClick={() => handleRemoveFromCart(product.id)}
                                        >
                                            Remove from Cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Cart;
