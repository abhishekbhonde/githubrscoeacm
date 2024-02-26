// RegistrationForm.js
import React, { useState } from 'react';
import './RegistrationForm.css';

function RegistrationForm() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData); // You can handle form submission here
    };

    return (
       <div className="main-container">
         <div className="registration-container">
            <h2 className="registration-title">Registration Form</h2>
            <form onSubmit={handleSubmit} className="registration-form">
                <div className="form-group">
                    <label htmlFor="username" className="form-label">Username:</label>
                    <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} className="form-input" required />
                </div>
                <div className="form-group">
                    <label htmlFor="email" className="form-label">Email:</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="form-input" required />
                </div>
                <div className="form-group">
                    <label htmlFor="password" className="form-label">Password:</label>
                    <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} className="form-input" required />
                </div>
                <button type="submit" className="submit-button">Register</button>
            </form>
        </div>
       </div>
    );
}

export default RegistrationForm;
