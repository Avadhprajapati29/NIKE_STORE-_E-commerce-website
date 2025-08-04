import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'; // Optional: Create a CSS file for styling

const Footer = () => {
    return (
        <footer className="bg-dark text-light py-4">
            <div className="container text-center">
                <div className="row">
                    <div className="col-md-4 mb-3">
                        <h5>Quick Links</h5>
                        <ul className="list-unstyled">
                            <li><Link to="/men" className="text-light">Men</Link></li>
                            <li><Link to="/women" className="text-light">Women</Link></li>
                            <li><Link to="/kids" className="text-light">Kids</Link></li>
                            <li><Link to="/about" className="text-light">About Us</Link></li>
                            <li><Link to="/contact" className="text-light">Contact</Link></li>
                        </ul>
                    </div>
                    <div className="col-md-4 mb-3">
                        <h5>Follow Us</h5>
                        <div>
                            <a href="#" className="text-light me-3">Facebook</a>
                            <a href="#" className="text-light me-3">Twitter</a>
                            <a href="#" className="text-light">Instagram</a>
                        </div>
                    </div>
                    <div className="col-md-4 mb-3">
                        <h5>Contact Us</h5>
                        <p>Email: support@nike.com</p>
                        <p>Phone: +1 (800) 123-4567</p>
                    </div>
                </div>
                <div className="mt-4">
                    <p className="mb-0">&copy; {new Date().getFullYear()} Nike, Inc. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
