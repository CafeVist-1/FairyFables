import React, { useState } from 'react';
import comingsoon from '../assets/images/comingsoonb.png';
import "../assets/styles/Popup.css";

export default function Popup({ popupOpen, closePopup }) {
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [emailList, setEmailList] = useState([]);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateEmail(email)) {
            setEmailError('Please enter a valid email address.');
        } else if (emailList.includes(email)) {
            setEmailError('This email is already subscribed.');
        } else {
            setEmailList([...emailList, email]);
            setEmailError('');
            console.log('Email submitted:', email);
            setEmail(''); // Clear the input field
            closePopup();
        }
    };

    if (!popupOpen) return null;

    return (
        <div className="popup">
            <div className="popup-content">
                <span className="close" onClick={closePopup}>&times;</span>
                <img src={comingsoon} alt="Coming Soon Icon" />
                <p>
                    🌙 Join the Waitlist! </p>
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
