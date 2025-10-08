import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { motion } from "framer-motion";

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);
  const navigate = useNavigate();

  // Load wishlist from localStorage
  useEffect(() => {
    const savedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(savedWishlist);
  }, []);

  // Remove product from wishlist
  const removeFromWishlist = (productId) => {
    const updatedWishlist = wishlist.filter((item) => item.id !== productId);
    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };

  // Go to product detail
  const handleProductClick = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="min-vh-100 bg-light" style={{ fontFamily: "'Garamond', serif" }}>
      <Navbar cartCount={0} />

      <section className="container custom-container py-5">
        <h2 className="fw-bold mb-4 text-center text-uppercase">My Wishlist ❤️</h2>

        {wishlist.length === 0 ? (
          <div className="text-center py-5">
            <h5 className="text-secondary">Your wishlist is empty!</h5>
            <Link to="/men" className="btn btn-dark mt-3 rounded-pill px-4">
              Browse Products
            </Link>
          </div>
        ) : (
          <div className="row">
            {wishlist.map((product) => (
              <motion.div
                key={product.id}
                className="col-6 col-md-4 col-lg-3 mb-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <div
                  className="card h-100 shadow-sm border-0 position-relative overflow-hidden"
                  style={{ cursor: "pointer" }}
                  onClick={() => handleProductClick(product.id)}
                >
                  <button
                    className="btn position-absolute top-0 end-0 m-3 p-2 bg-white rounded-circle shadow-sm"
                    onClick={(e) => {
                      e.stopPropagation();
                      removeFromWishlist(product.id);
                    }}
                  >
                    ❌
                  </button>

                  <img
                    src={product.img}
                    alt={product.name}
                    className="card-img-top p-3"
                    style={{ height: 320, objectFit: "contain" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title fw-semibold">{product.name}</h5>
                    <p className="card-text mb-1 text-secondary">{product.color}</p>
                    <p className="card-text mb-1 text-secondary">{product.gender}</p>
                    <p className="card-text fw-bold text-black">{product.price}</p>
                    <Link
                      to={`/product/${product.id}`}
                      className="btn btn-outline-secondary w-100 mt-2"
                      onClick={(e) => e.stopPropagation()}
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
};

export default Wishlist;