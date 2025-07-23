import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isHovered, setIsHovered] = useState(false); // State to track hover
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Registered successfully!');
        navigate('/login'); // Redirect to login page after registration
    };

    return (
        <div className="container d-flex justify-content-center align-items-center vh-100" style={{ fontFamily: "'Garamond', serif" }}>
            <div className="card shadow-lg" style={{ width: '400px', borderRadius: '15px', border: '1px solid #e0e0e0' }}>
                <div className="card-body">
                    <h1 className="card-title text-center mb-4" style={{ color: '#333' }}>Register</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                                style={{ borderRadius: '10px' }}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email address</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                style={{ borderRadius: '10px' }}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                style={{ borderRadius: '10px' }}
                            />
                        </div>
                        <button
                            type="submit"
                            className="btn btn-primary w-100"
                            style={{
                                borderRadius: '10px',
                                backgroundColor: isHovered ? '#0056b3' : '#007bff', // Change color on hover
                                border: 'none',
                                transition: 'background-color 0.3s ease' // Transition effect
                            }}
                            onMouseEnter={() => setIsHovered(true)} // Set hover state to true
                            onMouseLeave={() => setIsHovered(false)} // Set hover state to false
                        >
                            Register
                        </button>
                    </form>
                    <div className="mt-3 text-center">
                        <button onClick={() => navigate('/login')} className="btn btn-link" style={{ color: '#007bff', textDecoration: 'underline' }}>Already have an account? Login</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
