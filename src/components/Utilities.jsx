import aicon from '../assets/images/aicon.png';
import iosicon from '../assets/images/iosicon.png';
import appa from '../assets/images/appa.png';
import appb from '../assets/images/appb.png';
import appc from '../assets/images/appc.png';
import appd from '../assets/images/appd.png';

export const downloadIcons = [
    {
        src: aicon,
        alt: 'Download for Android',
        text: 'Download for Android'
    },
    {
        src: iosicon,
        alt: 'Download for iOS',
        text: 'Download for iOS'
    }
];

export const featureHighlights = [
    {
        text: 'Personalized Stories: Tailored to your child\'s interests.'
    },
    {
        text: 'Soothing Narration: Calming voices to ease children to sleep.'
    },
    {
        text: 'Offline Access: Download stories for bedtime anywhere.'
    }
];

export const slideshowImages = [
    appa,
    appb,
    appc,
    appd
];


export const stepsData = [
    {
        number: 1,
        title: 'Choose Age & Story Type',
        description: 'Select your child\'s age and preferred story type to ensure age-appropriate content.'
    },
    {
        number: 2,
        title: 'Input Your Ideas',
        description: 'Provide your own character or story idea through'
    },
    {
        number: 3,
        title: 'AI Generates the Story',
        description: 'The AI creates a unique story based on your input that can be read or listened to in any language.'
    },
    {
        number: 4,
        title: 'Play the Story',
        description: 'Enjoy the soothing narration or read along as your child drifts off to sleep.'
    }
];

export const featuresData = [
    {
        title: 'Customization',
        description: 'Emphasize DreamTales\' ability to create personalized bedtime stories tailored to each child’s preferences.'
    },
    {
        title: 'AI Power',
        description: 'Highlight the advanced AI technology behind the story generation.'
    },
    {
        title: 'Accessibility',
        description: 'Stress the importance of calming, narrated stories that are perfect for bedtime.'
    }
];

export const staticElements = {
    stars: [1, 2, 3],
    moon: true,
    shootingStar: true,
    mountains: true,
    land: {
        windmill: {
            light: true,
            blades: true
        },
        tree: true
    }
};

export const pricingTiers = [
    {
        title: 'Free Tier',
        description: 'Three free stories per month with basic features and standard customization options.',
        price: 'Free',
        buttonText: 'Choose Free',
        className: ''
    },
    {
        title: 'Premium Monthly',
        description: 'Unlimited stories, advanced customization options, and offline access for a low monthly fee.',
        price: '$9.99 / month',
        buttonText: 'Upgrade to Premium',
        className: 'premium-monthly'
    },
    {
        title: 'Premium Yearly',
        description: 'All Premium features, including advanced options, at a discounted yearly subscription rate',
        price: '$99.99 / year',
        buttonText: 'Upgrade to Premium',
        className: 'premium-yearly'
    }
];

export const comparisonTable = [
    {
        feature: 'Stories per Month',
        freeTier: '3',
        premiumMonthly: 'Unlimited',
        premiumYearly: 'Unlimited'
    },
    {
        feature: 'Customization Options',
        freeTier: 'Basic',
        premiumMonthly: 'Advanced',
        premiumYearly: 'Advanced'
    },
    {
        feature: 'Offline Access',
        freeTier: 'No',
        premiumMonthly: 'Yes',
        premiumYearly: 'Yes'
    }
];

export const footerSections = [
    {
        title: 'Support',
        items: [
            'Help Center',
            'Contact Us',
            'Privacy Policy',
            'Terms of Service',
            'Accessibility Support'
        ]
    },
    {
        title: 'Features',
        items: [
            'AI-Generated Stories',
            'Personalized Bedtime Stories',
            'Interactive Storytelling',
            'Sleep Tracking',
            'Parental Controls'
        ]
    },
    {
        title: 'About DreamTales',
        items: [
            'Our Story',
            'Meet the Team',
            'Careers',
            'Press',
            'Blog'
        ]
    }
];
