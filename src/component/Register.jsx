import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // ✅ using same CSS for consistent design

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Registered successfully!');
        navigate('/login'); // Redirect to login after register
    };

    return (
        <div className="login-wrapper">
            <div className="login-box">
                <h2 className="login-title">Create Account</h2>
                <form onSubmit={handleSubmit} className="login-form">
                    <div className="input-group">
                        <label>Name</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            placeholder="Enter your name"
                        />
                    </div>
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
                    <button type="submit" className="btn-login">Sign Up</button>
                </form>

                {/* 👇 Login redirect */}
                <div className="register-prompt">
                    <span>Already have an account?</span>
                    <button
                        onClick={() => navigate('/login')}
                        className="btn-link"
                    >
                        Sign In
                    </button>
                </div>

                <button onClick={() => navigate('/')} className="btn-home">
                    ← Return Home
                </button>
            </div>
        </div>
    );
};

export default Register;
