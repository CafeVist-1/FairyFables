import React, { useState } from 'react';
import comingsoon from '../assets/images/comingsoonb.png';
import "../assets/styles/Popup.css";

export default function Popup({ popupOpen, closePopup }) {
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateEmail(email)) {
            setEmailError('Please enter a valid email address.');
            return;
        }

        setEmailError('');

        try {
            const response = await fetch('http://localhost:5000/api/subscribe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            const data = await response.json();

            if (data.success) {
                setEmail(''); 
                closePopup('Thank you for subscribing!'); 
            } else {
                setEmailError(data.message || 'Subscription failed. Please try again.');
            }
        } catch (error) {
            setEmailError('An error occurred. Please try again.');
        }
    };

    if (!popupOpen) return null;

    return (
        <div className="popup">
            <div className="popup-content">
                <span className="close" onClick={() => closePopup('')}>×</span>
                <img src={comingsoon} alt="Coming Soon Icon" />
                <p>🌙 Join the Waitlist!</p>
                <p>Be the first to explore magical bedtime stories</p>
                <p>Enter your email to get early access!</p>

                <form onSubmit={handleSubmit} className="email-form">
                    <input
                        type="email"
                        id="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={handleEmailChange}
                        required
                        className={emailError ? 'error' : ''}
                    />
                    {emailError && <span className="error-message">{emailError}</span>}
                    <button type="submit">Notify Me</button>
                </form>
            </div>
        </div>
    );
}
