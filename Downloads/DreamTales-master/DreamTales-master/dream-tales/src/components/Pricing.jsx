import React, { useEffect, useRef } from 'react';
import { pricingTiers, comparisonTable } from './Utilities'; 
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
                {pricingTiers.map((tier, index) => (
                    <div
                        key={index}
                        className={`pricing-tier ${tier.className}`}
                        ref={el => pricingTiersRef.current[index] = el}
                    >
                        <h3>{tier.title}</h3>
                        <p>{tier.description}</p>
                        <p className="price">{tier.price}</p>
                        <button className="cta-button">{tier.buttonText}</button>
                    </div>
                ))}
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
                        {comparisonTable.map((row, index) => (
                            <tr key={index}>
                                <td>{row.feature}</td>
                                <td>{row.freeTier}</td>
                                <td>{row.premiumMonthly}</td>
                                <td>{row.premiumYearly}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
