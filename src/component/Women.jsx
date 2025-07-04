import React from 'react';
import Navbar from './Navbar';

import women1 from '../assets/women_shoes/women1.png';
import women2 from '../assets/women_shoes/women2.png';
import women3 from '../assets/women_shoes/women3.png';
import women4 from '../assets/women_shoes/women4.png';
import women5 from '../assets/women_shoes/women5.png';
import women6 from '../assets/women_shoes/women6.png';
import women7 from '../assets/women_shoes/women7.png';

const products = [
  {
    img: women1,
    name: 'Nike Zoom Vomero 5',
    color: 'White/Pink/Silver',
    price: '$13,000',
  },
  {
    img: women2,
    name: 'Nike Free Metcon 5',
    color: 'White/Pink',
    price: '$12,000',
  },
  {
    img: women3,
    name: 'Nike Dunk Low',
    color: 'Pink/Beige/Navy',
    price: '$14,500',
  },
  {
    img: women4,
    name: 'Nike Air Zoom Pegasus 40',
    color: 'Pink/Maroon/Green',
    price: '$15,000',
  },
  {
    img: women5,
    name: 'Nike Air Max Alpha Trainer 5',
    color: 'Black/White',
    price: '$11,500',
  },
  {
    img: women6,
    name: 'Nike Air Force 1',
    color: 'White/Peach',
    price: '$13,500',
  },
  {
    img: women7,
    name: 'Air Jordan 1 Mid',
    color: 'Triple White',
    price: '$16,000',
  },
];

const Women = () => (
  <div className="min-vh-100 bg-light" style={{ fontFamily: "'Inter', sans-serif" }}>
    <Navbar />
    <div className="container py-5">
      <h1 className="display-4 fw-bold mb-4 text-primary">Women's Collection</h1>
      <p className="lead text-secondary">
        Discover the latest Nike shoes and apparel for women. Designed for comfort, style, and performance.
      </p>
      <div className="row">
        {products.map((product, idx) => (
          <div className="col-md-4 col-lg-3 mb-4" key={idx}>
            <div className="card h-100 shadow-sm border-0">
              <img src={product.img} alt={product.name} className="card-img-top p-3" style={{ height: 320, objectFit: 'contain' }} />
              <div className="card-body">
                <h5 className="card-title fw-semibold">{product.name}</h5>
                <p className="card-text mb-1 text-secondary">{product.color}</p>
                <p className="card-text fw-bold text-primary">{product.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Women;