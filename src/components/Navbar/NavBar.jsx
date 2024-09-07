import React, { useState, useEffect, Fragment } from 'react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { HiOutlineArrowRight } from 'react-icons/hi';
import { Popover, Transition } from '@headlessui/react';
import MoreDropdown from './MoreDropdown';
import './NavBar.css';

const NavBar = React.memo(() => {
    const [showNav, setShowNav] = useState(true);
    const [lastScrollTop, setLastScrollTop] = useState(0);
    const [isTransparent, setIsTransparent] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

            if (scrollTop > lastScrollTop) {
                // Scrolling down
                setShowNav(false);
            } else {
                // Scrolling up
                setShowNav(true);
            }

            // Check if the scroll position is greater than 100px to change transparency
            setIsTransparent(scrollTop <= 100);

            setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop); // For Mobile or negative scrolling
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollTop]);

    return (
        <nav className={`navbar py-5 z-50 fixed top-0 left-0 right-0 transition-transform duration-300 ${showNav ? 'translate-y-0' : '-translate-y-24'} ${isTransparent ? '' : 'transparent'}`}>
            <div className='flex justify-between items-center mx-12'>
                <div className='flex items-center'>
                    <a href="#Home" className='flex items-center'>
                        <img src="/Logo.png" className="h-6 sm:h-12" alt="Pixelpulse Logo" />
                        <span className="ml-5 text-white text-[1.6rem] font-base italic">PixelPulse Studio</span>
                    </a>
                </div>

                <div className='hidden md:flex items-center gap-8 ml-14'>
                    <a href="#Projects" className='text-white text-base block py-3 px-4 hover:bg-slate-700 hover:text-cyan-500 rounded-md transition-colors duration-200 ease-in-out'>Portfolio</a>
                    <a href="#About" className='text-white text-base block py-3 px-4 hover:bg-slate-700 hover:text-cyan-500 rounded-md transition-colors duration-200 ease-in-out'>About us</a>
                    <a href="#Services" className='text-white text-base block py-3 px-4 hover:bg-slate-700 hover:text-cyan-500 rounded-md transition-colors duration-200 ease-in-out'>Services</a>

                    <Popover className="relative">
                        <Popover.Button className="group inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-white pl-4 pr-3 py-2 hover:bg-slate-700 rounded-md focus:outline-none">
                            <span className='text-white text-base group-hover:text-cyan-500 font-normal'>More</span>
                            <ChevronDownIcon className="h-5 w-5 text-white group-hover:text-cyan-500" aria-hidden="true" />
                        </Popover.Button>

                        <Transition
                            as={Fragment}
                            enter="ease-out duration-200"
                            enterFrom="opacity-0 translate-y-[-10%]"
                            enterTo="opacity-100 translate-y-0"
                            leave="ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-[-10%]"
                        >
                            <Popover.Panel className="MoreDropdown-container absolute z-10 mt-5">
                                <div className="w-screen bg-white shadow-lg ring-gray-900/5 bg-slate-800 text-white">
                                    <MoreDropdown />
                                </div>
                            </Popover.Panel>
                        </Transition>
                    </Popover>
                </div>

                <div className="flex items-center gap-4 md:order-2">
                    <button className="mr-3 bg-gradient-to-r from-green-400 to-green-600 text-white py-2 px-4 rounded-md transition-transform duration-200 transform hover:scale-105">
                        Learn More
                    </button>
                    <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white py-2 px-4 rounded-md flex items-center transition-transform duration-300 transform hover:scale-105">
                        Get Started
                        <HiOutlineArrowRight className="ml-2 h-5 w-5" />
                    </button>
                </div>

                <button className="md:hidden flex items-center px-3 py-2 border rounded text-white border-white hover:text-white hover:border-white">
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                </button>
            </div>
        </nav>
    );
});

export default NavBar;