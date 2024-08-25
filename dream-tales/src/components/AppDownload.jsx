import React, { useState } from 'react';
import "../assets/styles/AppDownload.css";
import aicon from '../assets/images/aicon.png';
import iosicon from '../assets/images/iosicon.png';
import appa from '../assets/images/appa.png';
import appb from '../assets/images/appb.png';
import appc from '../assets/images/appc.png';
import appd from '../assets/images/appd.png';

export default function AppDownload({ menuOpen }) {
    const [popupOpen, setPopupOpen] = useState(false);

    const handleDownloadClick = () => {
        setPopupOpen(true);
    };

    const closePopup = () => {
        setPopupOpen(false);
    };

    return (
        <div className="app-download" id="AppDownload">
            <div className="app-left">
                <h2>Download DreamTales</h2>
                <div className="download-buttons">
                    <div onClick={handleDownloadClick}>
                        <img src={aicon} alt="Download for Android" className="download-icon" />
                        <span>Download for Android</span>
                    </div>
                    <div onClick={handleDownloadClick}>
                        <img src={iosicon} alt="Download for iOS" className="download-icon" />
                        <span>Download for iOS</span>
                    </div>
                </div>
                <div className="fea">
                    <h3>Features Highlight</h3>
                    <ul>
                        <li>
                            <div className="icons"></div>
                            <p>Personalized Stories: Tailored to your child's interests.</p>
                        </li>
                        <li>
                            <div className="icons"></div>
                            <p>Soothing Narration: Calming voices to ease children to sleep.</p>
                        </li>
                        <li>
                            <div className="icons"></div>
                            <p>Offline Access: Download stories for bedtime anywhere.</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="app-right">
                <div className="slideshow">
                    <button className={`slide-btn slide-btn-1 ${menuOpen ? 'nav-open' : ''}`}></button>
                    <button className={`slide-btn slide-btn-2 ${menuOpen ? 'nav-open' : ''}`}></button>
                    <button className={`slide-btn slide-btn-3 ${menuOpen ? 'nav-open' : ''}`}></button>
                    <button className={`slide-btn slide-btn-4 ${menuOpen ? 'nav-open' : ''}`}></button>
                    <div className="slideshow-wrapper">
                        <div className="slide">
                            <img className="slide-img" src={appa} alt="App Screen 1" />
                        </div>
                        <div className="slide">
                            <img className="slide-img" src={appb} alt="App Screen 2" />
                        </div>
                        <div className="slide">
                            <img className="slide-img" src={appc} alt="App Screen 3" />
                        </div>
                        <div className="slide">
                            <img className="slide-img" src={appd} alt="App Screen 4" />
                        </div>
                    </div>
                </div>
            </div>

            {popupOpen && (
                <div className="popup">
                    <div className="popup-content">
                        <span className="close" onClick={closePopup}>&times;</span>
                        <p>COMING SOON!</p>
                    </div>
                </div>
            )}
        </div>
    );
}
