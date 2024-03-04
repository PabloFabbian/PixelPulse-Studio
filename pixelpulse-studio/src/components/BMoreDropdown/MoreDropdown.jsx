import React from 'react';

function MoreDropdown() {
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
        <div className="grid grid-cols-4 w-full justify-between border-b border-gray-200 p-4 dark:border-gray-600 dark:bg-gray-700 -ml-5">
            {items.map((section, index) => (
                <div className="item-container space-y-4 space-x-10 sm:mb-4 md:mb-0" key={index}>
                    <h2 className='section-subtitle'>{section.title}</h2>
                    {section.itemList.map((item, itemIndex) => (
                        <ul className='item' key={itemIndex}>
                            <div className='title-container'>
                                <img src={item.imageSrc} className='mr-3 h-4 w-4' alt={item.imageAlt}></img>
                                <a href={item.link} className="hover:underline hover:text-blue-600 dark:hover:text-blue-500">{item.imageAlt}</a>
                            </div>
                            <li className='item-text'>{item.text}</li>
                        </ul>
                    ))}
                </div>
            ))}
            <div className="panel-container mt-4 md:mt-0 flex justify-center items-center h-full">
                <div className="panel-image p-8 bg-gray-500 bg-center bg-no-repeat bg-cover rounded-lg bg-blend-multiply hover:bg-blend-soft-light dark:hover:bg-blend-darken" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <p className="max-w-xl mb-5 font-extrabold leading-tight tracking-tight text-white">Preview the new Flowbite dashboard navigation.</p>
                    <button type="button" className="inline-flex items-center px-2.5 py-1.5 text-xs font-medium text-center text-white border border-white rounded-lg hover:bg-white hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-700 self-start">
                        Get started
                        <svg className="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default MoreDropdown;