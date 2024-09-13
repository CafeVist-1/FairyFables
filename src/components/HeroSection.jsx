import React, { useState } from 'react';
import video from '../assets/images/videob.mp4';
import download from '../assets/images/download.png';
import "../assets/styles/HeroSection.css";
import Popup from './Popup.jsx';

export default function HeroSection() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [popupOpen, setPopupOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleMenuItemClick = (event) => {
        event.preventDefault();
        setMenuOpen(false);
        const sectionId = event.currentTarget.getAttribute('href');
        const section = document.querySelector(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleButtonClick = () => {
        setPopupOpen(true);
    };

    const closePopup = () => {
        setPopupOpen(false);
    };

    return (
        <div className="HeroSection" id="HeroSection">
            <nav className="navbar">
                <div className="logo"></div>
                <ul className={menuOpen ? "open" : ""}>
                    <li><a href="#HeroSection" onClick={handleMenuItemClick}>Home</a></li>
                    <li><a href="#AppDownload" onClick={handleMenuItemClick}>Download</a></li>
                    <li><a href="#HowItWorks" onClick={handleMenuItemClick}>Working</a></li>
                    <li><a href="#Features" onClick={handleMenuItemClick}>Features</a></li>
                    <li><a href="#Pricing" onClick={handleMenuItemClick}>Pricing</a></li>
                </ul>
                <span className="material-symbols-outlined menu-icon" onClick={toggleMenu}>
                    menu
                </span>
            </nav>
            <div className="main">
                <div className="background">
                    <video id="background-video" autoPlay loop muted preload="auto">
                        <source src={video} type="video/mp4" />
                    </video>
                </div>
                <h1>
                    Magical Bedtime Stories for Sweet Dreams
                </h1>
                <p>
                    Help your child unwind with personalized bedtime stories, crafted by AI to inspire sweet dreams.
                </p>
                <button onClick={handleButtonClick}><img src={download} alt="download png" />Download FairyFables</button>
            </div>

            <Popup
                popupOpen={popupOpen}
                closePopup={closePopup}
            />
        </div>
    );
}
