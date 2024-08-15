import React, { useEffect, useRef } from 'react';
import './Features.css';

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
                <div className="star star-1"></div>
                <div className="star star-2"></div>
                <div className="star star-3"></div>
                <div className="moon"></div>
                <div className="shooting-star"></div>
                <div className="mountains"></div>
                <div className="land">
                    <div className="windmill">
                        <div className="light"></div>
                        <div className="blades"></div>
                    </div>
                    <div className="tree"></div>
                </div>
            </div>
            <h2>Feature Highlights</h2>
            <div className="feature" ref={el => featuresRef.current[0] = el}>
                <h3>Customization</h3>
                <p>Emphasize DreamTales' ability to create personalized bedtime stories tailored to each child’s preferences.</p>
            </div>
            <div className="feature" ref={el => featuresRef.current[1] = el}>
                <h3>AI Power</h3>
                <p>Highlight the advanced AI technology behind the story generation.</p>
            </div>
            <div className="feature" ref={el => featuresRef.current[2] = el}>
                <h3>Accessibility</h3>
                <p>Stress the importance of calming, narrated stories that are perfect for bedtime.</p>
            </div>
        </div>
    );
}
