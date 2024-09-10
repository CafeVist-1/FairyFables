import React, { useEffect, useRef } from 'react';
import { stepsData } from './Utilities'; 
import "../assets/styles/HowItWorks.css";

export default function HowItWorks() {
    const stepsRef = useRef([]);

    useEffect(() => {
        const steps = stepsRef.current;

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

        steps.forEach(step => {
            observer.observe(step);
        });

        return () => {
            steps.forEach(step => {
                observer.unobserve(step);
            });
        };
    }, []);

    return (
        <div className="HowItWorks" id="HowItWorks">
            <div className="container">
                <div className="section-title">
                    <h2>How It Works</h2>
                    <p>Follow these simple steps to create a personalized bedtime story for your child.</p>
                </div>
                <div className="steps-container">
                    {stepsData.map((step, index) => (
                        <div
                            key={index}
                            className="step"
                            ref={el => stepsRef.current[index] = el}
                        >
                            <div className="step-number">{step.number}</div>
                            <div className="step-content">
                                <h3>{step.title}</h3>
                                <p>{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
