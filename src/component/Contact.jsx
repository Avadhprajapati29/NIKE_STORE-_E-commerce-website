import React from 'react';
import Navbar from './Navbar';

const Contact = () => (
  <div className="min-vh-100 bg-light" style={{ fontFamily: "'Helvetica Neue', sans-serif" }}>
    <Navbar />
    <div className="container py-5">
      <h1 className="display-4 fw-bold mb-4 text-primary" style={{ textAlign: 'center' }}>Contact Us</h1>
      <p className="lead text-secondary mb-4 text-center">
        Have questions or need support? Reach out to our Nike Store team!
      </p>

      {/* Contact Form */}
      <form className="bg-white p-4 rounded shadow mx-auto" style={{ maxWidth: '600px' }}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Your Name</label>
          <input type="text" className="form-control" id="name" placeholder="Enter your name" required />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Your Email</label>
          <input type="email" className="form-control" id="email" placeholder="Enter your email" required />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">Message</label>
          <textarea className="form-control" id="message" rows="4" placeholder="Write your message" required></textarea>
        </div>
        <button type="submit" className="btn btn-primary w-100">Send Message</button>
      </form>
      {/* End of Contact Form */}
    </div>
  </div>
);

export default Contact;
