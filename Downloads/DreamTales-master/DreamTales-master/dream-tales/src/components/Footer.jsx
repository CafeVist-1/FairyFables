import React from 'react';
import { footerSections } from './Utilities'; 
import "../assets/styles/Footer.css";

export default function Footer() {
    return (
        <div className="Footer">
            <section>
                {footerSections.map((section, index) => (
                    <div key={index}>
                        <p className="phead">{section.title}</p>
                        {section.items.map((item, itemIndex) => (
                            <p key={itemIndex}>{item}</p>
                        ))}
                    </div>
                ))}
            </section>
            <footer>
                <p>&copy; 2024 DreamTales, Inc. · Terms · Sitemap · Privacy · Your Privacy Choices</p>
            </footer>
        </div>
    );
}
