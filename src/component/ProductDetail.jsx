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
                // Check in both womenProducts and collectionProducts
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
        return <div>Loading...</div>;
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
                            className="img-fluid"
                            style={{ objectFit: 'contain', maxHeight: 400 }}
                        />
                    </div>
                    <div className="col-md-6">
                        <h5 className="text-secondary">{product.color}</h5>
                        <p className="fw-bold text-black">{product.price}</p>
                        <button className="btn btn-primary" onClick={handleAddToCart}>
                            Add to Cart
                        </button>
                        <Link to="/women" className="btn btn-outline-secondary ms-2">
                            Back to Women's Collection
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
