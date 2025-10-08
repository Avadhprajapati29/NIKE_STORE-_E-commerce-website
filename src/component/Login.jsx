import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Example login: just accept any email/password
        login({ email });
        alert('Logged in successfully!');
        navigate('/'); // Redirect to homepage
    };

    return (
        <div className="login-wrapper">
            <div className="login-box">
                <h2 className="login-title">Sign In</h2>
                <form onSubmit={handleSubmit} className="login-form">
                    <div className="input-group">
                        <label>Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            placeholder="Enter your email"
                        />
                    </div>
                    <div className="input-group">
                        <label>Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            placeholder="Enter your password"
                        />
                    </div>
                    <button type="submit" className="btn-login">Sign In</button>
                </form>

                {/* 👇 Register prompt */}
                <div className="register-prompt" style={{ marginTop: '15px', textAlign: 'center' }}>
                    <span>Don’t have an account? </span>
                    <button
                        className="btn-link"
                        style={{ border: 'none', background: 'none', color: '#007bff', cursor: 'pointer' }}
                        onClick={() => navigate('/register')}
                    >
                        Sign Up
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;
