import React, { useEffect, useRef } from 'react';
import { featuresData, staticElements } from './Utilities'; 
import "../assets/styles/Features.css";

export default function Features() {
    const featuresRef = useRef([]);

    useEffect(() => {
        const features = featuresRef.current;

        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observerCallback = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                    observer.unobserve(entry.target);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        features.forEach(feature => {
            observer.observe(feature);
        });

        return () => {
            features.forEach(feature => {
                observer.unobserve(feature);
            });
        };
    }, []);

    return (
        <div className="features" id="Features">
            <div className="containerBox">
                    <div className="land">
                        {staticElements.land.windmill && (
                            <div className="windmill">
                                {staticElements.land.windmill.light && <div className="light"></div>}
                                {staticElements.land.windmill.blades && <div className="blades"></div>}
                            </div>
                        )}
                        {staticElements.land.tree && <div className="tree"></div>}
                    </div>
                {/* )} */}
            </div>
            <h2>Feature Highlights</h2>
            {featuresData.map((feature, index) => (
                <div
                    key={index}
                    className="feature"
                    ref={el => featuresRef.current[index] = el}
                >
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                </div>
            ))}
        </div>
    );
}
