// components/Register.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Form.css';

function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const validate = () => {
        let tempErrors = {};
        if (username.length < 3) {
            tempErrors.username = "Username must be at least 3 characters long.";
        }
        if (password.length < 6) {
            tempErrors.password = "Password must be at least 6 characters long.";
        }
        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validate()) {
            try {
                const response = await fetch('http://localhost:5000/api/register', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ username, password })
                });
                if (response.ok) {
                    navigate('/signup');
                } else {
                    setErrors({ submit: 'Registration failed. Please try again.' });
                }
            } catch (error) {
                setErrors({ submit: 'An error occurred. Please try again.' });
            }
        }
    };

    return (
        <div className="form-container">
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    {errors.username && <p className="error">{errors.username}</p>}
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {errors.password && <p className="error">{errors.password}</p>}
                </div>
                {errors.submit && <p className="error">{errors.submit}</p>}
                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default Register;
