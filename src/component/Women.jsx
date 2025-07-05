import React, { useState } from 'react';
import Navbar from './Navbar';


// Example imports for women's products (update these paths and names)
import women2 from '../assets/women_shoes/women2.png';
import women3 from '../assets/women_shoes/women3.png';
import women4 from '../assets/women_shoes/women4.png';
import women5 from '../assets/women_shoes/women5.png';
import women6 from '../assets/women_shoes/women6.png';
import women7 from '../assets/women_shoes/women7.png';
import women8 from '../assets/women_shoes/women8.png';

// Lifestyle images
import wls1 from '../assets/women_shoes/lifestyle/wls1.png';
import wls2 from '../assets/women_shoes/lifestyle/wls2.png';

// Running images
import wrunning1 from '../assets/women_shoes/Running/wrunning1.png';

// Training & Gym images
import wgym1 from '../assets/women_shoes/Training & Gym/wgym1.png';

const categories = [
  { label: 'All', value: 'all' },
  { label: 'Lifestyle', value: 'lifestyle' },
  { label: 'Running', value: 'running' },
  { label: 'Training & Gym', value: 'training' },
];

const products = [
  // Lifestyle
  {
    img: wls1,
    name: 'Nike Air Max Verona',
    color: 'White/Pink',
    price: '$13,000',
    category: 'lifestyle',
  },
  {
    img: wls2,
    name: 'Nike Court Vision Alta',
    color: 'White/Gold',
    price: '$12,500',
    category: 'lifestyle',
  },
  // Running
  {
    img: wrunning1,
    name: 'Nike Air Zoom Pegasus 40',
    color: 'Black/White',
    price: '$14,000',
    category: 'running',
  },
  // Training & Gym
  {
    img: wgym1,
    name: 'Nike Free Metcon 5',
    color: 'Grey/Blue',
    price: '$13,800',
    category: 'training',
  },
  // Other (shown only in All)
  {
    img: wls1,
    name: 'Nike Air Max 270',
    color: 'White/Coral',
    price: '$15,000',
    category: 'all',
  },
  {
    img: women2,
    name: 'Nike Revolution 6',
    color: 'Black/Pink',
    price: '$10,500',
    category: 'all',
  },
  {
    img: women3,
    name: 'Nike Downshifter 12',
    color: 'Grey/White',
    price: '$9,800',
    category: 'all',
  },
  {
    img: women4,
    name: 'Nike Air Force 1 Shadow',
    color: 'White/Blue',
    price: '$16,200',
    category: 'all',
  },
  {
    img: women5,
    name: 'Nike Blazer Low Platform',
    color: 'White/Beige',
    price: '$13,900',
    category: 'all',
  },
  {
    img: women6,
    name: 'Nike Air Max SC',
    color: 'White/Red',
    price: '$12,700',
    category: 'all',
  },
  {
    img: women7,
    name: 'Nike Court Legacy Lift',
    color: 'White/Green',
    price: '$11,600',
    category: 'all',
  },
  {
    img: women8,
    name: 'Nike Air Max INTRLK Lite',
    color: 'White/Black',
    price: '$14,400',
    category: 'all',
  },
];

const Women = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProducts =
    selectedCategory === 'all'
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-vh-100 bg-light" style={{ fontFamily: "'Inter', sans-serif" }}>
      <Navbar />
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
          {filteredProducts.map((product, idx) => (
            <div className="col-md-4 col-lg-3 mb-4" key={idx}>
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
                  <p className="card-text fw-bold text-primary">{product.price}</p>
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