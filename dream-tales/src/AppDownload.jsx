import React from 'react';
import './AppDownload.css';
import aicon from './assets/aicon.png';
import iosicon from './assets/iosicon.png';
import appa from './assets/appa.avif';
import appb from './assets/appb.avif';
import appc from './assets/appc.avif';
import appd from './assets/appd.avif';

export default function AppDownload() {
    return (
        <div className="app-download" id="AppDownload">
            <div className="app-left">
                <h2>Download DreamTales</h2>
                <div className="download-buttons">
                    <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
                        <img src={aicon} alt="Download for Android" className="download-icon" />
                        <span>Download for Android</span>
                    </a>
                    <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer">
                        <img src={iosicon} alt="Download for iOS" className="download-icon" />
                        <span>Download for iOS</span>
                    </a>
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
                <div class="slideshow">
                    <button class="slide-btn slide-btn-1"></button>
                    <button class="slide-btn slide-btn-2"></button>
                    <button class="slide-btn slide-btn-3"></button>
                    <button class="slide-btn slide-btn-4"></button>
                    <div class="slideshow-wrapper">
                        <div class="slide">
                            <img class="slide-img"
                                src={appa} />
                        </div>
                        <div class="slide">
                            <img class="slide-img"
                                src={appb} />
                        </div>
                        <div class="slide">
                            <img class="slide-img" src={appc} />
                        </div>
                        <div class="slide">
                            <img class="slide-img" src={appd} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


