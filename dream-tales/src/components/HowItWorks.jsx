import React, { useEffect, useRef } from 'react';
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
                    <div className="step" ref={el => stepsRef.current[0] = el}>
                        <div className="step-number">1</div>
                        <div className="step-content">
                            <h3>Choose Age & Story Type</h3>
                            <p>Select your child's age and preferred story type to ensure age-appropriate content.</p>
                        </div>
                    </div>
                    <div className="step" ref={el => stepsRef.current[1] = el}>
                        <div className="step-number">2</div>
                        <div className="step-content">
                            <h3>Input Your Ideas</h3>
                            <p>Provide your own character or story idea through</p>
                        </div>
                    </div>
                    <div className="step" ref={el => stepsRef.current[2] = el}>
                        <div className="step-number">3</div>
                        <div className="step-content">
                            <h3>AI Generates the Story</h3>
                            <p>The AI creates a unique story based on your input that can be read or listened to in any language.</p>
                        </div>
                    </div>
                    <div className="step" ref={el => stepsRef.current[3] = el}>
                        <div className="step-number">4</div>
                        <div className="step-content">
                            <h3>Play the Story</h3>
                            <p>Enjoy the soothing narration or read along as your child drifts off to sleep.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
