import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from './Navbar';

const ProductDetail = ({ cart, setCart }) => {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetch('/products.json')
            .then(res => res.json())
            .then(data => {
                const foundProduct =
                    data.homepageProducts.find(p => p.id === productId) ||
                    data.womenProducts.find(p => p.id === productId) ||
                    data.menProducts.find(p => p.id === productId) ||
                    data.collectionProducts.find(p => p.id === productId);
                setProduct(foundProduct);
            })
            .catch(err => console.error('Error loading product:', err));
    }, [productId]);

    const handleAddToCart = () => {
        setCart(prev => [...prev, product]);
        alert(`${product.name} has been added to your cart!`);
    };

    if (!product) {
        return <div className="text-center mt-5 fs-4">Loading product details...</div>;
    }

    return (
        <div style={{ backgroundColor: '#f0f4f8', minHeight: '100vh' }}>
            <Navbar cartCount={cart.length} />

            <div className="container mt-5 mb-5">
                <div className="row justify-content-center">
                    <div className="col-md-10">
                        <div className="card shadow-lg border-0 rounded-4">
                            <div className="row g-0">
                                {/* Image Section */}
                                <div className="col-md-6 d-flex align-items-center p-4 bg-white rounded-start">
                                    <img
                                        src={product.img}
                                        alt={product.name}
                                        className="img-fluid rounded-4 w-100"
                                        style={{ maxHeight: '400px', objectFit: 'contain' }}
                                    />
                                </div>

                                {/* Details Section */}
                                <div className="col-md-6 p-4">
                                    <h3 className="fw-bold text-dark mb-2">{product.name}</h3>
                                    <p className="text-muted mb-2">{product.color}</p>
                                    <h4 className="text-primary fw-semibold mb-3">{product.price}</h4>
                                    <p className="text-muted" style={{ minHeight: '80px' }}>
                                        {product.desc || 'No description available for this product.'}
                                    </p>

                                    <button
                                        className="btn btn-dark w-100 py-2 mb-3"
                                        onClick={handleAddToCart}
                                    >
                                        Add to Cart
                                    </button>

                                    <div className="d-flex justify-content-between">
                                        <Link to="/" className="btn btn-outline-secondary rounded-pill px-4">
                                            ← Home
                                        </Link>
                                        <Link to="/men" className="btn btn-outline-secondary rounded-pill px-4">
                                            men’s Collection
                                        </Link>
                                        <Link to="/women" className="btn btn-outline-secondary rounded-pill px-4">
                                            Women’s Collection
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Extra Details Section */}
                        <div className="card mt-4 border-0 shadow-lg rounded-4">
                            <div className="card-body">
                                <h5 className="fw-semibold mb-3">Product Specifications</h5>
                                <div className="row">
                                    <div className="col-sm-6 mb-2"><strong>Category:</strong> {product.category}</div>
                                    <div className="col-sm-6 mb-2"><strong>Gender:</strong> {product.gender}</div>
                                    <div className="col-sm-6 mb-2"><strong>Color:</strong> {product.color}</div>
                                    <div className="col-sm-6 mb-2"><strong>Size:</strong> {product.size}</div>
                                    <div className="col-sm-6 mb-2"><strong>Material:</strong> {product.material || "Not specified"}</div>
                                    <div className="col-sm-6 mb-2"><strong>SKU:</strong> {product.sku || "Not available"}</div>
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
