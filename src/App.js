// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import SignupForm from './components/SignupForm';
import Dashboard from './components/Dashboard';

function App() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<Register />} />
                    <Route path="/signup" element={<SignupForm />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
