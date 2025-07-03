import React from 'react';
import Navbar from './Navbar';

const Collection = () => (
  <div className="min-vh-100 bg-light" style={{ fontFamily: "'Inter', sans-serif" }}>
    <Navbar />
    <div className="container py-5">
      <h1 className="display-4 fw-bold mb-4 text-primary">Nike Collections</h1>
      <p className="lead text-secondary">
        Browse exclusive Nike collections and limited edition releases. Find your next favorite pair.
      </p>
    </div>
  </div>
);

export default Collection;