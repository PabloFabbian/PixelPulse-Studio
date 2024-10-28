import React, { useState, useEffect } from 'react';
import './navbar.css';

function MoreDropdown() {
    const [showMenu, setShowMenu] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [buttonActive, setButtonActive] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > lastScrollY) {
                setShowMenu(false);
                setButtonActive(false);
            } else {
                setShowMenu(true);
                setButtonActive(true);
            }
            setLastScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    const items = [
        {
            title: 'Our work',
            itemList: [
                { text: 'See our latest design projects and client testimonials', link: '#', imageSrc: './public/Bullet.webp', imageAlt: 'Graphic Design' },
                { text: 'Explore our website design services and success stories', link: '#', imageSrc: './public/Bullet.webp', imageAlt: 'Web Design' },
                { text: 'Learn how we can help you build a strong brand identity', link: '#', imageSrc: './public/Bullet.webp', imageAlt: 'Branding' },
                { text: 'Discover our creative print design solutions', link: '#', imageSrc: './public/Bullet.webp', imageAlt: 'Print Design' }
            ]
        },
        {
            title: 'Testimonials',
            itemList: [
                { text: 'Their experience working with us', link: '#', imageSrc: './public/Bullet2.webp', imageAlt: 'BrightSky Technologies' },
                { text: 'How we helped them achieve their goals', link: '#', imageSrc: './public/Bullet2.webp', imageAlt: 'Infinite Designs Co.' },
                { text: 'Why they recommend our design services', link: '#', imageSrc: './public/Bullet2.webp', imageAlt: 'Visionary Creations' },
                { text: 'The impact of our design on their business', link: '#', imageSrc: './public/Bullet2.webp', imageAlt: 'Artisan Studios Inc.' }
            ]
        },
        {
            title: 'Contact Us',
            itemList: [
                { text: "We'd love to hear about your design project", link: '#', imageSrc: './public/Bullet3.webp', imageAlt: 'Get in touch' },
                { text: 'Let us provide you with a personalized quote', link: '#', imageSrc: './public/Bullet3.webp', imageAlt: 'Request a Quote' },
                { text: 'Book a consultation to discuss your design needs', link: '#', imageSrc: './public/Bullet3.webp', imageAlt: 'Schedule a Meeting' },
                { text: 'Find answers to common questions about our services', link: '#', imageSrc: './public/Bullet3.webp', imageAlt: 'FAQs' }
            ]
        }
    ];

    return (
        <div className={`navbar grid grid-cols-4 w-full justify-between p-6 px-4 md:px-6 z-10 transition-transform duration-300 -mt-0.5 ${showMenu ? 'translate-y-0' : '-translate-y-full'}`}>
            {items.map((section, index) => (
                <div className="item-container space-y-6 space-x-9 sm:mb-4 md:mb-0" key={index}>
                    <h2 className='section-subtitle'>{section.title}</h2>
                    {section.itemList.map((item, itemIndex) => (
                        <ul className='item hover:bg-slate-700 hover:text-cyan-500 transform hover:cursor-pointer p-2 pl-6 rounded-xl' key={itemIndex}>
                            <div className='title-container'>
                                <img src={item.imageSrc} className='mt-1.5 mr-3 h-4 w-4 max-w-full' alt={item.imageAlt} />
                                <a href={item.link}>{item.imageAlt}</a>
                            </div>
                            <li className='item-text text-slate-400 max-w-xs whitespace-normal text-pretty'>{item.text}</li>
                        </ul>
                    ))}
                </div>
            ))}
            <div className="panel-container mt-4 md:mt-0 flex justify-center items-center h-full ml-10">
                <div className="panel-image p-8 bg-gray-500 bg-center bg-no-repeat bg-cover rounded-lg bg-blend-multiply hover:cursor-pointer hover:bg-blend-soft-light">
                    <p className="max-w-xl mb-5 font-extrabold leading-tight tracking-tight text-white">Preview the new Flowbite dashboard animations.</p>
                    <button
                        type="button"
                        className={`inline-flex items-center px-2.5 py-1.5 text-xs font-medium text-center text-white border border-white rounded-lg hover:bg-white hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-700 self-start ${!buttonActive ? 'opacity-50 cursor-not-allowed' : ''}`}
                        disabled={!buttonActive}
                    >
                        Get started
                        <svg className="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default MoreDropdown;