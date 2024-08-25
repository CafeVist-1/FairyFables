import React, { useEffect, useRef } from 'react';
import "../assets/styles/Pricing.css";

export default function Pricing() {
    const pricingTiersRef = useRef([]);

    useEffect(() => {
        const pricingTiers = pricingTiersRef.current;

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

        pricingTiers.forEach(tier => {
            observer.observe(tier);
        });

        return () => {
            pricingTiers.forEach(tier => {
                observer.unobserve(tier);
            });
        };
    }, []);

    return (
        <div className="Pricing" id="Pricing">
            <h2>Pricing</h2>
            <div className="pricing-table">
                <div className="pricing-tier" ref={el => pricingTiersRef.current[0] = el}>
                    <h3>Free Tier</h3>
                    <p>Three free stories per month with basic features.</p>
                    <p className="price">Free</p>
                    <button className="cta-button">Choose Free</button>
                </div>
                <div className="pricing-tier premium-monthly" ref={el => pricingTiersRef.current[1] = el}>
                    <h3>Premium Monthly</h3>
                    <p>Unlimited stories, advanced customization options, and offline access for a low monthly fee.</p>
                    <p className="price">$9.99 / month</p>
                    <button className="cta-button">Upgrade to Premium</button>
                </div>
                <div className="pricing-tier premium-yearly" ref={el => pricingTiersRef.current[2] = el}>
                    <h3>Premium Yearly</h3>
                    <p>All Premium features at a discounted yearly rate.</p>
                    <p className="price">$99.99 / year</p>
                    <button className="cta-button">Upgrade to Premium</button>
                </div>
            </div>
            <div className="pricing-comparison">
                <h3>Comparison Table</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Feature</th>
                            <th>Free Tier</th>
                            <th>Premium Monthly</th>
                            <th>Premium Yearly</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Stories per Month</td>
                            <td>3</td>
                            <td>Unlimited</td>
                            <td>Unlimited</td>
                        </tr>
                        <tr>
                            <td>Customization Options</td>
                            <td>Basic</td>
                            <td>Advanced</td>
                            <td>Advanced</td>
                        </tr>
                        <tr>
                            <td>Offline Access</td>
                            <td>No</td>
                            <td>Yes</td>
                            <td>Yes</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
