import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import { motion, AnimatePresence } from "framer-motion";
import { Heart } from "lucide-react";

const categories = [
    { label: "All", value: "all" },
    { label: "Jordan", value: "jordan" },
    { label: "Lifestyle", value: "lifestyle" },
    { label: "Running", value: "running" },
    { label: "Training & Gym", value: "training" },
];

const Men = () => {
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [cart, setCart] = useState([]);
    const [wishlist, setWishlist] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [allMenProducts, setAllMenProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
        const savedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
        setCart(savedCart);
        setWishlist(savedWishlist);
    }, []);

    useEffect(() => {
        fetch("/products.json")
            .then((response) => response.json())
            .then((data) => {
                setAllMenProducts(data.menProducts);
                setFilteredProducts(data.menProducts);
            })
            .catch((error) => console.error("Error fetching men products:", error))
            .finally(() => setLoading(false));
    }, []);

    useEffect(() => {
        let products = allMenProducts;
        if (selectedCategory !== "all") {
            products = products.filter((p) => p.category === selectedCategory);
        }
        if (searchTerm.trim()) {
            products = products.filter((p) =>
                p.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }
        setFilteredProducts(products);
    }, [selectedCategory, searchTerm, allMenProducts]);

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

    return (
        <div className="min-vh-100 bg-light" style={{ fontFamily: "'Garamond', serif" }}>
            <Navbar cartCount={cart.length} />
            <div className="container py-5">
                <h1 className="display-4 fw-bold mb-4 text-primary">Men's Collection</h1>
                <p className="lead text-secondary mb-4">
                    Explore the latest Nike shoes and apparel for men. Comfort, performance, and style — just for you.
                </p>

                {/* 🔍 Search + Category Filter */}
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

                {/* 🌀 Loading State */}
                {loading ? (
                    <div className="text-center py-5">
                        <div className="spinner-border text-primary" style={{ width: "4rem", height: "4rem" }}></div>
                        <p className="mt-3 text-muted">Loading products...</p>
                    </div>
                ) : (
                    <div className="row">
                        <AnimatePresence>
                            {filteredProducts.map((product) => (
                                <motion.div
                                    key={product.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="col-md-4 col-lg-3 mb-4"
                                >
                                    <motion.div
                                        whileHover={{ y: -5, scale: 1.02 }}
                                        className="card h-100 shadow-sm border-0 position-relative"
                                    >
                                        {/* ❤️ Wishlist Button */}
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

                                        {/* 🖼️ Product Image */}
                                        <img
                                            src={product.img}
                                            alt={product.name}
                                            className="card-img-top p-3"
                                            style={{ height: 300, objectFit: "contain", cursor: "pointer" }}
                                            onClick={() => handleImageClick(product.id)}
                                        />

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
                        </AnimatePresence>

                        {/* 🚫 Empty State */}
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

export default Men;