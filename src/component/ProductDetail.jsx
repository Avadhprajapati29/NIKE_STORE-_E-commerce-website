import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate, useLocation } from "react-router-dom";
import Navbar from "./Navbar";

const ProductDetail = ({ cart, setCart }) => {
    const { productId } = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from || "/";

    const [product, setProduct] = useState(null);
    const [selectedImage, setSelectedImage] = useState("");
    const [selectedSize, setSelectedSize] = useState("");

    useEffect(() => {
        fetch("/products.json")
            .then((res) => res.json())
            .then((data) => {
                const foundProduct =
                    data.homepageProducts.find((p) => p.id === productId) ||
                    data.womenProducts.find((p) => p.id === productId) ||
                    data.menProducts.find((p) => p.id === productId) ||
                    data.kidsProducts.find((p) => p.id === productId) ||
                    data.collectionProducts.find((p) => p.id === productId);

                setProduct(foundProduct);
                if (foundProduct?.images?.length > 0) {
                    setSelectedImage(foundProduct.images[0]);
                }
            })
            .catch((err) => console.error("Error loading product:", err));
    }, [productId]);

    const handleAddToCart = () => {
        if (!selectedSize) {
            alert("⚠️ Please select a size before adding to cart!");
            return;
        }

        const cartItem = {
            ...product,
            selectedSize,
            cartId: product.id + "-" + selectedSize + "-" + Date.now(),
        };

        const updatedCart = [...(cart || []), cartItem];
        if (setCart) setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        alert(`✅ ${product.name} (Size: ${selectedSize}) has been added to your cart!`);
    };

    if (!product) {
        return <div className="text-center mt-5 fs-4">Loading product details...</div>;
    }

    // ✅ Corrected: product.size instead of product.sizes
    const sizes = Array.isArray(product.size) && product.size.length > 0 ? product.size : [];

    return (
        <div style={{ minHeight: "100vh", position: "relative", overflow: "hidden" }}>
            {/* 🔥 Blurred Background */}
            <div
                style={{
                    backgroundImage: `url(${selectedImage || product.img})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    filter: "blur(30px)",
                    transform: "scale(1.1)",
                    position: "absolute",
                    inset: 0,
                    zIndex: 0,
                }}
            ></div>
            <div
                style={{
                    backgroundColor: "rgba(0,0,0,0.6)",
                    position: "absolute",
                    inset: 0,
                    zIndex: 1,
                }}
            ></div>

            <div style={{ position: "relative", zIndex: 2 }}>
                <Navbar cartCount={cart ? cart.length : 0} />

                <div className="container d-flex justify-content-center align-items-center py-5">
                    <div
                        className="card border-0 shadow-lg rounded-4 p-4"
                        style={{
                            maxWidth: "1100px",
                            background: "rgba(255, 255, 255, 0.15)",
                            backdropFilter: "blur(15px)",
                            color: "#fff",
                        }}
                    >
                        <div className="row g-0">
                            {/* LEFT SIDE - Images */}
                            <div className="col-md-6 d-flex flex-column align-items-center p-4">
                                <img
                                    src={selectedImage || product.img}
                                    alt={product.name}
                                    className="img-fluid rounded-4"
                                    style={{
                                        maxHeight: "450px",
                                        objectFit: "contain",
                                        transition: "transform 0.3s",
                                    }}
                                />
                                {product.images?.length > 1 && (
                                    <div className="d-flex gap-2 mt-3 flex-wrap justify-content-center">
                                        {product.images.map((img, index) => (
                                            <img
                                                key={index}
                                                src={img}
                                                alt={`view-${index}`}
                                                className={`rounded shadow-sm ${img === selectedImage ? "border border-warning" : ""}`}
                                                style={{
                                                    width: "70px",
                                                    height: "70px",
                                                    objectFit: "cover",
                                                    cursor: "pointer",
                                                }}
                                                onClick={() => setSelectedImage(img)}
                                            />
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* RIGHT SIDE - Details */}
                            <div className="col-md-6 p-4 d-flex flex-column justify-content-center">
                                <h2 className="fw-bold mb-2">{product.name}</h2>
                                <p className="text-light">{product.color}</p>
                                <h3 className="text-warning fw-bold mb-3">{product.price}</h3>
                                <p className="mb-4">
                                    {product.desc || "No description available for this product."}
                                </p>

                                {/* ✅ Sizes */}
                                {sizes.length > 0 && (
                                    <div className="mb-3">
                                        <h6 className="fw-bold">Select Size:</h6>
                                        <div className="d-flex flex-wrap gap-2">
                                            {sizes.map((size, index) => (
                                                <button
                                                    key={index}
                                                    className={`btn ${selectedSize === size
                                                        ? "btn-warning text-dark fw-bold"
                                                        : "btn-outline-light"
                                                        } rounded-pill px-3`}
                                                    onClick={() => setSelectedSize(size)}
                                                >
                                                    {size}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Specifications */}
                                <div
                                    className="card border-0 shadow-sm rounded-3 p-3 mb-3"
                                    style={{
                                        background: "rgba(255, 255, 255, 0.12)",
                                        backdropFilter: "blur(10px)",
                                        color: "#fff",
                                    }}
                                >
                                    <h5 className="fw-bold mb-3">Product Specifications</h5>
                                    <div className="row">
                                        <div className="col-sm-6 mb-2">
                                            <strong>Category:</strong> {product.category}
                                        </div>
                                        <div className="col-sm-6 mb-2">
                                            <strong>Gender:</strong> {product.gender}
                                        </div>
                                        <div className="col-sm-6 mb-2">
                                            <strong>Color:</strong> {product.color}
                                        </div>
                                        <div className="col-sm-6 mb-2">
                                            <strong>Material:</strong> {product.material || "Not specified"}
                                        </div>
                                        <div className="col-sm-6 mb-2">
                                            <strong>SKU:</strong> {product.sku || "Not available"}
                                        </div>
                                    </div>
                                </div>

                                {/* Buttons */}
                                <button
                                    className="btn btn-warning w-100 fw-bold py-2 mb-3"
                                    onClick={handleAddToCart}
                                    style={{ borderRadius: "12px", transition: "0.3s" }}
                                >
                                    🛒 Add to Cart
                                </button>
                                <div className="d-flex justify-content-between mt-2">
                                    <button
                                        className="btn btn-outline-light rounded-pill px-4"
                                        onClick={() => navigate(from)}
                                    >
                                        ← Back
                                    </button>
                                    <Link
                                        to="/cart"
                                        className="btn btn-outline-warning rounded-pill px-4"
                                    >
                                        🛍 Go to Cart
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
