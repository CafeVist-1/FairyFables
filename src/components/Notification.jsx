import React, { useEffect, useState } from 'react';
import '../assets/styles/Notification.css';

const Notification = ({ message, onClose }) => {
    const [animationClass, setAnimationClass] = useState('');
    const [progress, setProgress] = useState(100);

    useEffect(() => {
        setAnimationClass('show'); 

        const duration = 3000; 
        const interval = 30;

        const timer = setTimeout(() => {
            setAnimationClass('hide'); 
        }, duration);

        const progressTimer = setInterval(() => {
            setProgress((prev) => {
                if (prev <= 0) {
                    clearInterval(progressTimer);
                    return 0;
                }
                return prev - (100 / (duration / interval)); 
            });
        }, interval);

        return () => {
            clearTimeout(timer);
            clearInterval(progressTimer);
        };
    }, []);

    useEffect(() => {
        if (animationClass === 'hide') {
            const timer = setTimeout(onClose, 500); 
            return () => clearTimeout(timer); 
        }
    }, [animationClass, onClose]);

    return (
        <div className={`notification ${animationClass}`}>
            {message}
            <div className="progress-bar" style={{ width: `${progress}%` }}></div>
        </div>
    );
};

export default Notification;

