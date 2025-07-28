import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const Cart = () => {
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
        setCart(savedCart);
        calculateTotal(savedCart);
    }, []);

    const handleRemoveFromCart = (productId) => {
        const updatedCart = cart.filter(item => item.id !== productId);
        setCart(updatedCart);
        calculateTotal(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    const calculateTotal = (cartItems) => {
        const subtotal = cartItems.reduce((acc, item) => acc + Number(item.price), 0);
        const deliveryCharges = 1250; 
        setTotal(subtotal + deliveryCharges);
    };

    return (
        <div className="min-vh-100 bg-light" style={{ fontFamily: "'Garamond', serif" }}>
            <Navbar cartCount={cart.length} />
            <div className="container py-5">
                <h1 className="display-4 fw-bold mb-4 text-primary">Bag</h1>
                {cart.length === 0 ? (
                    <div className="text-center text-muted py-5">
                        Your cart is empty.
                    </div>
                ) : (
                    <div className="row">
                        <div className="col-md-8">
                            {cart.map((product) => (
                                <div className="shadow-sm rounded bg-white d-flex justify-content-between align-items-start border mb-4 p-3" key={product.id}>
                                    <div className="d-flex align-items-center">
                                        <img
                                            src={product.img}
                                            alt={product.name}
                                            className="me-3"
                                            style={{ width: 100, height: 'auto', borderRadius: '5px' }}
                                        />
                                        <div>
                                            <h5 className="fw-semibold">{product.name}</h5>
                                            <p className="mb-1 text-secondary">Shoes</p>
                                            <p className="text-muted">Pure Platinum/Wolf Grey/Cool Grey/Sail</p>
                                            <p className="fw-bold">MRP: ₹ {Number(product.price).toLocaleString()}</p> {/* Ensure price is a number */}
                                        </div>
                                    </div>
                                    <button
                                        className="btn btn-outline-danger"
                                        onClick={() => handleRemoveFromCart(product.id)}
                                    >
                                        Remove
                                    </button>
                                </div>
                            ))}
                        </div>
                        <div className="col-md-4">
                            <h4 className="fw-bold">Summary</h4>
                            <div className="bg-white p-3 shadow-sm rounded">
                                <div className="d-flex justify-content-between">
                                    <span>Subtotal:</span>
                                    <span>₹ {cart.reduce((acc, item) => acc + Number(item.price), 0).toLocaleString()}</span> {/* Ensure price is a number */}
                                </div>
                                <div className="d-flex justify-content-between">
                                    <span>Estimated Delivery & Handling:</span>
                                    <span>₹ 1,250.00</span>
                                </div>
                                <hr />
                                <div className="d-flex justify-content-between fw-bold">
                                    <span>Total:</span>
                                    <span>₹ {total.toLocaleString()}</span>
                                </div>
                                <button className="btn btn-dark w-100 mt-3">Guest Checkout</button>
                                <button className="btn btn-dark w-100 mt-2">Member Checkout</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Cart;
