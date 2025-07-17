import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from './Navbar';

const ProductDetail = ({ cart, setCart }) => {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetch('/products.json')
            .then(response => response.json())
            .then(data => {
                const foundProduct = data.womenProducts.find(p => p.id === productId) ||
                    data.menProducts.find(p => p.id === productId) ||
                    data.collectionProducts.find(p => p.id === productId);
                setProduct(foundProduct);
            })
            .catch(error => console.error('Error fetching product details:', error));
    }, [productId]);

    const handleAddToCart = () => {
        setCart((prevCart) => [...prevCart, product]);
        alert(`${product.name} has been added to your cart!`);
    };

    if (!product) {
        return <div style={{ textAlign: 'center', fontSize: '1.5rem', marginTop: '50px' }}>Loading...</div>;
    }

    return (
        <div className="min-vh-100 bg-light" style={{ fontFamily: "'Inter', sans-serif" }}>
            <Navbar cartCount={cart.length} />
            <div className="container py-5">
                <h1 className="display-4 fw-bold mb-4 text-primary">{product.name}</h1>
                <div className="row">
                    <div className="col-md-6">
                        <img
                            src={product.img}
                            alt={product.name}
                            style={{
                                objectFit: 'contain',
                                maxHeight: '400px',
                                border: '1px solid #ddd',
                                borderRadius: '5px',
                                width: '100%' // Ensure the image is responsive
                            }}
                        />
                    </div>
                    <div className="col-md-6">
                        <h5 className="text-secondary">{product.color}</h5>
                        <p className="fw-bold text-black">{product.price}</p>
                        <p className="text-secondary">{product.gender}</p>
                        <p className="text-muted">{product.desc || "No description available."}</p>
                        <button
                            className="btn btn-primary"
                            onClick={handleAddToCart}
                            style={{
                                transition: 'background-color 0.3s, color 0.3s'
                            }}
                            onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#0056b3'}
                            onMouseOut={(e) => e.currentTarget.style.backgroundColor = ''}
                        >
                            Add to Cart
                        </button>
                        <div className="mt-3">
                            <Link to="/" className="btn btn-outline-secondary me-2">
                                Back to Homepage
                            </Link>
                            <Link to="/women" className="btn btn-outline-secondary">
                                Back to Women's Collection
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="mt-4">
                    <h5 className="fw-bold">Product Details</h5>
                    <ul className="list-unstyled">
                        <li><strong>Category:</strong> {product.category}</li>
                        <li><strong>Gender:</strong> {product.gender}</li>
                        <li><strong>Color:</strong> {product.color}</li>
                        <li><strong>Price:</strong> {product.price}</li>
                        <li><strong>Material:</strong> {product.material || "Not specified"}</li>
                        <li><strong>Size:</strong> {product.size}</li>
                        <li><strong>SKU:</strong> {product.sku || "Not available"}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;