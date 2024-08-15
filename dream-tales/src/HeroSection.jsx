import React, { useState } from 'react';
import video from './assets/videob.mp4'
import './HeroSection.css';

export default function HeroSection() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleMenuItemClick = () => {
        setMenuOpen(false);
    };

    return (
        <div className="HeroSection" id="HeroSection">
            <nav className="navbar">
                <div className="logo"></div>
                <ul className={menuOpen ? "open" : ""}>
                    <li onClick={handleMenuItemClick}> <a href="#HeroSection">Home</a></li>
                    <li onClick={handleMenuItemClick}> <a href="#AppDownload">Download</a></li>
                    <li onClick={handleMenuItemClick}> <a href="#HowItWorks">Working</a></li>
                    <li onClick={handleMenuItemClick}> <a href="#Features">Features</a></li>
                    <li onClick={handleMenuItemClick}> <a href="#Pricing">Pricing</a></li>
                </ul>
                <span className="material-symbols-outlined menu-icon" onClick={toggleMenu}>
                    menu
                </span>
            </nav>
            <div className="main">
                <div className="background">
                <video id="background-video" autoPlay loop muted>
                        <source src={video} type="video/mp4"  />
                    </video>
                    {/* <div className="stars"></div>
                    <div className="twinkling"></div>
                    <div className="clouds"></div> */}
                </div>
                <h1>
                    Magical Bedtime Stories for Sweet Dreams
                </h1>
                <p>
                    Help your child unwind with personalized bedtime stories, crafted by
                    AI to inspire sweet dreams.
                </p>
                <a href="https://g.co/kgs/n1amGdF" target="_blank" rel="noopener noreferrer">
                    <button>Download DreamTales</button>
                </a>
            </div>
        </div>
    );
}
