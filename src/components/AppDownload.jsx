import React, { useState } from 'react';
import { downloadIcons, featureHighlights, slideshowImages } from './Utilities'; 
import "../assets/styles/AppDownload.css";
import Popup from './Popup.jsx';

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
                <h2>Download FairyFables</h2>
                <div className="download-buttons">
                    {downloadIcons.map((icon, index) => (
                        <div key={index} onClick={handleDownloadClick}>
                            <img src={icon.src} alt={icon.alt} className="download-icon" />
                            <span>{icon.text}</span>
                        </div>
                    ))}
                </div>
                <div className="fea">
                    <h3>Features Highlight</h3>
                    <ul>
                        {featureHighlights.map((feature, index) => (
                            <li key={index}>
                                <div className="icons"></div>
                                <p>{feature.text}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="app-right">
                <div className="slideshow">
                    {slideshowImages.map((img, index) => (
                        <button
                            key={index}
                            className={`slide-btn slide-btn-${index + 1} ${menuOpen ? 'nav-open' : ''}`}
                        ></button>
                    ))}
                    <div className="slideshow-wrapper">
                        {slideshowImages.map((img, index) => (
                            <div key={index} className="slide">
                                <img className="slide-img" src={img} alt={`App Screen ${index + 1}`} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <Popup
                popupOpen={popupOpen}
                closePopup={closePopup}
            />
        </div>
    );
}

