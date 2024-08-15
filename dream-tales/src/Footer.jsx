import React from 'react';
import './Footer.css';

export default function Footer() {
    return (
        <div className="Footer">
            <section>
                <div>
                    <p className="phead">Support</p>
                    <p>Help Center</p>
                    <p>Contact Us</p>
                    <p>Privacy Policy</p>
                    <p>Terms of Service</p>
                    <p>Accessibility Support</p>
                </div>
                <div>
                    <p className="phead">Features</p>
                    <p>AI-Generated Stories</p>
                    <p>Personalized Bedtime Stories</p>
                    <p>Interactive Storytelling</p>
                    <p>Sleep Tracking</p>
                    <p>Parental Controls</p>
                </div>
                <div>
                    <p className="phead">About DreamTales</p>
                    <p>Our Story</p>
                    <p>Meet the Team</p>
                    <p>Careers</p>
                    <p>Press</p>
                    <p>Blog</p>
                </div>
            </section>
            <footer>
                <p>&copy; 2023 DreamTales, Inc. · Terms · Sitemap · Privacy · Your Privacy Choices</p>
            </footer>
        </div>
    );
}
