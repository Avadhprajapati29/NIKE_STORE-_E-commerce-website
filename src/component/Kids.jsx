import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const categories = [
  { label: "All", value: "all" },
  { label: "Jordan", value: "jordan" },
  { label: "Lifestyle", value: "lifestyle" },
  { label: "Running", value: "running" },
  { label: "Training & Gym", value: "training" },
];

const Kids = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [allKidsProducts, setAllKidsProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  const location = useLocation();

  // Load cart & wishlist
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const savedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setCart(savedCart);
    setWishlist(savedWishlist);
  }, []);

  // Fetch products
  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => {
        setAllKidsProducts(data.kidsProducts || []);
        setFilteredProducts(data.kidsProducts || []);
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  // Filter products
  useEffect(() => {
    let products = allKidsProducts;
    if (selectedCategory !== "all") {
      products = products.filter((p) => p.category === selectedCategory);
    }
    if (searchTerm.trim()) {
      products = products.filter((p) =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    setFilteredProducts(products);
  }, [selectedCategory, searchTerm, allKidsProducts]);

  const handleImageClick = (productId) => {
    navigate(`/product/${productId}`, { state: { from: location.pathname } });
  };

  const toggleWishlist = (product) => {
    const updatedWishlist = wishlist.some((item) => item.id === product.id)
      ? wishlist.filter((item) => item.id !== product.id)
      : [...wishlist, product];
    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };

  // Scroll animation variant
  const productVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div className="min-vh-100 bg-light" style={{ fontFamily: "'Garamond', serif" }}>
      <Navbar cartCount={cart.length} />
      <div className="container py-5">
        <h1 className="display-4 fw-bold mb-4 text-primary">Kids' Collection</h1>
        <p className="lead text-secondary mb-4">
          Discover the latest Nike shoes and apparel for kids. Comfort, performance, and style — just for your little ones.
        </p>

        {/* Search & Category */}
        <div className="d-flex flex-wrap align-items-center gap-3 mb-4">
          <input
            type="text"
            className="form-control shadow-sm"
            placeholder="Search shoes..."
            style={{ maxWidth: "280px" }}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="d-flex gap-2 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat.value}
                className={`btn ${selectedCategory === cat.value ? "btn-primary" : "btn-outline-primary"}`}
                onClick={() => setSelectedCategory(cat.value)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {loading ? (
          <div className="text-center py-5">
            <div className="spinner-border text-primary" style={{ width: "4rem", height: "4rem" }}></div>
            <p className="mt-3 text-muted">Loading products...</p>
          </div>
        ) : (
          <div className="row">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                className="col-md-4 col-lg-3 mb-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={productVariants}
              >
                <motion.div
                  whileHover={{ y: -5, scale: 1.03 }}
                  className="card h-100 shadow-sm border-0 position-relative"
                >
                  {/* Wishlist */}
                  <button
                    className="btn position-absolute top-0 end-0 m-3 p-2 bg-white rounded-circle shadow-sm"
                    onClick={() => toggleWishlist(product)}
                  >
                    <Heart
                      size={20}
                      fill={wishlist.some((item) => item.id === product.id) ? "red" : "white"}
                      color={wishlist.some((item) => item.id === product.id) ? "red" : "gray"}
                    />
                  </button>

                  {/* Product Image */}
                  <img
                    src={product.img}
                    alt={product.name}
                    className="card-img-top p-3"
                    style={{ height: 300, objectFit: "contain", cursor: "pointer" }}
                    onClick={() => handleImageClick(product.id)}
                  />

                  {/* Info */}
                  <div className="card-body">
                    <h5 className="card-title fw-semibold">{product.name}</h5>
                    <p className="card-text mb-1 text-secondary">{product.color}</p>
                    <p className="card-text fw-bold text-black">{product.price}</p>
                    <Link
                      to={`/product/${product.id}`}
                      state={{ from: location.pathname }}
                      className="btn btn-primary w-100"
                    >
                      View Details
                    </Link>
                  </div>
                </motion.div>
              </motion.div>
            ))}

            {filteredProducts.length === 0 && (
              <div className="col-12 text-center text-muted py-5">
                No products found in this category.
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Kids;
