import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { motion, AnimatePresence } from "framer-motion";
import { Heart } from "lucide-react";

const Collections = () => {
  const [collections, setCollections] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [loading, setLoading] = useState(true);

  // 🧩 Fetch collection products
  useEffect(() => {
    fetch("/products.json")
      .then((response) => response.json())
      .then((data) => setCollections(data.collectionProducts || []))
      .catch((error) =>
        console.error("Error fetching collection products:", error)
      )
      .finally(() => setLoading(false));
  }, []);

  // ❤️ Load wishlist from localStorage
  useEffect(() => {
    const savedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(savedWishlist);
  }, []);

  // ❤️ Toggle wishlist
  const toggleWishlist = (product) => {
    const updatedWishlist = wishlist.some((item) => item.id === product.id)
      ? wishlist.filter((item) => item.id !== product.id)
      : [...wishlist, product];
    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };

  return (
    <div
      className="min-vh-100 bg-light"
      style={{ fontFamily: "'Garamond', serif" }}
    >
      <Navbar />
      <section className="container custom-container py-5">
        <div className="text-center mb-5">
          <h1 className="fw-bold display-4 mb-2 text-primary">Nike Collections</h1>
          <p className="lead text-secondary">
            Browse exclusive Nike collections and limited edition releases.
            Find your next favorite pair.
          </p>
        </div>

        {/* 🌀 Loading Spinner */}
        {loading ? (
          <div className="text-center py-5">
            <div
              className="spinner-border text-primary"
              style={{ width: "4rem", height: "4rem" }}
            ></div>
            <p className="mt-3 text-muted">Loading collections...</p>
          </div>
        ) : (
          <div className="row g-4 justify-content-center">
            <AnimatePresence>
              {collections.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="col-12 col-sm-6 col-lg-4"
                >
                  <motion.div
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="card h-100 border-0 shadow rounded-4 bg-white position-relative"
                  >
                    {/* ❤️ Wishlist Button */}
                    <button
                      className="btn position-absolute top-0 end-0 m-3 p-2 bg-white rounded-circle shadow-sm"
                      onClick={() => toggleWishlist(item)}
                    >
                      <Heart
                        size={20}
                        fill={
                          wishlist.some((w) => w.id === item.id)
                            ? "red"
                            : "white"
                        }
                        color={
                          wishlist.some((w) => w.id === item.id)
                            ? "red"
                            : "gray"
                        }
                      />
                    </button>

                    {/* 🖼️ Product Image */}
                    <div
                      style={{
                        width: "100%",
                        height: 300,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: "#f8f9fa",
                        borderRadius: "16px 16px 0 0",
                        overflow: "hidden",
                      }}
                    >
                      <img
                        src={item.img}
                        alt={item.name}
                        className="card-img-top"
                        style={{
                          maxWidth: "100%",
                          maxHeight: "100%",
                          objectFit: "contain",
                          borderRadius: "16px 16px 0 0",
                        }}
                      />
                    </div>

                    {/* 📝 Product Info */}
                    <div className="card-body d-flex flex-column">
                      <h5 className="card-title fw-bold">{item.name}</h5>
                      <p className="card-text text-secondary mb-2">
                        {item.desc}
                      </p>
                      <div className="fw-semibold fs-5 text-black mb-2">
                        {item.price}
                      </div>
                      <Link
                        to={`/product/${item.id}`}
                        className="btn btn-outline-primary btn-sm rounded-pill mt-auto"
                      >
                        View Details
                      </Link>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </AnimatePresence>

            {/* 🚫 Empty State */}
            {collections.length === 0 && (
              <div className="col-12 text-center text-muted py-5">
                No collection products found.
              </div>
            )}
          </div>
        )}
      </section>
    </div>
  );
};

export default Collections;
