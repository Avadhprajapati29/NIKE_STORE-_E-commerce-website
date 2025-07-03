import React from 'react';
import Navbar from './Navbar';

const Women = () => (
  <div className="min-vh-100 bg-light" style={{ fontFamily: "'Inter', sans-serif" }}>
    <Navbar />
    <div className="container py-5">
      <h1 className="display-4 fw-bold mb-4 text-primary">Women's Collection</h1>
      <p className="lead text-secondary">
        Discover the latest Nike shoes and apparel for women. Designed for comfort, style, and performance.
      </p>
    </div>
  </div>
);

export default Women;