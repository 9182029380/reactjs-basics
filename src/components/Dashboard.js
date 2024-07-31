// components/Dashboard.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Form.css';

function Dashboard() {
    const navigate = useNavigate();
    const user = localStorage.getItem('user');

    if (!user) {
        navigate('/signup'); // Redirect to signup if no user data is found
        return null;
    }

    const parsedUser = JSON.parse(user);

    return (
        <div className="form-container">
            <h2>Dashboard</h2>
            <p>Welcome, {parsedUser.username}!</p>
            <p>Email: {parsedUser.email}</p>
        </div>
    );
}

export default Dashboard;
