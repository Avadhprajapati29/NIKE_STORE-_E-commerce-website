import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Import the CSS file for animations

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Logged in successfully!');
        navigate('/'); // Redirect to homepage after login
    };

    return (
        <div className="auth-container">
            <div className="auth-form">
                <h2>Sign in</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label>Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit">Sign in</button>
                </form>
                <button onClick={() => navigate('/')} className="home-btn">Return Home</button>
            </div>
            <div className="auth-image">
                <h2>Hello, Friend!</h2>
                <p>Enter your personal details and start your journey with us</p>
                <button onClick={() => navigate('/register')} className="signup-btn">Sign Up</button>
            </div>
        </div>
    );
};

export default Login;
