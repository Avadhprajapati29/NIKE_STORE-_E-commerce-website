import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const categories = [
  { label: 'All', value: 'all' },
  { label: 'Jordan', value: 'jordan' },
  { label: 'Lifestyle', value: 'lifestyle' },
  { label: 'Running', value: 'running' },
  { label: 'Training & Gym', value: 'training' },
];

const Women = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [cart, setCart] = useState([]);
  const [allWomenProducts, setAllWomenProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    fetch('/products.json')
      .then(response => response.json())
      .then(data => {
        setAllWomenProducts(data.womenProducts);
        setFilteredProducts(data.womenProducts); // Initially show all women's products
      })
      .catch(error => console.error('Error fetching women products:', error));
  }, []);

  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredProducts(allWomenProducts);
    } else {
      setFilteredProducts(allWomenProducts.filter((p) => p.category === selectedCategory));
    }
  }, [selectedCategory, allWomenProducts]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
    alert(`${product.name} has been added to your cart!`);
  };

  return (
    <div className="min-vh-100 bg-light" style={{ fontFamily: "'Garamond', serif" }}>
      <Navbar cartCount={cart.length} />
      <div className="container py-5">
        <h1 className="display-4 fw-bold mb-4 text-primary">Women's Collection</h1>
        <p className="lead text-secondary">
          Discover the latest Nike shoes and apparel for women. Comfort, performance, and style—just for you.
        </p>
        {/* Category Selection */}
        <div className="mb-4 d-flex gap-3 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat.value}
              className={`btn ${selectedCategory === cat.value ? 'btn-primary' : 'btn-outline-primary'}`}
              onClick={() => setSelectedCategory(cat.value)}
            >
              {cat.label}
            </button>
          ))}
        </div>
        {/* Product Grid */}
        <div className="row">
          {filteredProducts.map((product) => (
            <div className="col-md-4 col-lg-3 mb-4" key={product.id}>
              <div className="card h-100 shadow-sm border-0">
                <img
                  src={product.img}
                  alt={product.name}
                  className="card-img-top p-3"
                  style={{ height: 320, objectFit: 'contain' }}
                />
                <div className="card-body">
                  <h5 className="card-title fw-semibold">{product.name}</h5>
                  <p className="card-text mb-1 text-secondary">{product.color}</p>
                  <p className="card-text fw-bold text-black">{product.price}</p>
                  <Link to={`/product/${product.id}`} className="btn btn-primary w-100">
                    View Details
                  </Link>
                  <button
                    className="btn btn-primary mt-2 w-100"
                    onClick={() => addToCart(product)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
          {filteredProducts.length === 0 && (
            <div className="col-12 text-center text-muted py-5">
              No products found in this category.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Women;