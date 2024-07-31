
import React from 'react';
import './Form.css';

function Dashboard() {
    const user = JSON.parse(localStorage.getItem('user'));

    return (
        <div className="form-container">
            <h2>Dashboard</h2>
            <p>Welcome, {user.username}!</p>
            <p>Email: {user.email}</p>
        </div>
    );
}

export default Dashboard;
