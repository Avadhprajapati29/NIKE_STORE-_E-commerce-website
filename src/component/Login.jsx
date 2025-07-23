import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // Use useNavigate instead of useHistory

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic here
        alert('Logged in successfully!');
        navigate('/'); // Redirect to homepage after login
    };

    const handleRegisterClick = () => {
        navigate('/register'); // Redirect to register page
    };

    return (
        <div className="container py-5" style={{ fontFamily: "'Garamond', serif" }}>
            <h1 className="display-4 fw-bold mb-4">Login</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
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
                    />
                </div>
                <button type="submit" className="btn btn-dark">Login</button>
            </form>
            <div className="mt-3">
                <button onClick={handleRegisterClick} className="btn btn-link">Register</button>
            </div>
        </div>
    );
};

export default Login;
