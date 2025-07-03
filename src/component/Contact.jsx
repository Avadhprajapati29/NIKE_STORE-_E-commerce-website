import React from 'react';
import Navbar from './Navbar';

const Contact = () => (
  <div className="min-vh-100 bg-light" style={{ fontFamily: "'Inter', sans-serif" }}>
    <Navbar />
    <div className="container py-5">
      <h1 className="display-4 fw-bold mb-4 text-primary">Contact Us</h1>
      <p className="lead text-secondary">
        Have questions or need support? Reach out to our Nike Store team!
      </p>
    </div>
  </div>
);

export default Contact;