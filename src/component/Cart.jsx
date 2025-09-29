import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
    calculateTotal(savedCart);
  }, []);

  // Parse price string to number (removes ₹, comma, space)
  const parsePrice = (price) => {
    if (!price) return 0;
    const cleaned = price.toString().replace(/[₹, ]/g, "");
    const number = parseFloat(cleaned);
    return isNaN(number) ? 0 : number;
  };

  const handleRemoveFromCart = (cartId) => {
    const updatedCart = cart.filter((item) => item.cartId !== cartId);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    calculateTotal(updatedCart);
  };

  const calculateTotal = (cartItems) => {
    const subtotal = cartItems.reduce(
      (acc, item) => acc + parsePrice(item.price || item.originalPrice),
      0
    );
    const deliveryCharges = cartItems.length > 0 ? 1250 : 0;
    setTotal(subtotal + deliveryCharges);
  };

  return (
    <div className="min-vh-100 bg-light" style={{ fontFamily: "'Poppins', sans-serif" }}>
      <Navbar cartCount={cart.length} />

      {/* ✅ Custom CSS inside component */}
      <style>
        {`
          .cart-item:hover {
            transform: scale(1.01);
            transition: all 0.2s ease-in-out;
            border-color: #007bff !important;
          }

          .summary-box {
            top: 90px; /* sticky under navbar */
          }

          .btn {
            transition: all 0.2s ease-in-out;
          }
          .btn:hover {
            opacity: 0.9;
          }
        `}
      </style>

      <div className="container py-5">
        <h1 className="fw-bold mb-4 text-dark">🛒 Your Shopping Bag</h1>

        {cart.length === 0 ? (
          <div className="text-center text-muted py-5">
            <p className="fs-5">Your cart is empty.</p>
            <Link to="/" className="btn btn-dark mt-3 px-4 py-2 rounded-pill">
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="row">
            {/* Cart Items */}
            <div className="col-lg-8 col-12">
              {cart.map((product) => {
                const price = parsePrice(product.price || product.originalPrice);

                return (
                  <div
                    className="cart-item shadow-sm rounded bg-white d-flex justify-content-between align-items-center border mb-4 p-3"
                    key={product.cartId}
                  >
                    <div className="d-flex align-items-center">
                      <img
                        src={product.img || (product.images && product.images[0])}
                        alt={product.name}
                        className="me-3"
                        style={{
                          width: 100,
                          height: "auto",
                          borderRadius: "10px",
                          objectFit: "cover",
                        }}
                      />
                      <div>
                        <h5 className="fw-semibold mb-1">{product.name}</h5>
                        <p className="mb-1 text-secondary small">Shoes</p>
                        <p className="text-muted small mb-1">
                          Size: {product.selectedSize || "N/A"}
                        </p>
                        <p className="fw-bold text-dark mb-0">
                          ₹ {price.toLocaleString()}
                        </p>
                      </div>
                    </div>
                    <button
                      className="btn btn-sm btn-outline-danger rounded-pill"
                      onClick={() => handleRemoveFromCart(product.cartId)}
                    >
                      Remove
                    </button>
                  </div>
                );
              })}
            </div>

            {/* Summary Section */}
            <div className="col-lg-4 col-12">
              <div className="summary-box shadow-sm rounded bg-white border p-4 sticky-top">
                <h4 className="fw-bold mb-3">Order Summary</h4>
                <div className="d-flex justify-content-between mb-2">
                  <span>Subtotal</span>
                  <span>
                    ₹{" "}
                    {cart
                      .reduce((acc, item) => acc + parsePrice(item.price || item.originalPrice), 0)
                      .toLocaleString()}
                  </span>
                </div>
                <div className="d-flex justify-content-between mb-2">
                  <span>Delivery Charges</span>
                  <span>₹ {cart.length > 0 ? "1,250" : "0"}</span>
                </div>
                <hr />
                <div className="d-flex justify-content-between fw-bold fs-5 text-primary">
                  <span>Total</span>
                  <span>₹ {total.toLocaleString()}</span>
                </div>
                <button className="btn btn-dark w-100 mt-4 py-2 rounded-pill">
                  Proceed to Checkout
                </button>
                <Link to="/" className="btn btn-outline-secondary w-100 mt-2 py-2 rounded-pill">
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
